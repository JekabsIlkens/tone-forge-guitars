<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'role' => 'admin',
            'full_name' => 'Tone Forge',
            'email' => 'admin@toneforge.com',
            'password' => Hash::make('Admin123!'),
        ]);

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
