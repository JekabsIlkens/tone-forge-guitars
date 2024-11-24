<?php

namespace App\Http\Controllers\Shop;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Category;

class CategoryController
{
    public function index(): Response
    {
        $categories = Category::all();

        return Inertia::render('Shop/Categories', ['categories' => $categories]);
    }

    public function show(Category $category): Response
    {
        $products = $category->products;

        return Inertia::render('Shop/Category', ['category' => $category, 'products' => $products]);
    }
}
