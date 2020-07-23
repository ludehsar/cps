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
    Route::patch('/ladders/edit/{id}', 'LadderController@editLadder')->name('edit-ladder');
    Route::get('/ladder/{id}', 'AdminStaticController@showLadderProblems')->name('admin-ladder-problems');
    
    Route::get('/users', 'AdminStaticController@showUsersList')->name('admin-user-list');
    Route::get('/users/new', 'AdminStaticController@showNewUserForm')->name('admin-user-create-form');
    Route::post('/users/new', 'UserController@createNewUser')->name('create-user');
    Route::delete('/users/delete/{id}', 'UserController@deleteUser')->name('admin-user-delete');
    Route::get('/user/{username}', 'AdminStaticController@showUserProfile')->name('admin-user-profile');
    Route::get('/users/{userId}/ladder/{ladderId}', 'AdminStaticController@showUserLadderProgress')->name('admin-user-ladder-progress');
    
    Route::get('/courses', 'AdminStaticController@showCourses')->name('admin-course-list');
    Route::get('/course/new', 'AdminStaticController@showNewCourseForm')->name('admin-new-course-form');
    Route::get('/courses/{id}', 'AdminStaticController@showCourseClasses')->name('admin-course-classes');
    Route::get('/courses/{id}/edit', 'AdminStaticController@showEditCourseForm')->name('admin-edit-course-form');
    Route::post('/course/new', 'CourseController@storeNewCourse')->name('create-course');
    Route::patch('/courses/{id}/edit', 'CourseController@editCourse')->name('edit-course');
});

Route::group(['middleware' => 'auth'], function() {
    Route::get('/profile', 'HomeController@profile')->name('user_profile');
    Route::get('/settings', 'HomeController@settings')->name('user_settings');
    Route::get('/ladders', 'HomeController@showLadders')->name('ladders');
    Route::get('/ladders/{ladderId}', 'HomeController@showLadderProgress')->name('user-ladder-progress');
});

Route::get('/', 'HomeController@index')->name('home');
