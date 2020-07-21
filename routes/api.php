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
    Route::get('/user', 'API\UserAPIController@getAuthUser');
    Route::post('/settings', 'API\UserAPIController@saveUserProfile');
    Route::post('/fetch-cf-submission/{id}', 'API\UserAPIController@fetchUserCFSubmission');

    Route::group(['middleware' => 'admin'], function() {
        Route::get('/user/{id}', 'API\UserAPIController@getUser');
        Route::post('/user/change/{id}', 'API\UserAPIController@changeProfileDataAsAdmin');

        Route::delete('/courses/{id}/delete', 'API\CourseAPIController@deleteCourse');
    });
});
