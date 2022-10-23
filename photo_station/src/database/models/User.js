module.exports=(sequelize, dataTypes)=>{
    
    const alias = "User"; 
    const cols =  { 
        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true
        },
        username:{
            type:dataTypes.STRING,
            allowNull: false,
           // unique: true
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
            //unique: true
        },
        image: {
            type: dataTypes.STRING,
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
        password:{
            type:dataTypes.STRING,
            //allowNull: false,
        },

    };
    const config = {
        tableName: 'User',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config)

    return User
}