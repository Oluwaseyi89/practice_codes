// const router = require ('./Dxl_Router');
// const connect = require('./Dxl_db');
// const express = require ('express');
// const bodyParser = require ('body-parser');
// const mongoose = require ('mongoose');
// const bodyParser = require('body-parser');
// const app = express();

const express = require ('express');

const bodyParser = require ('body-parser');

const path = require ('path');

const db = require ('./Dxl_db');

const collection = "Online_Users";

const cors = require("cors");

// require("dotenv").config({ path: "./config.env" });
require("dotenv").config();

const corsOption = { origin: "http://localhost:3000" };

const app = express();

app.use(cors({origin: true}));

app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main', 
layoutsDir: 'views/layouts', extname: '.handlebars'}));
app.set('view engine', 'handlebars');

const router = require ('./Dxl_Router');

// const router2 = require ('./Dxl_SqlRouter');

app.use(bodyParser.json());

app.use(router);
// app.use(router2);

db.connect((err) => {
    if (err) {
        console.log('Unable to Connect to Database!');
        process.exit(1);
    } else {
        console.log('Successfully Connected to MongoDB!');
    }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));