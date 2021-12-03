const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');
const cors = require('cors')

require('./database')

const app = express();

app.use(express.json());

app.use(morgan('combined'));

app.use(cors())

app.use(routes);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Rodando n porta 5000 \\O/.")
})