class DxlCart {
    constructor(addValue, incr, decr, prdName, prdUprice, cartBtn, cartBask, stock, img) {
        this.addValue = document.getElementById(addValue);
        this.incr = document.getElementById(incr);
        this.decr = document.getElementById(decr);
        this.prdName = document.getElementById(prdName);
        this.prdUprice = document.getElementById(prdUprice);
        this.cartBtn = document.getElementById(cartBtn);
        this.cartBask = document.getElementById(cartBask);
        this.stock = document.getElementById(stock);
        this.img = document.getElementById(img);       
    }
    
     initState () {
         window.addEventListener('load', async () => {
            let res = await fetch('http://localhost:4000/temphome');
            let data = await res.json();
            for(let i=0; i<data.length; i++) {
                if(this.prdName.innerHTML == data[i].prod_name) {
                this.stock.value = data[i].stock_qty;
                this.prdUprice.innerHTML = data[i].prod_price;
                this.img.src = data[i].prod_img;
                }
            }
                       
            let locStore = localStorage.getItem(this.prdName.innerHTML);
            if (locStore === null) {return;} else {
                let locStor = JSON.parse(locStore);
             this.addValue.value = locStor.Qty;
             this.cartBtn.value = locStor.cartStatus;
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

let panel1 = new DxlCart ('addQty1', 'plus1', 'minus1', 'mac1', 'amt1', 'cartAct1', 'cart', 'stock1', 'imgurl1');
panel1.value();
panel1.cartAction();
panel1.initState();

let panel2 = new DxlCart('addQty2', 'plus2', 'minus2', 'mac2', 'amt2', 'cartAct2', 'cart', 'stock2', 'imgurl2');
panel2.value();
panel2.cartAction();
panel2.initState();

let panel3 = new DxlCart('addQty3', 'plus3', 'minus3', 'mac3', 'amt3', 'cartAct3', 'cart', 'stock3', 'imgurl3');
panel3.value();
panel3.cartAction();
panel3.initState();

let panel4 = new DxlCart('addQty4', 'plus4', 'minus4', 'mac4', 'amt4', 'cartAct4', 'cart', 'stock4', 'imgurl4');
panel4.value();
panel4.cartAction();
panel4.initState();

let panel5 = new DxlCart('addQty5', 'plus5', 'minus5', 'mac5', 'amt5', 'cartAct5', 'cart', 'stock5', 'imgurl5');
panel5.value();
panel5.cartAction();
panel5.initState();

let panel6 = new DxlCart('addQty6', 'plus6', 'minus6', 'mac6', 'amt6', 'cartAct6', 'cart', 'stock6', 'imgurl6');
panel6.value();
panel6.cartAction();
panel6.initState();

let panel7 = new DxlCart('addQty7', 'plus7', 'minus7', 'mac7', 'amt7', 'cartAct7', 'cart', 'stock7', 'imgurl7');
panel7.value();
panel7.cartAction();
panel7.initState();

let panel8 = new DxlCart('addQty8', 'plus8', 'minus8', 'mac8', 'amt8', 'cartAct8', 'cart', 'stock8', 'imgurl8');
panel8.value();
panel8.cartAction();
panel8.initState();

let panel9 = new DxlCart('addQty9', 'plus9', 'minus9', 'mac9', 'amt9', 'cartAct9', 'cart', 'stock9', 'imgurl9');
panel9.value();
panel9.cartAction();
panel9.initState();

let panel10 = new DxlCart('addQty10', 'plus10', 'minus10', 'mac10', 'amt10', 'cartAct10', 'cart', 'stock10', 'imgurl10');
panel10.value();
panel10.cartAction();
panel10.initState();

let panel11 = new DxlCart('addQty11', 'plus11', 'minus11', 'mac11', 'amt11', 'cartAct11', 'cart', 'stock11', 'imgurl11');
panel11.value();
panel11.cartAction();
panel11.initState();

let panel12 = new DxlCart('addQty12', 'plus12', 'minus12', 'mac12', 'amt12', 'cartAct12', 'cart', 'stock12', 'imgurl12');
panel12.value();
panel12.cartAction();
panel12.initState();