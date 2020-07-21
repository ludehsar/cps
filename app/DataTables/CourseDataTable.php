<?php

namespace App\DataTables;

use App\Models\Course;
use App\Models\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class CourseDataTable extends DataTable
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
            ->editColumn('created_by', function(Course $course) {
                $user = User::find($course->user_id);
                return $user->name;
            })
            ->editColumn('created_at', function(Course $course) {
                return $course->created_at->format('d-M-Y h:m:s A');
            })
            ->editColumn('updated_at', function(Course $course) {
                return $course->updated_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(Course $course) {
                return '<div class="btn-group btn-group-sm" role="group" aria-label="Course action"><a href="#" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="View Course"><i class="fas fa-binoculars"></i></a><a href="' . route('admin-edit-course-form', $course->id) . '" class="btn btn-sm btn-primary" id="edit-course" data-toggle="tooltip" data-placement="top" title="Edit Course"><i class="fas fa-edit"></i></a><a href="javascript:void(0)" class="btn btn-danger" id="delete-course" data-courseId="' . $course->id . '" data-toggle="tooltip" data-placement="top" title="Delete Course"><i class="fas fa-trash"></i></a></div>';
            })
            ->rawColumns(['action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Course $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Course $model)
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
                    ->setTableId('course-table')
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
            Column::make('course_name'),
            Column::make('created_by'),
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
        return 'Course_' . date('YmdHis');
    }
}
