<?php

namespace App\DataTables;

use App\Models\Category;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Html\Editor\Editor;
use Yajra\DataTables\Html\Editor\Fields;
use Yajra\DataTables\Services\DataTable;

class CategoryDataTable extends DataTable
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
            ->editColumn('created_at', function(Category $category) {
                return $category->created_at->format('d-M-Y h:m:s A');
            })
            ->editColumn('updated_at', function(Category $category) {
                return $category->updated_at->format('d-M-Y h:m:s A');
            })
            ->addColumn('action', function(Category $category) {
                return '<div class="btn-group btn-group-sm" role="group" aria-label="Category action"><a href="#" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="View Category"><i class="fas fa-binoculars"></i></a><a href="' . route('admin-edit-category-form', $category->id) . '" class="btn btn-sm btn-primary" id="edit-category" data-toggle="tooltip" data-placement="top" title="Edit Category"><i class="fas fa-edit"></i></a><a href="javascript:void(0)" class="btn btn-danger" id="delete-category" data-categoryId="' . $category->id . '" data-toggle="tooltip" data-placement="top" title="Delete Category"><i class="fas fa-trash"></i></a></div>';
            })
            ->rawColumns(['action']);
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Models\Category $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Category $model)
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
                    ->setTableId('category-table')
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
            Column::make('category_name'),
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
        return 'Category_' . date('YmdHis');
    }
}
