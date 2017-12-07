module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      classMethods: {
        associate(models) {
          Item.belongsTo(models.ShoppingList, {
            foreignKey: 'shopping_list_id',
            allowNull: false,
            onDelete: 'CASCADE',
          });
        },
      },
    },
  );
  return Item;
};
