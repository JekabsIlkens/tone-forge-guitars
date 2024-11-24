<?php

namespace App\Http\Controllers\Shop;

use App\Services\Shop\CategoryService;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController
{
    protected CategoryService $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index(): Response
    {
        $categories = $this->categoryService->getCategories();

        return Inertia::render('Shop/Categories', [
            'categories' => $categories,
        ]);
    }

    public function show(Category $category): Response
    {
        $categoryWithProducts = $this->categoryService->getCategoryWithProducts($category);

        return Inertia::render('Shop/Category', [
            'category' => $categoryWithProducts,
            'products' => $categoryWithProducts->products,
        ]);
    }
}
