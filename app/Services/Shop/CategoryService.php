<?php

namespace App\Services\Shop;

use App\Models\Category;

class CategoryService
{
    public function getCategories()
    {
        return Category::all();
    }

    public function getCategoryWithProducts(Category $category)
    {
        return $category->load('products');
    }
}
