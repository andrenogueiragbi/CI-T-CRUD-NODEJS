'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'activities',
      'status',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    );

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'activities',
      'status',
      {
        type: Sequelize.INTEGER,

      }
    );
  }
};
