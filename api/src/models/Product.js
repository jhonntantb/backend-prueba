const {DataTypes} =require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define("product",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING
        },
        resume:{
            type:DataTypes.STRING
        },
        detail:{
            type: DataTypes.TEXT
        },
        price:{
            tyep: DataTypes.FLOAT
        },
    });
} 