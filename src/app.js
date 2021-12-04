
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require("express");
const cors = require('cors')


//app.use(cors())


class AppController {
    constructor() {
        this.express = express();
        this.express.use(express.json());
        this.express.use(cors())
        this.routes();
    }



    routes() {
        this.express.use(require("./routes"));
    }
}

module.exports = new AppController().express;