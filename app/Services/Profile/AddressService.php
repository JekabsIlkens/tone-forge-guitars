<?php

namespace App\Services\Profile;

use Illuminate\Support\Facades\Auth;
use App\Models\Address;

class AddressService
{
    public function getShippingDetails() 
    {
        return Address::where('user_id', Auth::id())->first();
    }

    public function updateShippingDetails(array $data): void
    {
        Address::updateOrCreate(
            [
                'user_id' => Auth::id(),
            ],
            [
                'address_line_one' => $data['address_line_one'],
                'address_line_two' => $data['address_line_two'],
                'city' => $data['city'],
                'state_province' => $data['state_province'],
                'postal_code' => $data['postal_code'],
                'country' => $data['country'],
            ]
        );
    }
}
