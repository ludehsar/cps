<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewLadderRequest;
use App\Models\Ladder;

class LadderController extends Controller
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

    public function editLadder(NewLadderRequest $request, $id)
    {
        $request->validated();

        $ladder = Ladder::find($id);

        if ($ladder == null) return abort(404);

        $ladder->update([
            'ladder_name' => $request->ladder_name,
            'ladder_difficulty' => $request->ladder_difficulty,
            'ladder_description' => $request->ladder_description,
        ]);

        return redirect()->route('admin-ladder-list');
    }
}
