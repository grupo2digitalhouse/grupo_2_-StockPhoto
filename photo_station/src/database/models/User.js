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
        image: {
            type: dataTypes.STRING,
        },
        birthdate:{
            type:dataTypes.DATE
        },
        id_country:{
            type:dataTypes.STRING
        },
        website:{
            type:dataTypes.STRING
        },
        password:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        admin:{
            type:dataTypes.INTEGER,
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