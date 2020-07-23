<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CourseClassTagBridge extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'course_class_tag_bridges';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'course_class_id', 'tag_id',
    ];
}
