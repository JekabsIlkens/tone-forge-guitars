<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function rules(): array
    {
        return 
        [
            'id' => 
            [
                'required',
            ],
            'full_name' => 
            [
                'required',
                'string',
                'max:255',
                'regex:/^[\p{L} \'-]+$/u',
            ],
            'email' => 
            [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email',
            ],
            'password' => 
            [
                'required',
                'string',
                'min:8',
                'regex:/[a-z]/',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
                'regex:/[@$!%*#?&]/',
            ],
        ];
    }

    public function messages()
    {
        return 
        [
            'full_name.regex' => 'May only contain letters, spaces, hyphens, and apostrophes.',
            'password.regex' => 'Use a mixture of upper/lower case letters, digits and symbols.',
        ];
    }
}