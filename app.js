const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 9000;

// database connection 
mongoose.connect('mongodb://localhost:27017/CrudApp',

)
    .then(() => {
        console.log('connected to database...');
    })
    .catch(() => {
        console.log('error connecting to database');
    })

// routes for all
app.use(express.json());
const alienRoutes = require('./routers/aliens');
app.use('/alien', alienRoutes);


app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});