module.exports=(sequelize, dataTypes)=>{
    
        const alias = "Category"; 
        const cols =  { 
        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true
        },
        category_name:{
            type:dataTypes.STRING
        },

        category_product:{

            type:dataTypes.STRING

        },

    };
    const config = {
        tableName: 'category',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config)
      

    Category.associate = (models) => {
        Category.hasMany(models.Product,{
            as: 'relproduct',
           // through: 'productxcategory', //mediante que tabla intermedia??
            foreignKey: 'category_id',
           // otherKey: 'category_table',
            timestamps: false,
        })
    };
    return Category
}