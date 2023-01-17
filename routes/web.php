<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterUser;

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

Route::get('/', function () {
    // return view('welcome');
    return view('home');
	
	//return "<h1>Hello World!</h1>";
});

Route::get('/register', function () {
    // return view('welcome');
    return view('userregistration');
	
	//return "<h1>Hello World!</h1>";
});

Route::get('/userlogin', function () {
    // return view('welcome');
    return view('userlogin');
	
	//return "<h1>Hello World!</h1>";
});

// Route::post('/registeruser', 'RegisterUser@submit');


Route::post('/registeruser', [RegisterUser::class, 'submit']);
Route::get('/admin', [RegisterUser::class, 'admin']);
Route::post('/product-update', [RegisterUser::class, 'prodUpdate']);
Route::post('/add-new-product', [RegisterUser::class, 'addNewProd']);
Route::post('/update-product', [RegisterUser::class, 'updateProd']);
Route::delete('/delete-product', [RegisterUser::class, 'deleteProd']);
Route::get('/product-data', [RegisterUser::class, 'prodData']);
Route::get('/carttable', [RegisterUser::class, 'cartTable']);