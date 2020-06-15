@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Add A New User</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin-user-list') }}">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page">New</li>
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
    <div class="col-md-6">
        <form method="POST" action="{{ route('create-user') }}">
            <div class="card">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">Add A New User </h3>
                        </div>
                        <div class="col-4 text-right">
                            <button type="submit" class="btn btn-sm btn-primary">Save</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    @csrf
                    <h6 class="heading-small text-muted mb-4">User Information</h6>
                    <div class="pl-lg-4">
                        <div class="form-group">
                            <label class="form-control-label" for="input-name">Name</label>
                            <input type="text" id="input-name" class="form-control" name="name" placeholder="Enter user's name">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="input-email">Email</label>
                            <input type="email" id="input-email" class="form-control" name="email" placeholder="Enter user's email">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="input-cf_handle">Codeforces Handle</label>
                            <input type="text" id="input-cf_handle" class="form-control" name="cf_handle" placeholder="Enter user's codeforces handle">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="input-username">Username</label>
                            <input type="text" id="input-username" class="form-control" name="username" placeholder="Enter user's username">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="input-password">Password</label>
                            <input type="password" id="input-password" class="form-control" name="password" placeholder="Enter a password">
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="input-confirm-password">Confirm Password</label>
                            <input type="password" id="input-confirm-password" class="form-control" name="password_confirmation" placeholder="Confirm password">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection