<?php

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
//registration and login
Route::post('/app/registration', "UserController@registration");
Route::post('/app/login', "UserController@login");
//ads
Route::post('/app/create_a_new_ad', "AdController@create_a_new_ad");
Route::post('/app/delete_an_ad', "AdController@delete_an_ad");
Route::post('/app/all_ads_adtype_update', "AdController@update_ad_type");
Route::post('/app/create_a_new_city', "AdController@create_a_new_city");
Route::post('/app/create_a_new_division', "AdController@create_a_new_division");
Route::post('/app/create_a_new_category', "AdController@create_a_new_category");
Route::post('/app/create_a_new_area', "AdController@create_a_new_area");

//all ad
Route::get('/app/all_ad/{id}', "AdController@all_ad_by_id");
Route::get('/app/all_ads_of_my_id/{id}', "AdController@all_ads_of_my_id");
Route::get('/app/all_ads', "AdController@all_ads");

//image upload
Route::post('/app/upload_image', "AdController@image_upload");





Route::get('/app/all_city', "AdController@all_city");
Route::get('/app/all_area', "AdController@all_area");
Route::get('/app/all_division', "AdController@all_division");
Route::get('/app/all_category', "AdController@all_category");
//showing ads
Route::get('/app/all_category/{id}', "AdController@all_ads_of_same_category");
Route::get('/app/all_division/{id}', "AdController@all_ads_of_same_division");
Route::get('/app/all_city/{id}', "AdController@all_ads_of_same_city");
//logout
Route::get('/logout', function () {
    Auth::logout();
    Session::flush();
    return redirect("/");
});

Route::any('{slug}', 'HomeController@home')->where('slug', '([A-z\d-\/_.]+)?');
