<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserSettingsRequest;
use Illuminate\Support\Facades\Hash;
use App\Http\Traits\FetchCFSubmissionTrait;

class UserAPIController extends Controller
{
    use FetchCFSubmissionTrait;
    
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

    public function getUser($id)
    {
        $user = User::find($id);

        if ($user == null) {
            return response('Invalid user', 404);
        }

        return response($user, 200);
    }

    public function saveUserProfile(UserSettingsRequest $request)
    {
        $request->validated();

        $user = auth('api')->user();

        $user->name = $request->name;

        $changedCFHandle = 0;

        if ($user->cf_handle != $request->cf_handle) {
            $changedCFHandle = 1;
            $user->invalid_cf_handle = 1;
            $this->fetchUserCFSubmission($user->id);
        }

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

        return response(($changedCFHandle ? 'Codeforces submission will be updated within 5 minutes.' : ''), 200);
    }
    
    public function changeProfileDataAsAdmin(Request $request, $id)
    {
        $user = User::find($id);

        if ($user == null) {
            return response('Invalid user.', 404);
        }

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'exists:users'],
            'cf_handle' => ['required', 'string', 'max:255'],
            'institution' => ['nullable', 'string', 'max:255'],
        ]);

        $user->name = $request->name;

        $changedCFHandle = 0;

        if ($user->cf_handle != $request->cf_handle) {
            $changedCFHandle = 1;
            $user->invalid_cf_handle = 1;
            $this->fetchUserCFSubmission($user->id);
        }

        $user->cf_handle = $request->cf_handle;
        $user->institution = $request->institution;
        
        if ($user->email != $request->email) {
            $user->email = $request->email;
            $user->email_verified_at = null;
        }

        $user->save();

        return response(($changedCFHandle ? 'Codeforces submission will be updated within 5 minutes.' : ''), 200);
    }
}
