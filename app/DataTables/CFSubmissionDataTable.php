<?php

namespace App\DataTables;

use App\Models\CFSubmission;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class CFSubmissionDataTable extends DataTable
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
            ->editColumn('problem_title', function(CFSubmission $submission) {
                return '<a href="' . $submission->problem_url . '" style="text-decoration: inherit; color: inherit;" target="_blank">' . $submission->problem_title . '</a>';
            })
            ->editColumn('created_at', function(CFSubmission $submission) {
                return $submission->created_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(CFSubmission $submission) {
                return '<a href="https://codeforces.com/contest/' . $submission->contest_id . '/submission/' . $submission->submission_id . '" class="btn btn-secondary btn-sm" target="_blank">View Submission</a>';
            })
            ->rawColumns(['problem_title', 'action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\CFSubmission $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(CFSubmission $model)
    {
        return $model->newQuery()->where('user_id', $this->user_id);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('cfsubmission-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip')
                    ->orderBy(1)
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
            Column::make('submission_id'),
            Column::make('contest_id'),
            Column::make('problem_index'),
            Column::make('problem_title'),
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
        return 'CFSubmission_' . date('YmdHis');
    }
}
