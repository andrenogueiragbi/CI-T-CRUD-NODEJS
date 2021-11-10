const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

require('./database')

const app = express();

app.use(express.json());

app.use(morgan('combined'));

app.use(routes);
app.listen(process.env.PORT || 5000, () =>{
    console.log("Rodando n porta 5000 \\O/.")
})