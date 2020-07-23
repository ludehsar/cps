<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseClass extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'course_classes';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'course_id', 'class_title', 'class_description', 'is_published', 'is_public',
    ];

    /**
     * Relationships
     *
    */
    public function comments() {
        return $this->hasMany('App\Models\Comment');
    }

    public function course() {
        return $this->belongsTo('App\Modesls\Course');
    }

    public function tags() {
        return $this->belongsToMany('App\Models\Tag')->as('course_class_tag_bridges');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
