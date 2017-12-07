module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      shoppingListId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ShoppingList',
          key: 'id',
        },
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Items'),
};
