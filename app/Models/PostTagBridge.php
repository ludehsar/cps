<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostTagBridge extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'post_tag_bridges';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'tag_id',
    ];
}
