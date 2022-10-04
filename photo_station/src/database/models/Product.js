
module.exports = (sequelize, dataTypes) =>{
      const alias = "Product"; 
      const cols =  { 
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING
        },

        description: {
            type: dataTypes.STRING
        },

        category_id: {
            type: dataTypes.INTEGER
        },

        owner_id: {
            type: dataTypes.INTEGER
        },

        price:{
            type: dataTypes.DECIMAL
        }
    };
    const config = {
        tableName: 'product',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsToMany(models.Category,{
            as: 'relcategory',
            through: 'productxcategory', //mediante que tabla intermedia??
            foreignKey: 'category_id',
            otherKey: 'category_table',
            timestamps: false,
        })
    };

    return Product;
}
