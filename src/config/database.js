/*
##TO SQLITE##
module.exports = {
    dialect: 'sqlite', 
    storage: './DB_SERVER.SQL',
    define:{
        timestamps: true,
        underscored: true,
    },
    logging: false,
};*/

/*TO POSTGRES*/
module.exports = {
    dialect: 'postgres',
    database: 'dcao2805e30p8v',
    username: 'fpaebpfotautnv',
    password: '25c5d43384e29274446679c33d11301834ba4538505d7ae9c4eaec5871f05976',
    host: 'ec2-184-73-198-174.compute-1.amazonaws.com',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: false,
};
