const express = require('express');
const db = require('./Dxl_db');
const router = express.Router();
var exphbs = require('express-handlebars');
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const URI = "mongodb://localhost:27017/DXL_Online";
const mongoose = require('mongoose');
mongoose.connect(URI, {useNewUrlParser: true}, {useUnifiedTopology: true}).
then(() =>console.log("mongoose connection established")).catch((err) => console.log(err));
// router.engine('hbs', exphbs({defaultLayout: 'login', layoutsDir: 'views/', extname: '.hbs'}));
// router.set('view engine', 'hbs');
// const conRedis = require('connect-redis');
// const cookieParser = require('cookie-parser');
// const csurf = require('csurf');
// const cookieSession = require('cookie-session');
const path = require('path');
// const bodyParser = require('body-parser');
var collection = 'Sessions';
// var php = require ('node-php');
// var schema = require ('./Dxl_DataModel');
// const Joi = require('joi');
var validateUser = require ('./Dxl_DataModel');
// const cookieParser = require('cookie-parser');

//Middleware for Validation and Authentication Starts

const { check, validator }  = require('express-validator');
// const check = require('check');
const crypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
let OAuth2 = require('oauth2');
//Nodemailer Code Starts
let credentials = {
    // cookieSecret: '1234567',
    gmail: {
        user: "isenewoephr2012@gmail.com",
        password: "16sep2003",
        // user: "isenewooluwaseyi@yahoo.com",
        // password: "31dec19894real",
    } 
};

let nodemailer = require('nodemailer');

let mailTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        // type: 'OAuth2',
        user: credentials.gmail.user,
        pass: credentials.gmail.password,
    }
});

mailTransport.sendMail({
    from: '"De-Extralucid Tech World" <info@dxltechworld.com>',
    to: 'deextralucid@gmail.com',
    subject: 'Testing Nodemailer',
    text: 'If you get this message, it means nodemailer is working',
}, function (err) {
    if (err) console.log('unable to send email:- ' + err);
    else console.log('Message sent successfully');
});
//Nodemailer Code Ends

// check();

//Middleware for Validation and Authentication Ends

const period = 10 * 60 * 1000;
const uuid = require('uuid').v4;

//Mongo-session starts here

const session = require('express-session');
const { exit } = require('process');
const { ENOSPC } = require('constants');
const { stat } = require('fs');
const { ObjectID } = require('bson');
const mongoDBStore = require('connect-mongodb-session')(session);

const store = new mongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/DXL_Online',
    collection: 'Sessions',
    autoRemove: 'native',
});

router.use(session({
    secret: uuid(),
    cookie: {
        maxAge: period
    },
    store: store,
    resave: true,
    saveUninitialized: true,
}));


//Mongo-session ends here




// router.use(cookieParser(credentials.cookieSecret));

// router.use(session());

// router.use(express.cookieParser());

// router.use(cookieParser);


//Redis starts here

// const session = require('express-session');
// const redis = require('redis');
// const redisStore = require('connect-redis')(session);
// const client = redis.createClient();

// router.use(session({
//     store: new redisStore({
//         host: 'localhost',
//         port: 6379,
//         db: 'DXL_Online',
//         pass: uuid(),
//         client: client,
//     }),
//     secret: uuid(),
//     cookie: { path: '/', maxAge: period }, 
//     resave: true,
//     saveUninitialized: true,
// }));

//Redis ends here

router.use(express.json());

router.use(express.urlencoded({ extended: true }));

//User Registration Code 2 Starts here

// router.post('/Online_Users', 
//         // [
//         //     check('LastName', 'Please Enter your Surname').not().isEmpty(),
//         //     check('FirstName', 'Please Enter your First Name').not().isEmpty(),
//         //     check('eMail', 'Please Enter a Valid E-Mail Address').isEmail(),
//         //     check('passWord', 'Please Enter a Minimum of 8 Characters').isLength({
//         //         min: 6
//         //     }),
//         // ],
//             async (req, res) => {
//                 // const errors = check(req);
                
//                 // if(!errors.isEmpty()) {
//                 //     return res.status(400).json({
//                 //         errors: errors.array()
//                 //     })
//                 // }

//                 const LastName = req.body.LastName;
//                 const FirstName = req.body.FirstName; 
//                 const eMail = req.body.eMail; 
//                 const passWord = req.body.passWord;
                
//                 try {
//                     let user = await db.getDB().collection(collection).findOne({
//                         'eMail': eMail,
//                     });

//                     if(user != null) {                        
//                         // return res.status(400).json({
//                         //     msg: 'User Already Exists!'
//                         // });
//                         return res.render('userExists');
                       
//                     } else {

//                     let User = {
//                         'FirstName': FirstName,
//                         'LastName': LastName,
//                         'eMail': eMail,
//                         'passWord': passWord,
//                     };
//                     // const uSer = req.body;
//                     let respon = validateUser(User);

//                         if(respon.error) {
//                             console.log(respon.error.details);
//                         } else {
//                     const salt = await crypt.genSalt(10);
//                     User.passWord = await crypt.hash(passWord, salt); //check here later for hash

