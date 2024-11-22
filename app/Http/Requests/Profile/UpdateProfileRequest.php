<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function rules(): array
    {
        return
            [
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
            ];
    }

    public function messages()
    {
        return
            [
                'full_name.regex' => 'May only contain letters, spaces, hyphens, and apostrophes.',
            ];
    }
}
