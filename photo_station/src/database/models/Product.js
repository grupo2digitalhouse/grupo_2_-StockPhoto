
module.exports = (sequelize, dataTypes) =>{
      const alias = "Product"; 
      const cols =  { 
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },

        image: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        
        description: {
            type: dataTypes.STRING
        },

        price:{
            type: dataTypes.DECIMAL,
            allowNull: false,
        }
    };
    const config = {
        tableName: 'product',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)

    /*Product.associate = (models) => {
        Product.belongsToMany(models.Category,{
            as: 'relcategory',
            through: 'productxcategory', //mediante que tabla intermedia
            foreignKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };*/

    return Product;
}
