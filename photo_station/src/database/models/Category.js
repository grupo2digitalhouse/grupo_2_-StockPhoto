module.exports=(sequelize, dataTypes)=>{
    
        const alias = "Category"; 
        const cols =  { 
        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true
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
      

   /* Category.associate = (models) => {
        Category.hasMany(models.Product,{
            as: 'relproduct',
           // through: 'productxcategory', //mediante que tabla intermedia??
            foreignKey: 'category_id',
           // otherKey: 'product_id',
            timestamps: false,
        })
    };*/
    return Category
}