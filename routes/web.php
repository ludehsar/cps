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

Auth::routes();

Route::group(['middleware' => 'auth'], function() {
    Route::get('/profile', 'HomeController@profile')->name('user_profile');
    Route::get('/settings', 'HomeController@settings')->name('user_settings');
});

Route::get('/', 'HomeController@index')->name('home');
