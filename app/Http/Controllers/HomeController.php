<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ladder;
use Illuminate\Support\Facades\DB;
use App\DataTables\UserLadderProblemDataTable;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index']]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('frontend.home');
    }

    public function profile()
    {
        return view('frontend.profile.profile');
    }

    public function settings()
    {
        return view('frontend.profile.settings');
    }

    public function showLadders()
    {
        $user = auth('web')->user();
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

        return view('frontend.profile.ladders', compact('ladders', 'progresses'));
    }

    public function showLadderProgress(UserLadderProblemDataTable $datatable, $ladderId)
    {
        $ladder = Ladder::find($ladderId);
        $user = auth('web')->user();

        if ($ladder == null) {
            return abort(404);
        }

        return $datatable->with('ladderId', $ladder->id)->with('userId', $user->id)->with('forUserOnly', true)->render('frontend.profile.ladder-problems', compact('ladder'));
    }
}
