module.exports = (sequelize, DataTypes) => {
  const ShoppingList = sequelize.define('ShoppingList', {
    name: DataTypes.STRING,
  });

  ShoppingList.associate = function (models) {
    ShoppingList.hasMany(models.Item, {
      as: 'items',
      foreignKey: 'shoppingListId',
    });
  };
  return ShoppingList;
};
