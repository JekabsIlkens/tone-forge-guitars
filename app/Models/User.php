<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function cartItems(): HasMany
    {
        return $this->hasMany(Cart::class);
    }
}
