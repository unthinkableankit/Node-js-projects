
// const { sum, subtract, multiply, divide } = require('./helper');
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('hello world form node js updated')
// })

// server.listen(8000);
// let total1 = sum(10, 20);

// let total2 = subtract(10, 20);
// let total3 = multiply(10, 20);
// let total4 = divide(10, 20);
// console.log(total1, total2, total3, total4); 

// ---------------------------------file system -----------------------------------------------------------------------

// const fs = require('fs');
// const { Server } = require('http')

// const filename = 'target.txt';

// fs.watch(filename, () => {
//     console.log('file was changed');
// })

// fs.readFileSync(filename, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// });

// let data = fs.readFileSync(filename);
// console.log(data.toString());




//-----------------------------functional approach ----------------

// const errorhandler = err => console.log(err);

// const dataHandler = data => console.log(data);

// fs.readFile(filename, (err, data) => {
//     if (err) errorhandler(err);
//     dataHandler(data.toString());
// });

// console.log('Node Js async proramming');

//---------------------------------creating server with express ----------------------------


const express = require('express')
const mongoose = require('mongoose');
const router = require('./routes/post');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const app = express();

const dotenv = require('dotenv');
dotenv.config()

// db connection
mongoose.connect('mongodb://localhost:27017/nodeApi',
    {
        useNewUrlParser: true,
    }
)
    .then(() => {
        console.log('connected to Mongodb');
    })
    .catch(() => {
        console.log('error connecting to Mongodb');
    })


// creating own middleware
const middlleware = (req, res, next) => {
    console.log('Middleware is applied');
    next();
}

//middleware 
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(expressValidator());
app.use('/', middlleware, router);
// app.use(middlleware);




const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Express server listening on 8080');
})


