<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ladder extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'ladders';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ladder_name', 'ladder_description', 'ladder_difficulty',
    ];

    /**
     * Relationships
     *
    */
    public function recommendedToCourses() {
        return $this->belongsToMany('App\Models\Course')->as('recommended_ladders');
    }

    public function problems() {
        return $this->hasMany('App\Models\LadderProblem');
    }
}
