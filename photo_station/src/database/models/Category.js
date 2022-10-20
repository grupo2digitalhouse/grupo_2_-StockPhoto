module.exports=(sequelize, dataTypes)=>{
    
        const alias = "Category"; 
        const cols =  { 
        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },
        category_name:{
            type:dataTypes.STRING,
            allowNull: false,
        },

    };
    const config = {
        tableName: 'category',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
       
        Category.belongsToMany(models.Product,{
            as: 'product',
            through: 'productxcategory',
            foreignKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };
    return Category;
}