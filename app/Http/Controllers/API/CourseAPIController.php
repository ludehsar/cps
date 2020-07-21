<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;

class CourseAPIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function deleteCourse($id)
    {
        $course = Course::find($id);

        if ($course == null) {
            return response('Invalid course', 404);
        }

        if ($course->user_id != auth('api')->user()->id) {
            return response('Unauthorized access', 401);
        }

        $course->delete();

        return response(null, 200);
    }
}
