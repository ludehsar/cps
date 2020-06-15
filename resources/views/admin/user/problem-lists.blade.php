@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(/img/profile-cover.jpg); background-size: cover; background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
            <div class="row">
                <div class="col-lg-9 col-md-10">
                    <h1 class="display-2 text-white">{{ $user->name }}</h1>
                    <p class="text-white mt-0 mb-5">From here, you can see the problems he / she has solved from ladder.</p>
                    <a href="javascript:void(0)" class="btn btn-neutral" id="retrieve-submission-btn">Retrieve Submission</a>
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
    <script>
        $('#retrieve-submission-btn').click(function() {
            axios.post('/api/fetch-cf-submission/' + {{ $user->id }}).then((res) => {
                Swal.fire({
                    position: 'bottom-end',
                    text: res.data,
                    showConfirmButton: false,
                    timer: 2000
                });
            }).catch((err) => {
                Swal.fire({
                    position: 'bottom-end',
                    text: err.data,
                    showConfirmButton: false,
                    timer: 2000
                });
            });
        });
    </script>
@endpush