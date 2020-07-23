<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Enrolee extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'enrolees';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'course_id', 'has_paid', 'status',
    ];
}
