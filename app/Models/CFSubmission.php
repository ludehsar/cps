<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CFSubmission extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'submission_id', 'contest_id', 'problem_index',
    ];
}
