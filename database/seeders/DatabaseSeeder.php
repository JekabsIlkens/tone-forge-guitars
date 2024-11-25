<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $categories = include database_path('data/categories.php');
           
        foreach ($categories as $category) {
            Category::create($category);
        }

        $products = include database_path('data/products.php');

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
