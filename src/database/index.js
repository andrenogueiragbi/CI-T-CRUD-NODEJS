const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Activity = require('../modals/Activity')
const connection = new Sequelize(dbConfig);

/*try{
    connection.authenticate();
    console.log('Connection has been established successfully');
} catch (error){
    console.error('Unable to connect to the database', error);
}*/

Activity.init(connection);


module.exports = connection;