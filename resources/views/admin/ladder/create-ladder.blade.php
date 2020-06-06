@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Add A New Ladder</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin-ladder-list') }}">Ladders</a></li>
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
        <form method="POST" action="{{ route('create-ladder') }}">
            <div class="card">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">Add A New Ladder </h3>
                        </div>
                        <div class="col-4 text-right">
                            <button type="submit" class="btn btn-sm btn-primary">Save</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    @csrf
                    <h6 class="heading-small text-muted mb-4">Ladder information</h6>
                    <div class="pl-lg-4">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-ladder-name">Ladder Name</label>
                                    <input type="text" id="input-ladder-name" class="form-control" name="ladder_name" placeholder="Enter ladder name">
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-ladder-difficulty">Ladder Difficulty</label>
                                    <input type="text" id="input-ladder-difficulty" class="form-control" name="ladder_difficulty" placeholder="Ladder difficulty">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="form-control-label" for="input-ladder-description">Ladder Description</label>
                                    <textarea rows="4" class="form-control" id="input-ladder-description" name="ladder_description" placeholder="Enter some description..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection