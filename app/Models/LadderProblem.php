<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LadderProblem extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ladder_problems';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ladder_id', 'problem_title', 'problem_url', 'online_judge', 'problem_difficulty',
    ];
}
