@extends('layouts.app')
    @section('content')
    @if (session('error'))
                    <div role="alert" class="container alert alert-dismissible alert-danger" style="text-align: center; width:40%; margin-top:30px;" >
                        {{session('error')}} 
                        <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
                    </div>
    @endif

    @if (session('success'))
                    <div role="alert" class="container alert alert-dismissible alert-success" style="text-align: center; width:40%; margin-top:30px;" >
                        {{session('success')}} 
                        <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
                    </div>
    @endif
        <div id="regAlert" class="alert alert-danger alert-dismissible" role="alert">
            <span class="close" id="regClose" role="alert" data-dismissible="Alert">&times;</span>
                <p>Please Enter All Fields!</p>
        </div>

        <!--Invalid E-Mail Alert Box Code Starts Here-->
        <div id="invalEm" class="alert alert-danger alert-dismissible" role="alert">
            <span class="close" id="valEmClose" role="alert" data-dismissible="Alert">&times;</span>
                <p>Please Enter a Valid E-Mail!</p>
        </div>
        <!--Password Mismatch Alert Box Code Starts Here-->
        <div id="pwMismatch" class="alert alert-danger alert-dismissible" role="alert">
            <span class="close" id="pwMisClose" role="alert" data-dismissible="Alert">&times;</span>
                <p>Supplied Passwords Mismatch!</p>
        </div>
         <!--E-Mail Validation Alert Box Code Starts Here-->
         <div id="mailValid" class="alert alert-danger alert-dismissible" role="alert">
            <span class="close" id="emForClose" role="alert" data-dismissible="Alert">&times;</span>
                <p>Please Enter a Valid E-Mail Address!</p>
        </div>

        <div class="row-fluid"  id="myReg">
            <form method="POST" action="/registeruser">
                {{csrf_field()}}
                <fieldset>
                    <legend>Customer Registration</legend> <br/>
                    <div id="formSet">
                        <div>
                            <input name="last_name" id="surname" type="text" for="surname" placeholder="Surname Here" /><br /><br />
                            <input name="first_name" id="firstname" type="text" for="first name" placeholder="First Name Here" /><br /><br />
                            <input name="email" id="emailReg" type="text" for="E-Mail" placeholder="E-Mail here" /><br /><br />
                            <input name="phone" id="phone" type="text" for="Phone" placeholder="Phone No. 0802000000" /><br /><br />
                            <input name="country" id="country" type="text" for="country" placeholder="Country" /><br /><br />
                        </div>
                        <div>
                            <input name="state" id="state" type="text" for="state" placeholder="State/Province" /><br /><br />
                            <input name="street" id="street" type="text" for="street" placeholder="Street Address" /><br /><br />
                            <input name="dob" id="dob" type="date" for="dob" placeholder="Date of Birth" /><br /><br />
                            <input name="password" id="passwordReg" type="password" for="password" placeholder="Password" /><br /><br />
                            <input id="passwordReg2" type="password" for="password" placeholder="Confirm Password" /><br /><br />
                        </div>
                    </div>
                   
                    <button type="submit" class="btn" id="regBtn">Register</button> <br/> <br />
                    <a href="/userlogin">Login Instead</a>
                </fieldset>
            </form>
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