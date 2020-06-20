@extends('frontend.layouts.app')

@section('content')
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
                    <h3 class="mb-0 float-left">Ladder Problems</h3>
                    <div class="float-right">
                        <a href="javascript:void(0)" class="btn btn-default" id="retrieve-submission-btn">Retrieve Submission</a>
                    </div>
                </div>
                <div class="table-responsive mt-5 pl-2 pr-2">
                    {{ $dataTable->table(['class' => 'table align-items-center table-striped']) }}
                </div>
            </div>
        </div>
    </div>
    <div class="h5 mt-3 mb-5 text-red">
        <span>*</span> All the ladders and ladder problems have been fetched from <a href="https://www.a2oj.com/" target="_blank">A2OJ</a>.
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