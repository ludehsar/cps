<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CFSubmission;
use App\Http\Traits\FetchCFSubmissionTrait;

class UserController extends Controller
{
    use FetchCFSubmissionTrait;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function createNewUser(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'cf_handle' => ['required', 'string', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = User::create($request->all());

        $this->fetchUserCFSubmission($user->id);

        return redirect()->route('admin-user-list');
    }

    public function deleteUser($id)
    {
        $user = User::find($id);

        if ($user == null) {
            return abort(404);
        }

        CFSubmission::where('user_id', $user->id)->delete();

        $user->delete();

        return redirect()->route('admin-user-list');
    }
}
