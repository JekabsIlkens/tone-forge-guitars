<?php

namespace App\Http\Controllers\Profile;

use App\Http\Requests\Profile\UpdatePasswordRequest;
use App\Services\Profile\PasswordService;
use Illuminate\Http\RedirectResponse;

class PasswordController
{
    protected PasswordService $passwordService;

    public function __construct(PasswordService $passwordService)
    {
        $this->passwordService = $passwordService;
    }

    public function update(UpdatePasswordRequest $request): RedirectResponse
    {
        $this->passwordService->updatePassword($request->user(), $request->validated());

        return back()->with('success', 'Password updated successfully!');
    }
}
