
module.exports = (sequelize, dataTypes) =>{
    const Product = sequelize.define('Product',{
        id:{
            type: dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },

        name:{
            type: dataTypes.STRING,
            allowNull: false
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
            allowNull: false
        },
    },
    {
        tableName: 'product',
        timestamps: false
    });

    Product.associate = (models) => {
        Product.belongsToMany(models.User, {
            as: 'user',
            through: 'userxproduct',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false
        })

        Product.belongsToMany(models.Category,{
            as: 'category',
            through: 'productxcategory',
            foreignKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false,
        })


    };

    return Product;
}
