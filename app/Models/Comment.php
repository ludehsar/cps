<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'comments';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'parent_id', 'course_class_id', 'comment_description',
    ];

    /**
     * Relationships
     *
    */
    public function parent() {
        return $this->belongsTo('App\Models\Comment', 'parent_id');
    }

    public function replies() {
        return $this->hasMany('App\Models\Comment', 'parent_id');
    }

    public function courseClass() {
        return $this->belongsTo('App\Models\CourseClass');
    }

    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
