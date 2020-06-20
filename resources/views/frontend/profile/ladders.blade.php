@extends('frontend.layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row mt-4">
        <div class="col">
            <div class="card">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0 float-left">Ladder Progress</h3>
                            <div class="float-right">
                                <a href="javascript:void(0)" class="btn btn-default" id="retrieve-submission-btn">Retrieve Submission</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-text">Here you can see the ladder problems and measure the progress you have solved so far.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col">
            <div class="table-responsive">
                <!-- Projects table -->
                <table class="table table-hover align-items-center table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ladder Name</th>
                            <th scope="col">Ladder Description</th>
                            <th scope="col">Ladder Difficulty</th>
                            <th scope="col">Progress / Solved</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($ladders as $key => $ladder)
                            <tr>
                                <th scope="row">
                                    {{ $ladder->id }}
                                </th>
                                <td>
                                    {{ $ladder->ladder_name }}
                                </td>
                                <td>
                                    {{ $ladder->ladder_description }}
                                </td>
                                <td>
                                    {{ $ladder->ladder_difficulty }}
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <span class="mr-2">{{ $progresses[$key] }}%</span>
                                        <div style="width: 100%;">
                                            <div class="progress">
                                                <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="{{ $progresses[$key] }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ $progresses[$key] }}%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="{{ route('user-ladder-progress', $ladder->id) }}" class="btn btn-sm btn-default">View Details</a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="h5 mt-3 mb-5 text-red">
        <span>*</span> All the ladders and ladder problems have been fetched from <a href="https://www.a2oj.com/" target="_blank">A2OJ</a>.
    </div>
</div>
@endsection

@push('scripts')
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
