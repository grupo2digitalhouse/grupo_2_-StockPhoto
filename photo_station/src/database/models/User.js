module.exports=(sequelize, dataTypes)=>{

    const User = sequelize.define('User',{

        id:{
            type:dataTypes.INTEGER,
            autoIncrement : true,
            primaryKey: true
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
            type:dataTypes.EMAIL,
            allowNull: false,
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

    },
        {
            tableName:  'user',
            timestamps : false
         }
    );

   
    return User
}