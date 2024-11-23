<?php

namespace App\Http\Controllers\Profile;

use App\Http\Requests\Profile\UpdateProfileRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class ProfileController
{
    public function edit(): Response
    {
        return inertia("Profile/Profile");
    }

    public function update(UpdateProfileRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $request->user()->update([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
        ]);

        return back()->with('success', 'Profile data updated successfully!');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();

        Auth::logout();

        $user->delete();

        return redirect('/');
    }
}
