// import DxlCart from "../utils/dxlCart";

const products = [
    {
        "id" : 1,
        "prod_id" : "0001",
        "prod_name" : "Mac_Book",
        "prod_price" : "950000",
        "stock_qty" : "86",
        "prod_img" : "../static-web-app/images/products/macbook.jpg"
    },
    {
        "id" : 2,
        "prod_id" : "0002",
        "prod_name" : "iMac",
        "prod_price" : "2100000",
        "stock_qty" : "85",
        "prod_img" : "../static-web-app/images/products/imac.jpg"
    },
    {
        "id" : 3,
        "prod_id" : "0003",
        "prod_name" : "Kyocera",
        "prod_price" : "190000",
        "stock_qty" : "1000",
        "prod_img" : "../static-web-app/images/products/kcocera.png"
    },
    {
        "id" : 4,
        "prod_id" : "0004",
        "prod_name" : "DVR",
        "prod_price" : "51000",
        "stock_qty" : "950",
        "prod_img" : "../static-web-app/images/products/dvr.JPG"
    },
    {
        "id" : 5,
        "prod_id" : "0005",
        "prod_name" : "Router",
        "prod_price" : "35000",
        "stock_qty" : "1500",
        "prod_img" : "../static-web-app/images/products/router.jpg"
    },
    {
        "id" : 6,
        "prod_id" : "0006",
        "prod_name" : "Network_Cable",
        "prod_price" : "2500",
        "stock_qty" : "10000",
        "prod_img" : "../static-web-app/images/products/network_cable.jpg"
    },
    {
        "id" : 7,
        "prod_id" : "0007",
        "prod_name" : "cctv_cam",
        "prod_price" : "30000",
        "stock_qty" : "5000",
        "prod_img" : "../static-web-app/images/products/cctv_cam.jpg"
    },
    {
        "id" : 8,
        "prod_id" : "0008",
        "prod_name" : "PC_Desk",
        "prod_price" : "27000",
        "stock_qty" : "2500",
        "prod_img" : "../static-web-app/images/products/computer_cabinet.jpg"
    },
    {
        "id" : 9,
        "prod_id" : "0009",
        "prod_name" : "Network_Switch",
        "prod_price" : "33000",
        "stock_qty" : "2500",       
        "prod_img" : "../static-web-app/images/products/switch.jpg"
    },
    {
        "id" : 10,
        "prod_id" : "0010",
        "prod_name" : "hp_laserjet",
        "prod_price" : "90000",
        "stock_qty" : "1200",
        "prod_img" : "../static-web-app/images/products/laser_printer.jpg"
    },
    {
        "id" : 11,
        "prod_id" : "0012",
        "prod_name" : "Xiaomi",
        "prod_price" : "650000",
        "stock_qty" : "70",
        "prod_img" : "../static-web-app/images/products/Xiaomi.webp"
    },
    {
        "id" : 12,
        "prod_id" : "0011",
        "prod_name" : "iphoneX3",
        "prod_price" : "750000",
        "stock_qty" : "54",
        "prod_img" : "../static-web-app/images/products/iphoneX3.jpg",
    }
]

const prodContainer = document.getElementById('prod-container');

products.forEach(prod => {
    prodContainer.innerHTML += "<div class='unit-prod card'>" 
    + "<div class='prod-img'>"
    + "<div class='prod-name-price'>"
    + `<p id=${'mac' + prod.id}>` + prod.prod_name + "</p>"
    + `<p id=${'amt' + prod.id}>` + prod.prod_price + "</p>"
    + "</div>" 
    + `<img alt=${prod.prod_name} height='100%' width='100%'  src='${prod.prod_img}'/>`
    + "<div>"
    + "<div class='prod-mod'>"
    + "<span class='cartbtn'>" + "Qty to Add" + "</span>"
    + `<input class='cartbtn' id=${'minus' + prod.id} type='button' value='-' />`
    + `<input class='cartbtn' id=${'addQty' + prod.id} type='text' value='1' />`
    + `<input class='cartbtn' id=${'plus' + prod.id} type='button' value='+' />`
    + `<input class='cartsum' id=${'cartAct' + prod.id} type='submit' value='Add to Cart' />`
    + "<span class='cartbtn'>" + "Qty in Stock" + "</span>"
    + `<input class='cartbtn' id=${'stock' + prod.id} readonly='readonly' value=${prod.stock_qty} />`
    + "</div>"
    + "</div>";
});

// products.forEach(prod => {
//     let cartOperation = new DxlCart('addQty' + prod.id, 'plus' + prod.id, 'minus' + prod.id, 'mac' + prod.id, 'amt' + prod.id, 'cartAct' + prod.id, 'cart', 'stock' + prod.id, 'imgUrl' + prod.id, prod.id);

//     cartOperation.initState();
//     cartOperation.value();
//     cartOperation.cartAction();
// });
