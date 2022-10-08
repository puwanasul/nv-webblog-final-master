module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
      nameitem: DataTypes.STRING,
      priceitem: DataTypes.STRING
      
      
      
    })
    return Item
}