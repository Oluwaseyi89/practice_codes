class DxlCart {
    constructor(addValue, incr, decr, prdName, prdUprice, cartBtn, cartBask, stock, img, id) {
        this.addValue = document.getElementById(addValue);
        this.incr = document.getElementById(incr);
        this.decr = document.getElementById(decr);
        this.prdName = document.getElementById(prdName);
        this.prdUprice = document.getElementById(prdUprice);
        this.cartBtn = document.getElementById(cartBtn);
        this.cartBask = document.getElementById(cartBask);
        this.stock = document.getElementById(stock);
        this.img = document.getElementById(img); 
        this.id = document.getElementById(id);      
    }
    
     initState () {
         window.addEventListener('load', async () => {
            // let res = await fetch('http://localhost:4000/temphome');
            // let data = await res.json();
            // for(let i=0; i<data.length; i++) {
            //     if(this.prdName.innerHTML == data[i].prod_name) {
            //     this.stock.value = data[i].stock_qty;
            //     this.prdUprice.innerHTML = data[i].prod_price;
            //     this.img.src = data[i].prod_img;
            //     }
            // }
                       
            let locStore = localStorage.getItem(this.prdName.innerHTML);
            if (locStore === null) {return;} else {
                let locStor = JSON.parse(locStore);
             this.addValue.value = locStor.Qty;
             this.cartBtn.value = locStor.cartStatus;
             this.cartBtn.style.backgroundColor = 'orange';
            }
             let products = [];
                let tot = 0;
                for (let i = 1; i<100; i++) {
                    let objC = document.getElementById('mac' + i);
                    if (objC !==null) {
                    products.push(objC.innerHTML);
                    }
                }
                for (let j=0;  j<products.length; j++) {
                    let resp = JSON.parse(localStorage.getItem(products[j]));
                    if (resp !==null) {
                        let repll = parseInt(resp.Qty);
                        tot += repll;
                        this.cartBask.innerHTML = tot;
                    }
                }
         });
     }

     value () {
        this.incr.addEventListener('click', () => {
            this.addValue.value++;
            return this.addValue.value;    
        });
        this.decr.addEventListener('click', () => {
            this.addValue.value--;
            return this.addValue.value;
        });
        return this.addValue.value;
    }

    cartAction () {
        let stor = "Add to Cart";
        let dele = "Remove from Cart";
        this.cartBtn.addEventListener('click', () => {
            if (this.cartBtn.value === stor) {
                this.cartBtn.value = dele;
                this.cartBtn.style.backgroundColor = 'orange';
               localStorage.setItem(this.prdName.innerHTML, JSON.stringify({
                "ProdName": this.prdName.innerHTML,
                "Qty": parseInt(this.addValue.value),
                "UnitPrice": parseInt(this.prdUprice.innerHTML),
                "totPri": (parseInt(this.prdUprice.innerHTML) * parseInt(this.addValue.value)),
                "cartStatus": this.cartBtn.value
            }));
            let products = [];
                let tot = 0;
                for (let i = 1; i<100; i++) {
                    let objC = document.getElementById('mac' + i);
                    if (objC !==null) {
                    products.push(objC.innerHTML);
                    }
                }
                for (let j=0;  j<products.length; j++) {
                    let resp = JSON.parse(localStorage.getItem(products[j]));
                    if (resp !==null) {
                        let repll = parseInt(resp.Qty);
                        tot += repll;
                        this.cartBask.innerHTML = tot;
                    }
                }
        } else {
            this.cartBtn.value = stor;
            localStorage.removeItem(this.prdName.innerHTML);
            this.addValue.value = 0;
            let products = [];
                let tot = 0;
                for (let i = 1; i<100; i++) {
                    let objC = document.getElementById('mac' + i);
                    if (objC !==null) {
                    products.push(objC.innerHTML);
                    }
                }
                for (let j=0;  j<products.length; j++) {
                    let resp = JSON.parse(localStorage.getItem(products[j]));
                    if (resp !==null) {
                        let repll = parseInt(resp.Qty);
                        if (repll === null) {
                            tot = "";
                            this.cartBask.innerHTML = tot;
                        } else {
                        tot += repll;
                        this.cartBask.innerHTML = tot;
                        }
                    }
                   
                }
            }
            return this.cartBtn.value;
        });
        return this.cartBtn.value;
    }
}

// let panel1 = new DxlCart ('addQty', 'plus', 'minus', 'mac1', 'amt', 'cartAct', 'cart', 'stock1', 'imgurl1');
// panel1.value();
// panel1.cartAction();
// panel1.initState();

// export default DxlCart;

const productss = [
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

// const prodContainer = document.getElementById('prod-container');

// products.forEach(prod => {
//     prodContainer.innerHTML += "<div class='unit-prod card'>" 
//     + "<div class='prod-img'>"
//     + "<div class='prod-name-price'>"
//     + `<p id=${'mac' + prod.id}>` + prod.prod_name + "</p>"
//     + "<p>" + "NGN " + prod.prod_price + "</p>"
//     + "</div>" 
//     + `<img alt=${prod.prod_name} height='100%' width='100%'  src='${prod.prod_img}'/>`
//     + "<div>"
//     + "<div class='prod-mod'>"
//     + "<span class='cartbtn'>" + "Qty to Add" + "</span>"
//     + `<input class='cartbtn' id=${'minus' + prod.id} type='button' value='-' />`
//     + `<input class='cartbtn' id=${'addQty' + prod.id} type='text' value='1' />`
//     + `<input class='cartbtn' id=${'plus' + prod.id} type='button' value='+' />`
//     + `<input class='cartsum' id=${'cartAct' + prod.id} type='submit' value='Add to Cart' />`
//     + "<span class='cartbtn'>" + "Qty in Stock" + "</span>"
//     + `<input class='cartbtn' id=${'stock' + prod.id} readonly='readonly' value='' />`
//     + "</div>"
//     + "</div>";
// });

productss.forEach(prod => {
    let cartOperation = new DxlCart('addQty' + prod.id, 'plus' + prod.id, 'minus' + prod.id, 'mac' + prod.id, 'amt' + prod.id, 'cartAct' + prod.id, 'cart', 'stock' + prod.id, 'imgUrl' + prod.id, prod.id);

    cartOperation.initState();
    cartOperation.value();
    cartOperation.cartAction();
});

