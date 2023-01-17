@extends('layouts.app')
    @section('content')
            <div id="logAlert" class="alert alert-danger alert-dismissible" role="alert">
                <span class="close" id="close" role="alert" data-dismissible="Alert">&times;</span>
                    <p>Please input your E-Mail and Password!</p>
            </div>
        <div id="formBox">
            <div class="row-fluid"  id="myForm">
                <form action="/login" method="POST">
                    <fieldset>
                        <legend>User Login</legend>
                        <input type="text" id="emailLog" name="email" placeholder="E-Mail here" /><br /><br />
                        <input type="password" id="passwordLog" name="password" placeholder="Password" /><br /><br />
                        <button type="submit" method="POST" action="/login" class="btn" id="Login">Login</button> <br/> 
                        <div id="passReset">
                            <a href="/reset" action="/reset">Reset Password</a> or <a href="/register">Register</a>
                        </div>
                    </fieldset>
                </form>
            </div> 
        </div>  
        <script>
                let cart = document.getElementById('cart');
                let tot = 0;
                let ourProds = ['Network_Switch', 'cctv_cam', 'Router', 'PC_Desk', 'hp_laserjet', 'Kyocera', 'iMac', 'Mac_Book', 'DVR', 'Xiaomi', 'Network_Cable', 'iphoneX3']
                let prodInCart = [];
                for (let i=0; i<100; i++) {
                    let produ = JSON.parse(localStorage.getItem(ourProds[i]));
                    if(produ !== null) {
                        prodInCart.push(produ);
                    }
                }

                for (let j=0; j<prodInCart.length; j++) {
                    tot += prodInCart[j].Qty;
                }

                cart.innerHTML = tot;                              
    </script>
@endsection
        