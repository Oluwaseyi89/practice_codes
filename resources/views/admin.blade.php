@extends('layouts.app')
    @section('content')
<form id="admin" action="/product-update" method="POST">
{{csrf_field()}}
    <input id="adminPass" name="adminpass" type="password" placeholder="Enter Password"/>
    <input class="adminSubmit" type="submit" value="Login"/>
</form>
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

    <style>
        #admin {
            margin-top: 100px;
            margin-left: 500px;
        }
    </style>
@endsection
