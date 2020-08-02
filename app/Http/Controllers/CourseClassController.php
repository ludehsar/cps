<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseClass;
use App\Models\Course;
use Auth;

class CourseClassController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api')->except(['getAllClassesOfCoursePaginated']);
        $this->middleware('admin')->except(['getAllClassesOfCoursePaginated']);
    }

    public function getAllClassesOfCoursePaginated($id)
    {
        $course = Course::find($id);

        if ($course == null) {
            return response('Course is not valid', 404);
        }
        
        $classes = $course->courseClasses();

        $per_page = \Request::get('per_page') ?: 10;
        $query = \Request::get('q') ?: '';

        return response($classes->where('is_published', 1)
                                ->with('user')
                                ->where(function ($q) use ($query) {
                                    $q->whereHas('user', function ($q2) use ($query) {
                                            $q2->where('id', 'like', '%' . $query . '%')
                                              ->orWhere('name', 'like', '%' . $query . '%')
                                              ->orWhere('email', 'like', '%' . $query . '%')
                                              ->orWhere('username', 'like', '%' . $query . '%')
                                              ->orWhere('cf_handle', 'like', '%' . $query . '%')
                                              ->orWhere('institution', 'like', '%' . $query . '%');
                                        })
                                        ->orWhere('id', 'like', '%' . $query . '%')
                                        ->orWhere('course_id', 'like', '%' . $query . '%')
                                        ->orWhere('class_title', 'like', '%' . $query . '%')
                                        ->orWhere('is_public', 'like', '%' . $query . '%');
                                })
                                ->paginate($per_page, ['id', 'user_id', 'course_id', 'class_title', 'is_published', 'is_public']), 200);
    }

    public function getAllClassesOfCoursePaginatedAsAdmin($id)
    {
        $course = Course::find($id);

        if ($course == null) {
            return response('Course is not valid', 404);
        }
        
        $classes = $course->courseClasses();

        $per_page = \Request::get('per_page') ?: 10;
        $query = \Request::get('q') ?: '';

        if (Auth::check() && Auth::user()->is_admin == true) {
            return response($classes->with('user')
                                    ->where(function ($q) use ($query) {
                                        $q->whereHas('user', function ($q2) use ($query) {
                                                $q2->where('id', 'like', '%' . $query . '%')
                                                  ->orWhere('name', 'like', '%' . $query . '%')
                                                  ->orWhere('email', 'like', '%' . $query . '%')
                                                  ->orWhere('username', 'like', '%' . $query . '%')
                                                  ->orWhere('cf_handle', 'like', '%' . $query . '%')
                                                  ->orWhere('institution', 'like', '%' . $query . '%');
                                            })
                                            ->orWhere('id', 'like', '%' . $query . '%')
                                            ->orWhere('course_id', 'like', '%' . $query . '%')
                                            ->orWhere('class_title', 'like', '%' . $query . '%')
                                            ->orWhere('is_published', 'like', '%' . $query . '%')
                                            ->orWhere('is_public', 'like', '%' . $query . '%');
                                    })
                                    ->paginate($per_page, ['id', 'user_id', 'course_id', 'class_title', 'is_published', 'is_public']), 200);
        }

        return response('Unauthorized access.', 401);
    }

    public function togglePublished($id)
    {
        $courseClass = CourseClass::find($id);

        if ($courseClass == null) {
            return response('Invalid class', 404);
        }

        $courseClass->update([
            'is_published' => !$courseClass->is_published,
        ]);

        return response(null, 200);
    }

    public function togglePublic($id)
    {
        $courseClass = CourseClass::find($id);

        if ($courseClass == null) {
            return response('Invalid class', 404);
        }

        $courseClass->update([
            'is_public' => !$courseClass->is_public,
        ]);

        return response(null, 200);
    }
}
