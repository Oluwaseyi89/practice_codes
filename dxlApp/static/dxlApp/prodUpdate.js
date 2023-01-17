let add_prod = document.getElementById('add_prod');
let prod_name = document.getElementById('prod_name');
let prod_price = document.getElementById('prod_price');
let prod_qty = document.getElementById('prod_qty');
let update_prod = document.getElementById('update_prod');
let del_prod = document.getElementById('del_prod');
let prod_img = document.getElementById('img_file');

// let full_path = prod_img.value;
// let base_name = prod_img.value.split('\\').pop().split('/').pop().toString();
// let path_start = "http://localhost:5000/static/dxlApp/Product_Image/";
// let img_file_name = path_start + base_name;
// function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i=0; i<ca.length; i++) {
//         let c = ca[i];
//         while(c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

function getCookie(name) {
    let cookieValue = null;
    if(document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i=0; i<cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1)) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// const CSRF_TOKEN = '{{ csrf_token }}';
const csrftoken = getCookie('csrftoken');
// const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").content;
// const csrftoken = document.head.querySelector("[name~=csrfmiddlewaretoken][content]").content;
// let showcas = document.getElementById('showcas');
// let loadProd = document.getElementById('loadProd');

// const csrftoken = Cookies.get('csrftoken');

// console.log();
console.log(csrftoken);

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

let base_name = prod_img.value.split('\\').pop().split('/').pop().toString();
let path_start = "http://localhost:5000/static/dxlApp/Product_Image/";
let img_file_name = path_start + base_name;

console.log(base_name);

    fetch('http://localhost:5000/dxlApp/add_new_product/', {
        method: "POST",
        mode: "same-origin",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-CSRFToken": csrftoken,
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
            "prod_id": prod_id,
            "prod_name": prod_name.value,
            "prod_price": prod_price.value,
            "stock_qty": prod_qty.value,
            "prod_img": img_file_name
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
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
            "prod_id": prod_id,
            "prod_name": prod_name.value,
            "prod_price": prod_price.value,
            "stock_qty": prod_qty.value,
            "prod_img": img_file_name
        })
    }).then((data) => console.log(data))
    .catch((err) => console.log(err));
}, false);

del_prod.addEventListener('click', () => {
    fetch('/delete-product', {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
            "prod_name": prod_name.value
        })
    }).then((result)=> console.log(result))
        .catch((err) => console.log(err));
}, false);