<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\UpdateProfileRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class ProfileController
{
    public function edit()
    {
        return inertia("Profile/Edit");
    }

    public function update(UpdateProfileRequest $request)
    {
        $data = $request->validated();
        $user = User::find($data['id']);
        $user->update($request->validated());

        return inertia("Profile/Edit");
    }

    public function destroy()
    {
        //
    }
}
