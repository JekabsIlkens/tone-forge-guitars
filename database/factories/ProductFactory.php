<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->catchPhrase(),
            'description' => fake()->paragraph(3, true),
            'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Electric/CR250_ATA_Cort-1000x1000.JPG',
            'price' => fake()->numberBetween(10000, 80000),
            'stock' => fake()->numberBetween(1, 20),
        ];
    }
}
