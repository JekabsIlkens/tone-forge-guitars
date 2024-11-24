<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Acoustic'],
            ['name' => 'Electric'],
            ['name' => 'Bass'],
        ];

        $products = [
            [
                'name' => 'SX Acoustic Guitar SD104-RDS',
                'description' => 'SX SD1 series acoustic guitar. Red (Satin) Basswood.',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/sx/SX-Guitars/SD104RDS_SX-1000x1000.jpg',
                'price' => '9900',
                'stock' => '11',
                'category_id' => '1',
            ],
            [
                'name' => 'Cort Acoustic Guitar AD Mini M',
                'description' => 'Dovetail Neck Joint, Natural Wood (Matte - Open pore)',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Acoustic/ADmini-MOP-Cort_gitara-1000x1000.jpeg',
                'price' => '15900',
                'stock' => '1',
                'category_id' => '1',
            ],
            [
                'name' => 'Cort Jumbo acoustic-electric guitar CJ-Retro-VSM',
                'description' => 'Fishman Ned-D Humbucker, Vintage Sunburst (Satin)',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/CJ_Retro_VSM_Cort-1000x1000.JPG',
                'price' => '29900',
                'stock' => '5',
                'category_id' => '1',
            ],
            [
                'name' => 'Ibanez Electric guitar GRX70QA-TBB',
                'description' => 'Ibanez Infinity R Neck, Transparent Blue Sunburst',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Ibanez/GRX70QA_TBB_Ibanez-1000x1000.jpg',
                'price' => '23900',
                'stock' => '2',
                'category_id' => '2',
            ],
            [
                'name' => 'Electric Guitar Cort CR250 ATA',
                'description' => 'ClassicRocker pickups for an authentic vintage rock sound and response.',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Electric/CR250_ATA_Cort-1000x1000.JPG',
                'price' => '39900',
                'stock' => '2',
                'category_id' => '2',
            ],
            [
                'name' => 'Cort Electric guitar Classic TC-BIM',
                'description' => 'Manson Single Coil Pickups, Blue Ice Metallic',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Electric/Classic_TC_BIM_Cort_gitara-1000x1000.jpg',
                'price' => '38900',
                'stock' => '3',
                'category_id' => '2',
            ],

            [
                'name' => 'Bass Guitar Cort GB14PJ-2T',
                'description' => 'Precision & Jazz Pickups, Canadian Hard Maple Sunburst',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Bass/GB14PJ_2T_Cort-1000x1000.jpeg',
                'price' => '21900',
                'stock' => '3',
                'category_id' => '3',
            ],
            [
                'name' => 'Bass Guitar Ibanez GSR200SM-NGT',
                'description' => 'Single-coil, Humbucker, Maple Natural Grey Burst',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/GSR200SMNGT2-1000x1000.jpg',
                'price' => '31900',
                'stock' => '2',
                'category_id' => '3',
            ],
            [
                'name' => 'Fretless Bass Guitar Cort B4FL-MHPZ-OPTA',
                'description' => 'Fishman Power Bridge, Open Pore Trans Black Burst',
                'image_url' => 'https://www.muzikasveikals.lv/image/cache/catalog/gitaras/Cort/Bass/B4FL-MHPZ-OPTA-Cort-1000x1000.jpg',
                'price' => '67900',
                'stock' => '0',
                'category_id' => '3',
            ],
        ];
    
        foreach ($categories as $category) {
            Category::create($category);
        }

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
