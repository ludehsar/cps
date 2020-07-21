@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Edit Course {{ $course->course_name }}</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin-course-list') }}">Courses</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Edit</li>
                                <li class="breadcrumb-item active" aria-current="page">{{ $course->id }}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form method="POST" action="{{ route('edit-course', $course->id) }}">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-8">
                                <h3 class="mb-0">Edit Course</h3>
                            </div>
                            <div class="col-4 text-right">
                                <button type="submit" class="btn btn-sm btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h6 class="heading-small text-muted mb-4">Course information</h6>
                        <div class="pl-lg-4">
                            @csrf
                            @method('patch')
                            <div class="form-group row">
                                <label for="course-name" class="col-md-3 col-form-label text-md-right">Course Name <span class="text-red">*</span></label>

                                <div class="col-md-8">
                                    <input id="course-name" type="text" class="form-control" name="course_name" value="{{ $course->course_name }}" required autoFocus />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="course-description" class="col-md-3 col-form-label text-md-right">Course Description <span class="text-red">*</span></label>

                                <div class="col-md-8">
                                    <textarea rows="4" class="form-control" id="course-description" name="course_description" placeholder="Enter some description..." required>{{ $course->course_description }}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection