<?php

namespace App\Http\Controllers\Profile;

use App\Http\Requests\Profile\UpdateShippingDetailsRequest;
use App\Services\Profile\AddressService;
use Illuminate\Http\RedirectResponse;

class AddressController
{
    protected AddressService $addressService;

    public function __construct(AddressService $addressService)
    {
        $this->addressService = $addressService;
    }

    public function update(UpdateShippingDetailsRequest $request): RedirectResponse
    {
        $this->addressService->updateShippingDetails($request->validated());

        return back()->with('success', 'Address updated successfully!');
    }
}
