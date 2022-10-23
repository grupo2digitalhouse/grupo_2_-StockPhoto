module.exports=(sequelize, dataTypes)=>{
    
    const alias = "User"; 
    const cols =  { 
        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true,
            allowNull: false
        },
        username:{
            type:dataTypes.STRING,
            allowNull: false,
            unique: true
        },

        first_name:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        
        last_name:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        birthdate:{
            type:dataTypes.DATE
        },
        id_country:{
            type:dataTypes.INTEGER
        },
        website:{
            type:dataTypes.STRING
        },

    };
    const config = {
        tableName: 'user',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)
    
    User.associate = (models) => {
        User.belongsToMany(models.Product, {
            as: 'product',
            through: 'userxproduct',
            foreignKey: 'user_id',
            otherKey: 'product_id',
            timestamps: false
        })
    };

    return User
}