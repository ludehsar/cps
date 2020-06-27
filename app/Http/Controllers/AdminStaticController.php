<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DataTables\LadderDataTable;
use App\Models\Ladder;
use App\Models\User;
use App\Models\Category;
use App\Models\CFSubmission;
use App\Models\LadderProblem;
use App\DataTables\LadderProblemDataTable;
use App\DataTables\UserLadderProblemDataTable;
use App\DataTables\UserDataTable;
use App\DataTables\CFSubmissionDataTable;
use App\DataTables\CategoryDataTable;
use Illuminate\Support\Facades\DB;

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

        $ladders = Ladder::all();

        $progresses = array();

        foreach ($ladders as $ladder) {
            $ladderCnt = $ladder->problems->count();
            $solvedCnt = DB::table('c_f_submissions')
                                ->join('ladder_problems', function($join) use($user, $ladder) {
                                    $join->on('c_f_submissions.problem_url', '=', 'ladder_problems.problem_url')
                                            ->where('c_f_submissions.user_id', $user->id)
                                            ->where('ladder_problems.ladder_id', $ladder->id);
                                })->count();

            if ($ladderCnt == 0) array_push($progresses, 100.0);
            else array_push($progresses, round(($solvedCnt * 100.0 / $ladderCnt), 2));
        }

        return $datatable->with('user_id', $user->id)->render('admin.user.profile', compact('user', 'ladders', 'progresses'));
    }

    public function showNewUserForm()
    {
        return view('admin.user.create');
    }

    public function showUserLadderProgress(UserLadderProblemDataTable $datatable, $userId, $ladderId)
    {
        $ladder = Ladder::find($ladderId);
        $user = User::find($userId);

        if ($ladder == null || $user == null) {
            return abort(404);
        }

        return $datatable->with('ladderId', $ladder->id)->with('userId', $user->id)->render('admin.user.problem-lists', compact('ladder', 'user'));
    }

    public function showCategories(CategoryDataTable $datatable)
    {
        return $datatable->render('admin.category.lists');
    }

    public function showNewCategoryForm()
    {
        return view('admin.category.create');
    }

    public function showEditCategoryForm($id)
    {
        $category = Category::find($id);

        if ($category == null) {
            return abort(404);
        }

        return view('admin.category.edit', compact('category'));
    }
}
