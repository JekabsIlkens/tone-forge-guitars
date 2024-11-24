<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->count(7)->create();

        $categories = [
            ['name' => 'Acoustic'],
            ['name' => 'Electric'],
            ['name' => 'Bass'],
        ];
    
        foreach ($categories as $category) {
            Category::create($category);
        }

        $categoryIds = Category::pluck('id')->toArray();

        Product::factory()->count(7)->create([
            'category_id' => fn () => $categoryIds[array_rand($categoryIds)],
        ]);
    }
}
