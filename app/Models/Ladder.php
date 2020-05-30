<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ladder extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ladder_name', 'ladder_description', 'ladder_difficulty',
    ];
}
