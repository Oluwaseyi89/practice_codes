const express = require('express');
const mysql = require('mysql');
const mysql2 = require('mysql2');
const router2 = express.Router();
var exphbs = require('express-handlebars');
// router.engine('hbs', exphbs({defaultLayout: 'login', layoutsDir: 'views/', extname: '.hbs'}));
// router.set('view engine', 'hbs');
// const conRedis = require('connect-redis');
// const cookieParser = require('cookie-parser');
// const csurf = require('csurf');
// const cookieSession = require('cookie-session');
const path = require('path');
// const bodyParser = require('body-parser');
var collection = 'Online_Users';
// var php = require ('node-php');
// var schema = require ('./Dxl_DataModel');
// const Joi = require('joi');
var validateUser = require ('./Dxl_DataModel');
// const cookieParser = require('cookie-parser');

//Middleware for Validation and Authentication Starts

const { check, validator }  = require('express-validator');
// const check = require('check');
var crypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 



const { Sequelize } = require ('sequelize');

const sequelize = new Sequelize('DXL_Online', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// try { sequelize.authenticate();
//         console.log('sequelize connected');
//     } catch (error) {
//         console.error('sequelize unable to connect', error);
//     }

// const seq = db.findOne({where: {FirstName: "Oluwaseyi"}});
// console.log(seq);
// check();

//Middleware for Validation and Authentication Ends

var period = 10 * 60 * 1000;
var uuid = require('uuid').v4;

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DXL_Online'
});

var connection = (err) => {
    db.connect();
    if (!err) console.log('Successfully Connected to MySQL');
    else console.log('Error Connecting to MySQL');
}

// try {
//     db.connect()
//     console.log("connected")
// } catch (err) {
//     console.log(err)
// }

connection();





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

router2.use(express.json());

router2.use(express.urlencoded({ extended: false }));

//User Registration Code 2 Starts here

router2.post('/Online_Users',  async (req, res) => {
        var LastName = req.body.LastName;
        var FirstName = req.body.FirstName; 
        var eMail = req.body.eMail; 
        var passWord = req.body.passWord;
        
        try {
            let sql = `SELECT * FROM Online_Users WHERE eMail = '${eMail}'`;

            
           let user = async () => { db.query(sql, async (err, result) => { 
                           if (err) throw err;
                           if (0 < result.length){
                           res.render('userExists');
                       } else {                                           
                                let User = {                        
                                    'FirstName': FirstName,
                                    'LastName': LastName,
                                    'eMail': eMail,
                                    'passWord': passWord,
                                };
            
                        let respon = validateUser(User);

                            if(respon.error) {
                                console.log(respon.error.details);
                            } else {
                        const salt = await crypt.genSalt(10);
                        hpassWord = await crypt.hash(passWord, salt); //check here later for hash

                        // await user.save();
                        let upDate = `INSERT INTO Online_Users VALUE ('${uuid}', '${FirstName}', '${LastName}', '${eMail}', '${hpassWord}')`;
                        await  db.query(upDate, (err, result) => {
                                                if (err) {
                                                console.log(err);
                                            }else{
                                                // res.json(data);
                                                    console.log(User);
                                                let userFirstname = FirstName;                                
                                                res.render('regSuccess', {Data: userFirstname});
                                                                                                                                    
                                            }
                                            console.log('Validated Data'); 
                                        });                                                                      
                                    }  
                            }                          
                                
                                });   
           }
           user();         
            
        } // Try Block ends here
        catch (err) {
            console.log(err.message);
            res.status(500).send('Error in Saving!');
        }
    }//End of Async function block
)//Router.post ends here

//User Registration Code 2 ends here

//User Login Code Starts here

router2.post("/login", async (req, res) => {  
        try {         
            var email = req.body.email;
            var password = req.body.password;     
            let sql = `SELECT * FROM Online_Users WHERE eMail = '${email}'`;
            let user =  () => { db.query(sql,  (err, result, fields) => { 
                        //    if (err) throw err;                          
                           if (result.length == 0){
                            return res.render('userNotexist');
                       } else {
                           let userFirstname = result[0].FirstName + " " + result[0].LastName; 
                            let isMatch = () => crypt.compare(password, result[0].passWord, (err, success) => {
                            if (err) throw err;
                            if (success)  return res.render('index', {Data: userFirstname});
                            else return res.render('wrongPass');
                        });
                         isMatch();         
                            }
                    });
            }  
            user();         
        } //End of try Block
        catch (err) {
            console.error(e);
            res.status(500).json({
                message: 'Server Error!'
            })
        }
    } //End of async Block
); // End of router.post



router2.get('/about', (req, res) => {
    // res.send('<h1>This is the About Page</h1>');
    res.render('index', {Data:"Isenewo"});
});

router2.post('/chat', (req, res) => {
    var msg = req.body;
        res.json(msg);   
});

router2.get('/customers', async (req, res) => {
    const sql = 'SELECT * from Online_Users';

    const pross = await db.query(sql, (err, result) => {
        res.send(result);
    });
 });



router2.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public', 'DXL_Home_Page.html'));
});

router2.use(express.static(path.join(__dirname, 'public')));


module.exports = router2;