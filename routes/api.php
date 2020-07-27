<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user', 'UserController@getAuthUser');
    Route::post('/settings', 'UserController@saveUserProfile');
    Route::post('/fetch-cf-submission/{id}', 'UserController@fetchUserCFSubmission');

    Route::get('/ladders', 'LadderController@getAllLadders');
    Route::get('/ladders/{id}', 'LadderController@getProblemsOfLadder');

    Route::group(['middleware' => 'admin'], function() {
        Route::get('/user/{id}', 'UserController@getUser');
        Route::post('/user/change/{id}', 'UserController@changeProfileDataAsAdmin');

        Route::delete('/courses/{id}/delete', 'API\CourseAPIController@deleteCourse');
    });
});
