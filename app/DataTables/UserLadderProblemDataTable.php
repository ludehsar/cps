<?php

namespace App\DataTables;

use App\Models\LadderProblem;
use App\Models\CFSubmission;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class UserLadderProblemDataTable extends DataTable
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
            ->editColumn('problem_title', function(LadderProblem $problem) {
                return '<a href="' . $problem->problem_url . '" style="text-decoration: inherit; color: inherit;" target="_blank">' . $problem->problem_title . '</a>';
            })
            ->editColumn('created_at', function(LadderProblem $problem) {
                return $problem->created_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(LadderProblem $problem) {
                $submission = CFSubmission::where('user_id', $this->userId)->where('problem_url', $problem->problem_url)->first();

                if ($submission) {
                    return '<a href="https://codeforces.com/contest/' . $submission->contest_id . '/submission/' . $submission->submission_id . '" class="btn btn-secondary btn-sm" target="_blank">View Submission</a>';
                }
                else {
                    return '<a href="' . $problem->problem_url . '" class="btn btn-neutral btn-sm" data-toggle="tooltip" data-placement="top" title="Go to the problem" target="_blank"><i class="fas fa-external-link-alt"></i></a>';
                }
            })
            ->setRowClass(function(LadderProblem $problem) {
                $submission = CFSubmission::where('user_id', $this->userId)->where('problem_url', $problem->problem_url)->first();

                if ($submission) return 'accepted-submission';
                return '';
            })
            ->rawColumns(['problem_title', 'action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\LadderProblem $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(LadderProblem $model)
    {
        return $model->newQuery()->where('ladder_id', $this->ladderId);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        if ($this->forUserOnly && $this->forUserOnly == true) {
            return $this->builder()
                    ->setTableId('LadderProblemdatatable-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('frtip')
                    ->orderBy(1)
                    ->paging(false);
        }
        return $this->builder()
                    ->setTableId('LadderProblemdatatable-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->dom('Bfrtip')
                    ->orderBy(1)
                    ->paging(false)
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
            Column::make('ladder_id')
                    ->orderable(false),
            Column::make('problem_title'),
            Column::make('online_judge'),
            Column::make('problem_difficulty'),
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
        return 'LadderProblem_' . date('YmdHis');
    }
}
