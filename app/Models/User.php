<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $fillable =
    [
        'full_name',
        'email',
        'password',
    ];

    protected $hidden =
    [
        'password',
    ];

    protected function casts(): array
    {
        return
            [
                'password' => 'hashed',
            ];
    }

    public function cartItems()
    {
        return $this->hasMany(Cart::class);
    }
}
