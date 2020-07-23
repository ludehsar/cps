<?php

namespace App\DataTables;

use App\Models\CourseClass;
use App\Models\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class CourseClassDataTable extends DataTable
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
            ->editColumn('created_by', function(CourseClass $courseClass) {
                $user = User::find($courseClass->user_id);
                return $user->name;
            })
            ->editColumn('status', function(CourseClass $courseClass) {
                if ($courseClass->is_published == 1) return '<span color="green" class="text-uppercase">Published</span>';
                return '<span color="red" class="text-uppercase">Not Published</span>';
            })
            ->editColumn('privacy', function(CourseClass $courseClass) {
                if ($courseClass->is_public == 1) return '<span color="green" class="text-uppercase">Public</span>';
                return '<span color="red" class="text-uppercase">Private</span>';
            })
            ->editColumn('created_at', function(CourseClass $courseClass) {
                return $courseClass->created_at->format('d-M-Y h:m:s A');
            })
            ->editColumn('updated_at', function(CourseClass $courseClass) {
                return $courseClass->updated_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(CourseClass $courseClass) {
                return '<div class="btn-group btn-group-sm" role="group" aria-label="Class action"><a href="#" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="View Class"><i class="fas fa-binoculars"></i></a><a href="#" class="btn btn-sm btn-primary" id="edit-class" data-toggle="tooltip" data-placement="top" title="Edit Class"><i class="fas fa-edit"></i></a><a href="javascript:void(0)" class="btn btn-danger" id="delete-class" data-courseId="' . $courseClass->id . '" data-toggle="tooltip" data-placement="top" title="Delete Class"><i class="fas fa-trash"></i></a></div>';
            })
            ->rawColumns(['status', 'privacy', 'action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\CourseClass $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(CourseClass $model)
    {
        return $model->newQuery()->where('course_id', $this->courseId);
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('courseclass-table')
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
            Column::make('class_title'),
            Column::make('created_by'),
            Column::make('status'),
            Column::make('privacy'),
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
        return 'CourseClass_' . date('YmdHis');
    }
}
