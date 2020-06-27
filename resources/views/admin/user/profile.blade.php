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
                    <a href="javascript:void(0)" class="btn btn-neutral" id="retrieve-submission-btn">Retrieve Submission</a>
                    <a href="javascript:void(0)" class="btn btn-danger" id="delete-profile-btn">Delete Profile</a>
                    <form id="delete-user-form" action="{{ route('admin-user-delete', $user->id) }}" method="POST" style="display: none;">
                        @csrf
                        @method('delete')
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
<div id="user-profile" data-user-id={{ $user->id }}></div>
<div class="row">
    <div class="col">
        <div class="card">
            <div class="card-header border-0">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="mb-0">Ladder Progress</h3>
                    </div>
                </div>
            </div>
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
                                        <div>
                                            <div class="progress">
                                                <div class="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="{{ $progresses[$key] }}" aria-valuemin="0" aria-valuemax="100" style="width: {{ $progresses[$key] }}%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="{{ route('admin-user-ladder-progress', [$user->id, $ladder->id]) }}" class="btn btn-sm btn-default">View Details</a>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="card bg-default text-white shadow">
            <div class="card-header bg-transparent border-0">
                <h3 class="text-white mb-0">Codeforces Submissions</h3>
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
        $('#delete-profile-btn').click(function() {
            Swal.fire({
                title: 'Do you really want to delete this user?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete this user!'
                }).then((result) => {
                if (result.value) {
                    event.preventDefault();
                    $('#delete-user-form').submit();
                    Swal.fire(
                        'Deleted!',
                        'This user has been deleted.',
                        'success'
                    );
                }
            });
        });

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