//                     // await user.save();
//                  await  db.getDB().collection(collection).insertOne(User, (err) => {
//                                             if (err) {
//                                             console.log(err);
//                                         }else{
//                                             // res.json(data);
//                                             let userFirstname = User.FirstName;                                
//                                             res.render('regSuccess', {Data: userFirstname});
//                                             console.log(User);                                                                                    
//                                         }
//                                         console.log('Validated Data');   
                                   
//                                         // return User; 
//                                     });                                                                      
//                                 }                                
//                             }
                    
//                 } // Try Block ends here
//                 catch (err) {
//                     console.log(err.message);
//                     res.status(500).send('Error in Saving!');
//                 }
//             }//End of Async function block
//     )//Router.post ends here

// //User Registration Code 2 ends here

router.post('/customers', async (req, res) => {
               
                const LastName = req.body.LastName;
                const FirstName = req.body.FirstName; 
                const eMail = req.body.eMail; 
                const password = req.body.passWord;
                const phone = req.body.phone;
                const country = req.body.country;
                const state = req.body.state;
                const street = req.body.street;
                const dob = req.body.dob;
                
                try {
                    let user = await Customer.findOne({
                        'email': eMail,
                    });

                    if(user != null) {                        
                        
                        return res.render('userExists');
                       
                    } else {

                    let User = {
                        "last_name": LastName,
                        "first_name": FirstName,
                        "email": eMail,
                        "phone_no": phone,
                        "country": country,
                        "state": state,
                        "street_add": street,
                        "date_of_birth": new Date(dob),
                        "password": password
                    };
                    // const uSer = req.body;
                    let respon = validateUser(User);

                        if(respon.error) {
                            console.log(respon.error.details);
                        } else {
                    const salt = await crypt.genSalt(10);
                    User.password = await crypt.hash(password, salt); //check here later for hash

                    // await user.save();
                            const customer = await new Customer(User);
                                customer.save().then((data) => console.log(data)).
                                catch((err) => console.log(err));

                                        
                                            // res.json(data);
                                            let userFirstname = User.first_name;                                
                                            res.render('regSuccess', {Data: userFirstname});
                                            console.log(User);                                                                                    
                                        }
                                        console.log('Validated Data');   
                                   
                                        // return User; 
                                                                              
                                }                                
                            }
                    
    
                catch (err) {
                    console.log(err.message);
                    res.status(500).send('Error in Saving!');
                }
            }//End of Async function block
    )//Router.post ends here

//User Registration Code 2 ends here

//User Login Code Starts here

router.post('/login', 
    [
        check('email', 'Please Enter a Valid E-mail').isEmail(),
        check('password', 'Please Enter a Valid Password').isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = check(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        } // End of Conditional 
        const email = req.body.email;
        const password = req.body.password;
        let user = null;
        try {
            user = await Customer.find({
                'email': email,
            });

            if(user.length == 0) {
                return res.render('userNotexist');
            }                  
            const isMatch = await crypt.compare(password, user[0].password);

            if(isMatch == false) {
                return res.render('wrongPass');
            } else {
           req.session.user = user;
            const payload = {
                user: {
                    id: user._id
                }
            };
            jwt.sign(payload, 
                "randomString",
                {
                    expiresIn: period
                },
                (err, token) => {
                    if(err) throw err;
                    let userFirstname = user[0].first_name + " " + user[0].last_name; 

                res.render('index', {Data: userFirstname, Token: token});                                     
                   
                });                 
            }
        } //End of try Block
        catch(e) {
            console.error(e);
            res.status(500).json({
                message: 'Server Error!'
            });
        }
    } //End of async Block
); // End of router.post

//User Login Code ends here

// router.get('/Login', (req, res) => {
//     session = req.session;
//     if(session.userid) {
//         res.sendFile('/Login_Interface.html');
//     }
// });

// router.post('/Login', (req, res) => {
//     if (req.body.eMail == myUserName && req.body.passWord == myPassWord) {
//         session = req.session;
//         session.userid = req.body.eMail;
//         console.log(req.session);
//         res.sendFile('/Login_Interface.html');
//     }
// });

// router.use(bodyParser.urlencoded({ extended: true }));

// router.use(bodyParser.json());

router.get('/about', (req, res) => {
    // res.send('<h1>This is the About Page</h1>');
    res.render('index', {Data:"Isenewo"});
});

router.post('/chat', (req, res) => {
    var msg = req.body;
        res.json(msg);   
});

//User Registration Code 1 Starts here

// router.post('/Online_Users', (req, res) => {
//     let User = req.body;

//     let respon = validateUser(User);

//     if(respon.error) {
//         console.log(respon.error.details);
//     } else {
//                db.getDB().collection(collection).insertOne(User, (err, data) => {
//                     if (err) {
//                     console.log(err);
//                 }else{
//                     res.json(data);
//                     console.log(User);
//                 }
//             });
           
//                 console.log('Validated Data');
//         }
//     });

    //User Registration Code 1 ends here

