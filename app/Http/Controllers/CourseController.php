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
        $this->middleware('admin');
    }

    public function storeNewCourse(NewCourseRequest $request)
    {
        $request->validated();

        Course::create([
            'course_name' => $request->course_name,
            'course_description' => $request->course_description,
            'user_id' => Auth::user()->id,
        ]);

        return redirect()->route('admin-course-list');
    }

    public function editCourse(NewCourseRequest $request, $id)
    {
        $request->validated();

        $course = Course::find($id);

        if ($course == null) {
            return abort(404);
        }

        if ($course->user_id != Auth::user()->id) {
            return abort(401);
        }

        $course->update([
            'course_name' => $request->course_name,
            'course_description' => $request->course_description,
        ]);

        return redirect()->route('admin-course-list');
    }
}
