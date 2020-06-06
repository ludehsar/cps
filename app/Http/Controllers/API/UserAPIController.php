<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserSettingsRequest;
use Illuminate\Support\Facades\Hash;

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

        return response(null, 200);
    }
}
