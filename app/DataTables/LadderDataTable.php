<?php

namespace App\DataTables;

use App\Models\Ladder;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class LadderDataTable extends DataTable
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
                ->editColumn('ladder_name', function(Ladder $ladder) {
                    return '<a href="' . route('admin-ladder-problems', $ladder->id) . '" style="text-decoration: inherit; color: inherit;">' . $ladder->ladder_name . '</a>';
                })
                ->editColumn('created_at', function(Ladder $ladder) {
                    return $ladder->created_at->format('d-M-Y h:m:s A');
                })
                ->addColumn('action', function(Ladder $ladder) {
                    return '<div class="btn-group btn-group-sm" role="group" aria-label="Ladder action"><a href="' . route('admin-ladder-problems', $ladder->id) . '" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="View Ladder"><i class="fas fa-binoculars"></i></a><a href="' . route('admin-ladder-edit-form', $ladder->id) . '" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Edit Ladder Information"><i class="fas fa-edit"></i></a><a href="#" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Delete The Ladder"><i class="fas fa-trash"></i></a></div>';
                })
                ->rawColumns(['ladder_name', 'action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Ladder $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Ladder $model)
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
                    ->setTableId('ladder-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip')
                    ->orderBy(1)
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
            Column::make('ladder_name')
                    ->orderable(false),
            Column::make('ladder_description')
                    ->orderable(false),
            Column::make('ladder_difficulty'),
            Column::make('created_at'),
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
        return 'Ladder_' . date('YmdHis');
    }
}
