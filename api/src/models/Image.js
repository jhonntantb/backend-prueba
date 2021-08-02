const {DataTypes} =require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define("product",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        url:{
            type: DataTypes.STRING

        }
    });
} 