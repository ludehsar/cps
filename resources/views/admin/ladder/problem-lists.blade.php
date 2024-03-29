@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Ladder Problems</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item"><a href="{{ route('admin-ladder-list') }}">Ladders</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{{ $ladder->id }}</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-lg-6 col-5 text-right">
                        <a href="#" class="btn btn-sm btn-neutral">Add A New Problem</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
<div class="row">
    <div class="col">
        <div class="card bg-default text-white text-center shadow">
            <div class="card-header bg-transparent border-0">
                <h3 class="text-white mb-0">{{ $ladder->ladder_name }}</h3>
            </div>
            <div class="card-body bg-transparent border-0">
                <p>{{ $ladder->ladder_description }}</p>
                <h4 class="text-white"><strong>Ladder Difficulty: </strong>{{ $ladder->ladder_difficulty }}</h4>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="card bg-default text-white shadow">
            <div class="card-header bg-transparent border-0">
                <h3 class="text-white mb-0">Ladder Problems</h3>
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