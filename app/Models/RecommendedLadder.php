<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecommendedLadder extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'recommended_ladders';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'course_id', 'ladder_id',
    ];
}
