<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class NewLadderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return !Auth::guest() && Auth::user()->is_admin == true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ladder_name' => ['required', 'string', 'max:255'],
            'ladder_difficulty' => ['required', 'string', 'max:10'],
            'ladder_description' => ['required', 'max:1000'],
        ];
    }
}
