<?php

namespace App\Http\Requests\Cart;

use Illuminate\Foundation\Http\FormRequest;

class AddToCartRequest extends FormRequest
{
    public function rules(): array
    {
        return
            [
                'product_id' =>
                [
                    'required',
                    'exists:products,id',
                ],
                'quantity' =>
                [
                    'required',
                    'integer',
                    'min:1',
                ],
            ];
    }
}
