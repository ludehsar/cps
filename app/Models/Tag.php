<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tag_name',
    ];

    /**
     * Relationships
     *
    */
    public function courseClasses() {
        return $this->belongsToMany('App\Models\CourseClass')->as('course_class_tag_bridges');
    }
}
