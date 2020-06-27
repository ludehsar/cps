<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
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

    public function storeNewCategory(Request $request)
    {
        $request->validate([
            'category_name' => ['required', 'string', 'max:255']
        ]);

        Category::create([
            'category_name' => $request->category_name
        ]);

        return redirect()->route('admin-category-list');
    }

    public function editCategory(Request $request, $id)
    {
        $request->validate([
            'category_name' => ['required', 'string', 'max:255']
        ]);

        $category = Category::find($id);

        if ($category == null) {
            return response('Invalid category', 404);
        }

        $category->update([
            'category_name' => $request->category_name
        ]);

        return redirect()->route('admin-category-list');
    }
}
