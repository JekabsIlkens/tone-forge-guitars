<?php

namespace App\Http\Controllers\Shop;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Category;
use App\Models\Product;

class ProductController
{
    public function show(Category $category, Product $product): Response
    {
        return Inertia::render('Shop/Product', [
            'product' => $product,
        ]);
    }
}
