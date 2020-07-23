<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'username', 'cf_handle', 'institution', 'password', 'email_verified_at', 'invalid_cf_handle'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'is_admin',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Relationships
     *
    */
    public function codeforcesSubmissions() {
        return $this->hasMany('App\Models\CFSubmission');
    }

    public function comments() {
        return $this->hasMany('App\Models\Comments');
    }

    public function courses() {
        return $this->hasMany('App\Models\Course');
    }

    public function courseClasses() {
        return $this->hasMany('App\Models\CourseClass');
    }

    public function enrolledCourses() {
        return $this->belongsToMany('App\Models\Course')->as('enrolees')->wherePivotIn('status', ['enrolled', 'pending']);
    }

    public function approvedEnrolledCourses() {
        return $this->belongsToMany('App\Models\Course')->as('enrolees')->wherePivot('status', 'enrolled');
    }
}
