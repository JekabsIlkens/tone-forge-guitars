<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Address extends Model
{
    protected $fillable = 
    [
        'user_id',
        'address_line_one', 
        'address_line_two', 
        'city',
        'state_province',
        'postal_code',
        'country'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
