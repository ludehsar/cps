<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true]);

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function() {
	Route::get('/', 'ReactStaticController@showAdminpage');
	Route::get('{any}', 'ReactStaticController@showAdminpage')->where('any', '.*');
});

Route::get('/{any}', 'ReactStaticController@showHomepage')->where('any', '.*');
