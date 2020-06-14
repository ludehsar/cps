<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserSettingsRequest;
use Illuminate\Support\Facades\Hash;
use App\Jobs\FetchUserCFSubmissions;

class UserAPIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getAuthUser()
    {
        return response(auth('api')->user(), 200);
    }

    public function saveUserProfile(UserSettingsRequest $request)
    {
        $request->validated();

        $user = auth('api')->user();

        $user->name = $request->name;
        $user->cf_handle = $request->cf_handle;
        $user->institution = $request->institution;
        
        if ($user->email != $request->email) {
            $user->email = $request->email;
            $user->email_verified_at = null;
        }

        if ($request->has('new_password') && strlen(trim($request->new_password)) > 0) {
            $user->password = Hash::make($request->new_password);
        }

        $user->save();

        $this->fetchUserCFSubmission($user->id);

        return response(null, 200);
    }

    public function fetchUserCFSubmission($id)
    {
        $user = User::find($id);

        if ($user == null) {
            return response('Such user does not exist.', 404);
        }

        // Fetches user cf submissions
        FetchUserCFSubmissions::dispatch($user);

        return response('Codeforces submission will be updated within 5 minutes.', 200);
    }
}
