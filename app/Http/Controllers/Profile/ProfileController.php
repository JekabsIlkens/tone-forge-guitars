<?php

namespace App\Http\Controllers\Profile;

use App\Services\Profile\ProfileService;
use App\Services\Profile\AddressService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class ProfileController
{
    protected ProfileService $profileService;
    protected AddressService $addressService;

    public function __construct(ProfileService $profileService, AddressService $addressService)
    {
        $this->profileService = $profileService;
        $this->addressService = $addressService;
    }

    public function index(): Response
    {
        $user = $this->profileService->getUserDetails();
        $address = $this->addressService->getShippingDetails();

        return inertia("Profile/Index", [
            'user' => $user,
            'address' => $address,
        ]);
    }

    public function edit(): Response
    {
        $address = $this->addressService->getShippingDetails();

        return inertia("Profile/Edit", [
            'address' => $address,
        ]);
    }

    public function destroy(Request $request): RedirectResponse
    {
        $this->profileService->deleteUser($request->user());

        return redirect('/')->with('success', 'Account deleted successfully!');
    }
}
