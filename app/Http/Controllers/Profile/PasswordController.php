<?php

namespace App\Http\Controllers\Profile;

use App\Http\Requests\Profile\UpdatePasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\RedirectResponse;

class PasswordController
{
    public function update(UpdatePasswordRequest $request): RedirectResponse
    {
        if (!Auth::validate(['email' => $request['email'], 'password' => $request['current_password']])) {
            throw ValidationException::withMessages(['error' => ['Provided password is incorrect.']]);
        }

        $data = $request->validated();

        $request->user()->update([
            'password' => Hash::make($data['new_password']),
        ]);

        return back();
    }
}
