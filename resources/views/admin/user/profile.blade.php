@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(/img/profile-cover.jpg); background-size: cover; background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
            <div class="row">
                <div class="col-lg-7 col-md-10">
                    <h1 class="display-2 text-white">{{ $user->name }}</h1>
                    <p class="text-white mt-0 mb-5">This is the user's profile page. You can see the progress he / she has made and manage and instruct them to do their job</p>
                    <a href="#!" class="btn btn-neutral">Edit profile</a>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
<div id="user-profile" data-user-id={{ $user->id }}></div>
<div class="row">
    <div class="col">
        <div class="card bg-default text-white shadow">
            <div class="card-header bg-transparent border-0">
                <h3 class="text-white mb-0">Users</h3>
            </div>
            <div class="table-responsive">
                {{ $dataTable->table(['class' => 'table align-items-center table-dark table-flush']) }}
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    {{ $dataTable->scripts() }}
@endpush