//Password reset code block

router.get('/reset', (req, res) => {
    res.render('reset');
});

router.post('/resmail', async (req, res) => {
    let resmail = await req.body.resetEmail;
    let userFound = await Customer.findOne({
        'email': resmail
    });

    let resetCode = uuid();

    if (resmail == '' ) return res.send('<h1>Please, enter an E-mail Address</h1>');

    if (userFound !== null) {
        res.send(`<h1>A reset code has been sent to your provided E-Mail Address</h1>`);
    } else {
        res.send('<h1>You are not registered yet!<h1>');
    }

});
//Password reset code block ends

router.get('/admin', (req, res) => {
    res.render('admin');
});

router.post('/product-update', async (req, res) => {
    let doc = await Product.find();
    let sn = []; let prod_id = []; let prod_name = []; let prod_price = [];
    let stock_qty = [];
    for (let i = 0; i <doc.length; i++) {
        sn.push(i+1); prod_id.push(doc[i].prod_id); prod_name.push(doc[i].prod_name);
        prod_price.push(doc[i].prod_price); stock_qty.push(doc[i].stock_qty);
    }
    let password = req.body.adminpass;
    if (password == "11jan2001") {
        res.render('prodUpdate', {sn:sn, prod_id:prod_id, prod_name:prod_name, 
                    prod_price:prod_price, stock_qty:stock_qty});
    } else {
        res.send('<h1>Your password was wrong</h1>');
    }
});

router.post('/add-new-product', async (req, res) => {
    let newProd = req.body;
    
    let doc = await Product.find({"prod_name": newProd.prod_name});
    
    if (doc.length == 0) {
        let product = new Product(newProd);
        product.save().then((result) => res.send(result))
        .catch((err) => res.send(err));  
        console.log("Product Added!")      
    } else {
        res.send('Product Already Exists!');
    }

});

router.post('/update-product', async (req, res) => {
    let oneProd = req.body;
    let doc = await Product.find({"prod_name": oneProd.prod_name});
    if (doc.length == 1 ) {
       Product.findOneAndUpdate({"prod_name": oneProd.prod_name}, oneProd).
       then((result) =>console.log('Product Updated!')).
       catch((err) => console.log(err));
    } else {
        console.log('Product does not exist!');
    }
});

router.delete('/delete-product', async (req, res) => {
    let oneProd = req.body;
    let doc = await Product.find({"prod_name": oneProd.prod_name});
    if (doc.length == 1 ) {
       Product.deleteOne({"prod_name": oneProd.prod_name}).
       then((result) =>console.log('Product Deleted!')).
       catch((err) => console.log(err));
    } else {
        console.log('Product does not exist!');
    }
});

router.get('/customer', async (req, res) => {
   const data = await db.getDB().collection("Online_Users").findOne({"LastName":"Nwosu"});
   res.json(data);
});

router.get('/temphome', async (req, res) => {
    let doc = await Product.find();
    res.send(doc);
    // res.render('temphome');
});

router.get('/carttable', (req, res) => {
    res.render('carttable');
}); 

router.get('/order', (req, res) => {
    let order = new Order({
        customer: "Isenewo Oluwaseyi",
        customer_add: "No. 15 Omala Road, Gonin Gora Kaduna Nigeria",
        customer_phone: "08020873072",
        customer_email: "isenewoephr2012@gmail.com",
        cart_items: ['{"ProdName":"Network_Switch","Qty":5,"UnitPrice":3…,"totPri":165000,"cartStatus":"Remove from Cart"}', '{"ProdName":"cctv_cam","Qty":7,"UnitPrice":30000,"totPri":210000,"cartStatus":"Remove from Cart"}', '{"ProdName":"Router","Qty":5,"UnitPrice":35000,"totPri":175000,"cartStatus":"Remove from Cart"}', '{"ProdName":"PC_Desk","Qty":4,"UnitPrice":27000,"totPri":108000,"cartStatus":"Remove from Cart"}', '{"ProdName":"Kyocera","Qty":4,"UnitPrice":230000,"totPri":920000,"cartStatus":"Remove from Cart"}', '{"ProdName":"iMac","Qty":5,"UnitPrice":1900000,"totPri":9500000,"cartStatus":"Remove from Cart"}', '{"ProdName":"Mac_Book","Qty":3,"UnitPrice":950000,"totPri":2850000,"cartStatus":"Remove from Cart"}', '{"ProdName":"Xiaomi","Qty":4,"UnitPrice":650000,"totPri":2600000,"cartStatus":"Remove from Cart"}'],
        total_amt: "7500000"
    });

    order.save().then((data)=> res.send(data))
    .catch((err) => console.log(err));
});

//  const sess = async () => { const Sess = await db.getDB().collection(collection).findOne({
//             "email": "isenewoephr2012@gmail.com"
//                         });
//                         console.log(Sess);
//                     }

//                     sess();

// console.log(session.user);
    

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'DXL_Home_Page.html'));
});

router.use(express.static(path.join(__dirname, 'public')));


module.exports = router;