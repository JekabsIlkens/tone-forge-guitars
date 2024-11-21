<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Inertia\Response;

class RegisterController
{
    public function create(): Response
    {
        return inertia('Auth/Register');
    }

    public function store(RegisterRequest $request): Response
    {
        $data = $request->validated();
        $data['password'] = Hash::make($data['password']);

        User::create($data);

        return inertia('Auth/Login');
    }
}
