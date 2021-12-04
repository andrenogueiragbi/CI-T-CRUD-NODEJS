require('dotenv').config({ 
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const morgan = require('morgan');
const cors = require('cors')
const express = require('express');



const app = require("./app");

require('./database')


app.use(morgan('combined'));

app.use(cors())



app.listen(process.env.PORT || 5000, () =>{
    console.log("Rodando n porta 5000 \\O/.")
})