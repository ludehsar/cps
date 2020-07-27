<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class ReactStaticController extends Controller
{
    public function showHomepage()
    {
        return view('home');
    }

    public function showAdminpage()
    {
    	if (Auth::guest() || Auth::user()->is_admin == false) {
    		return abort(404);
    	}
    	
        return view('admin');
    }
}
