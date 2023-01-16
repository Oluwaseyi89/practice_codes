let add_prod = document.getElementById('add_prod');
let prod_name = document.getElementById('prod_name');
let prod_price = document.getElementById('prod_price');
let prod_qty = document.getElementById('prod_qty');
let update_prod = document.getElementById('update_prod');
let del_prod = document.getElementById('del_prod');
let prod_img = document.getElementById('prod_img');
// let showcas = document.getElementById('showcas');
// let loadProd = document.getElementById('loadProd');



add_prod.addEventListener('click', () => {
    
    let prod_id;

switch(prod_name.value) {
    case 'Mac_Book': prod_id = "0001";
        break;
    case 'iMac': prod_id = "0002";
        break;
    case 'Kyocera': prod_id = "0003";
        break;
    case 'DVR': prod_id = "0004";
        break;
    case 'Router': prod_id = "0005";
        break;
    case 'Network_Cable': prod_id = "0006";
        break;
    case 'cctv_cam': prod_id = "0007";
        break;
    case 'PC_Desk': prod_id = "0008";
        break;
    case 'Network_Switch': prod_id = "0009";
        break;
    case 'hp_laserjet': prod_id = "0010";
        break;
    case 'iphoneX3': prod_id = "0011";
        break;
    case 'Xiaomi': prod_id = "0012";
        break;
}

    fetch('/add-new-product', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "prod_id": prod_id,
            "prod_name": prod_name.value,
            "prod_price": prod_price.value,
            "stock_qty": prod_qty.value,
            "prod_img": prod_img.value
        })
    }).then((data) => console.log(data))
    .catch((err) => console.log(err));
}, false);

update_prod.addEventListener('click', () => {
    
    let prod_id;

switch(prod_name.value) {
    case 'Mac_Book': prod_id = "0001";
        break;
    case 'iMac': prod_id = "0002";
        break;
    case 'Kyocera': prod_id = "0003";
        break;
    case 'DVR': prod_id = "0004";
        break;
    case 'Router': prod_id = "0005";
        break;
    case 'Network_Cable': prod_id = "0006";
        break;
    case 'cctv_cam': prod_id = "0007";
        break;
    case 'PC_Desk': prod_id = "0008";
        break;
    case 'Network_Switch': prod_id = "0009";
        break;
    case 'hp_laserjet': prod_id = "0010";
        break;
    case 'iphoneX3': prod_id = "0011";
        break;
    case 'Xiaomi': prod_id = "0012";
        break;
}

    fetch('/update-product', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "prod_id": prod_id,
            "prod_name": prod_name.value,
            "prod_price": prod_price.value,
            "stock_qty": prod_qty.value,
            "prod_img": prod_img.value
        })
    }).then((data) => console.log(data))
    .catch((err) => console.log(err));
}, false);

del_prod.addEventListener('click', () => {
    fetch('/delete-product', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "prod_name": prod_name.value
        })
    }).then((result)=> console.log(result))
        .catch((err) => console.log(err));
}, false);

// window.addEventListener("load", () => {
//     fetch('/temphome', {
//         method: "GET"
//     }).then((res) => {
        
//             showcas.innerHTML = res.map((item) => <div class ="thumb1" style="width: 25%;">
//             <div class="thumbnl">
//                 <div class="panel">
//                  <div id="mac1" class="panel" >{item.prod_name}</div>
//                     <div  id="amt11" class="panel">{item.prod_price}</div>
//                 </div>
//                 <img class="img-thumbnail" src={item.prod_img} />
//                 <div class="cartpanel">
//                     <span class="cartbtn">Qty to Add</span>
//                     <input class="cartbtn" id="addQty11" type="text" value="1" />
//                     <input class="cartbtn" id="plus11" type="button" value="+" />
//                     <input class="cartbtn" id="minus11" type="button" value="-" />
//                     <input class="cartsum" id="cartAct11" type="submit" value="Add to Cart" />
//                     <span class="cartbtn">Qty in Stock</span>
//                     <input class="cartbtn" readonly="readonly" value={item.stock_qty} />
//                 </div>
//             </div>                  
//         </div>);
        
//     });
   
// });

