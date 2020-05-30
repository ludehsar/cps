<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LadderProblem extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ladder_id', 'problem_title', 'problem_url', 'online_judge', 'problem_difficulty',
    ];
}
