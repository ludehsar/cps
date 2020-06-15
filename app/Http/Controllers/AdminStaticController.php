<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DataTables\LadderDataTable;
use App\Models\Ladder;
use App\Models\User;
use App\DataTables\LadderProblemDataTable;
use App\DataTables\UserDataTable;
use App\DataTables\CFSubmissionDataTable;

class AdminStaticController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function showDashboard()
    {
        return view('admin.dashboard.dashboard');
    }

    public function showLadder(LadderDataTable $datatable)
    {
        return $datatable->render('admin.ladder.lists');
    }

    public function showLadderProblems(LadderProblemDataTable $datatable, $ladderId)
    {
        $ladder = Ladder::find($ladderId);

        if ($ladder == null) {
            return abort(404);
        }

        return $datatable->with('ladderId', $ladder->id)->render('admin.ladder.problem-lists', compact('ladder'));
    }

    public function showNewLadderForm()
    {
        return view('admin.ladder.create-ladder');
    }

    public function showEditLadderForm(int $ladderId)
    {
        $ladder = Ladder::find($ladderId);
        
        if ($ladder == null) {
            return abort(404);
        }

        return view('admin.ladder.edit-ladder', compact('ladder'));
    }

    public function showUsersList(UserDataTable $datatable)
    {
        return $datatable->render('admin.user.lists');
    }

    public function showUserProfile(CFSubmissionDataTable $datatable, $username)
    {
        $user = User::where('username', $username)->first();

        if ($user == null) {
            return abort(404);
        }

        return $datatable->with('user_id', $user->id)->render('admin.user.profile', compact('user'));
    }
}
