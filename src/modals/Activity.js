const { Model, DataTypes } = require('sequelize');

class Activity extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
        }, {sequelize})
    }
}
module.exports = Activity