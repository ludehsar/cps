<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewLadderRequest;
use App\Models\Ladder;

class AdminController extends Controller
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

    public function showLadder()
    {
        return view('admin.ladder.lists');
    }

    public function showLadderProblems(int $ladderId)
    {
        return view('admin.ladder.lists');
    }

    public function showNewLadderForm()
    {
        return view('admin.ladder.create-ladder');
    }

    public function createNewLadder(NewLadderRequest $request)
    {
        $request->validated();

        Ladder::create([
            'ladder_name' => $request->ladder_name,
            'ladder_difficulty' => $request->ladder_difficulty,
            'ladder_description' => $request->ladder_description,
        ]);

        return redirect()->route('admin-ladder-list');
    }
}
