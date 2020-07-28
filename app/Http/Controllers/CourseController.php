<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Http\Requests\NewCourseRequest;
use Auth;

class CourseController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api')->except(['getAllCoursesPaginated']);
        $this->middleware('admin')->except(['getAllCoursesPaginated']);
    }

    public function getAllCoursesPaginated()
    {
        $per_page = \Request::get('per_page') ?: 10;
        $query = \Request::get('q') ?: '';
        $courses = Course::whereHas('user', function ($q) use ($query) {
                            $q->where('id', 'like', '%' . $query . '%')
                              ->orWhere('name', 'like', '%' . $query . '%')
                              ->orWhere('email', 'like', '%' . $query . '%')
                              ->orWhere('username', 'like', '%' . $query . '%')
                              ->orWhere('cf_handle', 'like', '%' . $query . '%')
                              ->orWhere('institution', 'like', '%' . $query . '%');
                        })
                        ->with('user')
                        ->orWhere('id', 'like', '%' . $query . '%')
                        ->orWhere('course_name', 'like', '%' . $query . '%')
                        ->orWhere('course_description', 'like', '%' . $query . '%')
                        ->orWhere('course_price', 'like', '%' . $query . '%')
                        ->paginate($per_page);
        return response($courses, 200);
    }

    public function storeNewCourse(NewCourseRequest $request)
    {
        $request->validated();

        Course::create([
            'course_name' => $request->course_name,
            'course_description' => $request->course_description,
            'course_price' => $request->course_price,
            'user_id' => Auth::user()->id,
        ]);

        return response(null, 201);
    }

    public function editCourse(NewCourseRequest $request, $id)
    {
        $request->validated();

        $course = Course::find($id);

        if ($course == null) {
            return response(null, 404);
        }

        if ($course->user_id != Auth::user()->id) {
            return response(null, 401);
        }

        $course->update([
            'course_name' => $request->course_name,
            'course_description' => $request->course_description,
            'course_price' => $request->course_price,
        ]);

        return response(null, 200);
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
