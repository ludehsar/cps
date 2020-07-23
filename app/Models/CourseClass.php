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
}
