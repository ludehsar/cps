<?php

namespace App\DataTables;

use App\Models\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class UserDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->editColumn('created_at', function(User $user) {
                return $user->created_at->format('d-M-Y h:m:s A');
            })
            ->editColumn('updated_at', function(User $user) {
                return $user->updated_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(User $user) {
                return '<div class="btn-group btn-group-sm" role="group" aria-label="Ladder action"><a href="' . route('admin-user-profile', $user->username) . '" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="View User Details"><i class="fas fa-binoculars"></i></a><a href="#" class="btn btn-info" id="retrieve-submission" data-toggle="tooltip" data-placement="top" data-userid="' . $user->id . '" title="Retrieve solution"><i class="fas fa-sync-alt"></i></a></div>';
            })
            ->rawColumns(['action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\User $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return $model->newQuery();
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('user-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip')
                    ->orderBy(0, 'asc')
                    ->languagePaginatePrevious('<i class="fas fa-angle-left"></i><span class="sr-only">Previous</span>')
                    ->languagePaginateNext('<i class="fas fa-angle-right"></i><span class="sr-only">Next</span>')
                    ->buttons(
                        Button::make('print'),
                        Button::make('reset'),
                        Button::make('reload')
                    );
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id'),
            Column::make('username'),
            Column::make('name'),
            Column::make('email'),
            Column::make('cf_handle'),
            Column::make('institution'),
            Column::make('created_at'),
            Column::make('updated_at'),
            Column::computed('action')
                  ->exportable(false)
                  ->printable(false)
                  ->addClass('text-center'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'User_' . date('YmdHis');
    }
}
