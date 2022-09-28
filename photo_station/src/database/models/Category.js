module.exports=(sequelize, dataTypes)=>{

    const Category = sequelize.define('Category',{

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

    },
        {
            
            timestamps : false
         }
    );

    Category.associate = (models) => {
        Category.belongsToMany(models.Product,{
            as: 'relproduct',
            through: 'productxcategory', //mediante que tabla intermedia??
            foreignKey: 'category_id',
            otherKey: 'category_table',
            timestamps: false,
        })
    };
    return Category
}