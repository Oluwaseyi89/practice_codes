<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddedUsers;
use App\Models\Products;

class RegisterUser extends Controller
{
    public function submit (Request $request) {
        // $users = AddedUsers::get('eMail');
        $emailToAdd = $request->input('email');
        $dbCheck = AddedUsers::where('email', $emailToAdd)->first();
        $pass = md5($request->input('password'));
        $this->validate($request, [
            'first_name'=>'required',
            'last_name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'country'=>'required',
            'state'=>'required',
            'street'=>'required',
            'dob'=>'required',
            'password'=>'required'
        ]);
        if ($dbCheck != null) {
            return redirect('/register')->with('error', 'The Email Already Exists');
        } else {

            $newuser = new AddedUsers;
            $newuser->first_name = $request->input('first_name');
            $newuser->last_name = $request->input('last_name');
            $newuser->email = $request->input('email');
            $newuser->phone = $request->input('phone');
            $newuser->country = $request->input('country');
            $newuser->state = $request->input('state');
            $newuser->street = $request->input('street');
            $newuser->dob = $request->input('dob');
            $newuser->password = $pass;
    
            $newuser->save();
    
            return redirect('/register')->with('success', 'Your Registration was Successful! Thanks.');
            // return 'SUCCESS';
        }
    }

    public function admin () {
        return view('admin');
    }

    public function updateProd (Request $request) {
        $prodToUpdate = $request->json('prod_name');
        $dbProd = Products::where('prod_name', $prodToUpdate)->first();
        if ($dbProd == null) {
            return redirect('/')->with('success', 'Product does not Exist');
        } else {
            $dbProd->prod_id = $request->json('prod_id');
            $dbProd->prod_name = $request->json('prod_name');
            $dbProd->prod_price = $request->json('prod_price');
            $dbProd->stock_qty = $request->json('stock_qty');
            $dbProd->prod_img = $request->json('prod_img'); 
            
            $dbProd->update();
        }
    }

    public function deleteProd (Request $request) {
        $prodToDelete = $request->json('prod_name');
        $dbProd = Products::where('prod_name', $prodToDelete)->first();
               
        $dbProd->delete();
    }

    public function addNewProd (Request $request) {
        $prodToAdd = $request->json('prod_name');
        $dbProd = Products::where('prod_name', $prodToAdd)->first();
        $newProd = new Products();

        // $newProd->prod_id = $request->get('prod_id');
        // $newProd->prod_name = $request->get('prod_name');
        // $newProd->prod_price = $request->get('prod_price');
        // $newProd->stock_qty = $request->get('stock_qty');
        // $newProd->prod_img = $request->get('prod_img');
        if ($dbProd == null) {
            $newProd->prod_id = $request->json('prod_id');
            $newProd->prod_name = $request->json('prod_name');
            $newProd->prod_price = $request->json('prod_price');
            $newProd->stock_qty = $request->json('stock_qty');
            $newProd->prod_img = $request->json('prod_img');
        
            $newProd->save();
        } else {
            return redirect('/')->with('success', 'Product Already Exists');
        }

        // $newProd->prod_id = $request->json('prod_id');
        //     $newProd->prod_name = $request->json('prod_name');
        //     $newProd->prod_price = $request->json('prod_price');
        //     $newProd->stock_qty = $request->json('stock_qty');
        //     $newProd->prod_img = $request->json('prod_img');
        
        //     $newProd->save();
    }

    public function prodUpdate (Request $request) {
        if ($request->input('adminpass') == "11jan2001") {
            return view('prodUpdate');
        } else {
            return "<h1>Wrong Password Entered</h1>";
        }
    }

    public function prodData (Request $request) {
       $prodData = Products::all();
       return $prodData;
    }

    public function cartTable (Request $request) {
       return view('carttable');
    }
}
