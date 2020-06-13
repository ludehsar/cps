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

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function() {
    Route::get('/', 'AdminStaticController@showDashboard')->name('dashboard');
    Route::get('/ladders', 'AdminStaticController@showLadder')->name('admin-ladder-list');
    Route::get('/ladders/new', 'AdminStaticController@showNewLadderForm')->name('admin-ladder-create-form');
    Route::get('/ladders/edit/{id}', 'AdminStaticController@showEditLadderForm')->name('admin-ladder-edit-form');
    Route::post('/ladders/new', 'LadderController@createNewLadder')->name('create-ladder');
    Route::post('/ladders/edit/{id}', 'LadderController@editLadder')->name('edit-ladder');
    Route::get('/ladders/{id}', 'AdminStaticController@showLadderProblems')->name('admin-ladder-problems');
});

Route::group(['middleware' => 'auth'], function() {
    Route::get('/profile', 'HomeController@profile')->name('user_profile');
    Route::get('/settings', 'HomeController@settings')->name('user_settings');
});

Route::get('/', 'HomeController@index')->name('home');
