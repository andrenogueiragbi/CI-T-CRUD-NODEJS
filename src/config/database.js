module.exports = {
    dialect: 'sqlite', 
    storage: './DB_SERVER.SQL',
    define:{
        timestamps: true,
        underscored: true,
    },
    logging: false,
};
