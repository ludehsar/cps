@extends('frontend.layouts.app')

@section('content')
<div class="row">
    <div class="col">
        <!-- Header -->
        <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(/img/profile-cover.jpg); background-size: cover; background-position: center top;">
            <!-- Mask -->
            <span class="mask bg-gradient-default opacity-8"></span>
            <!-- Header container -->
            <div class="container d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-9 col-md-10">
                        <h1 class="display-2 text-white">{{ Auth::user()->name }}</h1>
                        <p class="text-white mt-0 mb-5">From here, you can see the problems you have solved from ladder.</p>
                        <a href="javascript:void(0)" class="btn btn-neutral" id="retrieve-submission-btn">Retrieve Submission</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row mt-5">
        <div class="col">
            <div class="card text-center">
                <div class="card-header">
                    <h3 class="mb-0">{{ $ladder->ladder_name }}</h3>
                </div>
                <div class="card-body">
                    <p>{{ $ladder->ladder_description }}</p>
                    <h4><strong>Ladder Difficulty: </strong>{{ $ladder->ladder_difficulty }}</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3 class="mb-0">Ladder Problems</h3>
                </div>
                <div class="table-responsive mt-5 pl-2 pr-2">
                    {{ $dataTable->table(['class' => 'table align-items-center table-striped']) }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('scripts')
    {{ $dataTable->scripts() }}
    <script>
        $('#retrieve-submission-btn').click(function() {
            axios.post('/api/fetch-cf-submission/' + {{ Auth::user()->id }}).then((res) => {
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