<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryAPIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function deleteCategory($id)
    {
        $category = Category::find($id);

        if ($category == null) {
            return response('Invalid category', 404);
        }

        $category->delete();

        return response(null, 200);
    }
}
