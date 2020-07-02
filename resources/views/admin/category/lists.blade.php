@extends('admin.layouts.app')

@section('header')
    <!-- Header -->
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Categories</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Categories</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-lg-6 col-5 text-right">
                        <a href="{{ route('admin-new-category-form') }}" class="btn btn-sm btn-neutral">Add A New Category</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('content')
<div class="row">
    <div class="col">
        <div class="card bg-default text-white shadow">
            <div class="card-header bg-transparent border-0">
                <h3 class="text-white mb-0">Categories</h3>
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
        $('#category-table').on('click', '#delete-category', function(event) {
            let categoryId = $(event.currentTarget).data('categoryid');

            Swal.fire({
                title: 'Do you really want to delete this category?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete this category!'
                }).then((result) => {
                if (result.value) {
                    axios.delete('/api/categories/' + categoryId + '/delete').then((res) => {
                        Swal.fire(
                            'Deleted!',
                            'This category has been deleted.',
                            'success'
                        ).then(() => {
                            window.LaravelDataTables["category-table"].ajax.reload();
                        });
                    }).catch((err) => {
                        Swal.fire({
                            position: 'bottom-end',
                            text: err.data,
                            showConfirmButton: false,
                            timer: 2000
                        });
                    });
                }
            });
        });
    </script>
@endpush