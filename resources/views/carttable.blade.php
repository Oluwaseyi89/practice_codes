@extends('layouts.app')
    @section('content')
<div id="contain" class="container arrain">
    <div class="column">
        <div class="heading">S/N</div>
        <div class="populate" id="sn"></div>
    </div>
    <div id="produc" class="column">
        <div class="heading">Product</div>
        <div class="populate" id="product"></div>
    </div>
    <div class="column">
        <div class="heading">Unit Price (₦)</div>
        <div class="populate" id="unitPri"></div>
    </div>
    <div class="column">
        <div class="heading">Quantity</div>
        <div class="populate" id="Qty"></div>
    </div>
    <div class="column">
        <div class="heading">Total Price (₦)</div>
        <div class="populate" id="totPri"></div>
    </div>
</div>
<div class="container gTot" id="ggTot">
    <h1>Grand Total Price: ₦<span id="grandTot"></span></h1>
</div>

<!-- <div class="container">
    <ul class="list-group" id="fragment">
        
    </ul>
</div> -->

<style>
    .arrain {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 70px;
        font-size: 24px;
        background-color: steelblue;
    }
    .populate {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .column {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .heading {
        font-weight: bold;
    }

    .prettify {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    #produc {
        display: flex;
        align-items: left;
    }

    .gTot {
        background-color: orange;
        font-weight: bold;
        color: white;
    }
</style>

<script>
    // let prod = document.getElementById('prod');
    let ourProds = ['Network_Switch', 'cctv_cam', 'Router', 'PC_Desk', 'hp_laserjet', 'Kyocera', 'iMac', 'Mac_Book', 'DVR', 'Xiaomi', 'Network_Cable', 'iphoneX3']
    let prodInCart = [];
    let grandTot = document.getElementById('grandTot');
    for (let i=0; i<100; i++) {
        let produ = JSON.parse(localStorage.getItem(ourProds[i]));
        if(produ !== null) {
            prodInCart.push(produ);
        }
    }
    console.log(prodInCart);
    // prod.innerHTML = prodInCart.map((item) => `<tr class="rowTop">` +
    //     `<td >${item.ProdName}</td>` +
    //     `<td>${item.UnitPrice}</td>` +
    //     `<td>${item.Qty}</td>` +
    //     `<td>${item.totPri}</td>` +
    // `</tr>` );

// this script below is for cark basket value 
        let sn = document.getElementById('sn');
        let product = document.getElementById('product');
        let unitPri = document.getElementById('unitPri');
        let qty = document.getElementById('Qty');
        let totPri = document.getElementById('totPri');

        for (let k=1; k<prodInCart.length + 1; k++) {
            sn.innerHTML += `${k}` + "<br/>" + "<br/>";
        }

        for (let k=0; k<prodInCart.length; k++) {
            product.innerHTML += prodInCart[k].ProdName + "<br/>" + "<br/>";
            unitPri.innerHTML += prodInCart[k].UnitPrice + "<br/>" + "<br/>";
            qty.innerHTML += prodInCart[k].Qty + "<br/>" + "<br/>";
            totPri.innerHTML += prodInCart[k].totPri + "<br/>" + "<br/>";
        }
//         let frag = document.getElementById('fragment');
//  frag.innerHTML = prodInCart.map((item) => '<li class="list-group-item prettify">' +
//         `<div >${item.ProdName}</div>` +
//         `<div>${item.UnitPrice}</div>` +
//         `<div>${item.Qty}</div>` +
//         `<div>${item.totPri}</div>` +
//     '</li>' );
      

                let cart = document.getElementById('cart');
                let tot = 0;
                let gTot = 0;
               
                for (let j=0; j<prodInCart.length; j++) {
                    tot += prodInCart[j].Qty;
                    gTot += parseInt(prodInCart[j].totPri);
                    grandTot.innerHTML = gTot;
                }

                cart.innerHTML = tot;

                let contain = document.getElementById('contain');
                let ggTot = document.getElementById('ggTot');
               
               
                
                if (prodInCart.length == 0) {
                    contain.style.backgroundColor = "transparent";
                    contain.innerHTML = "<h1>There is no product added!</h1>";
                    ggTot.style.display = "none";
                }
                // if (prodInCart.length == 0) contain.innerHTML = "<h1>There is no product added!</h1>";
    </script>
@endsection