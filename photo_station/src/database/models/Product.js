
module.exports = (sequelize, dataTypes) =>{
    const Product = sequelize.define("Product",{
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
        },
    },
    {
        tableName: 'product',
        timestamps: false
    });

    Product.associate = (models) => {
       /* Movie.belongsTo(models.Genre, {
            as: 'genre',
            foreignKey: 'genre_id'
        });**/

        Product.belongsToMany(models.Category,{
            as: 'relcategory',
            through: 'productxcategory', //mediante que tabla intermedia??
            foreignKey: 'category_table',
            otherKey: 'category_id',
            timestamps: false,
        })
    };

    return Product;
}
