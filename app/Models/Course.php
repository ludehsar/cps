<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'courses';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'course_name', 'course_description', 'user_id', 'course_price',
    ];

    /**
     * Relationships
     *
    */
    public function courseClasses() {
        return $this->hasMany('App\Models\CourseClass');
    }

    public function enrolees() {
        return $this->belongsToMany('App\Models\User', 'enrolees')->wherePivotIn('status', ['enrolled', 'pending']);
    }

    public function approvedEnrolees() {
        return $this->belongsToMany('App\Models\User', 'enrolees')->wherePivot('status', 'enrolled');
    }

    public function ladders() {
        return $this->belongsToMany('App\Models\Ladder', 'recommended_ladders');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
