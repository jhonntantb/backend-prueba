const {DataTypes} =require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define("productfeature",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        feature_name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        feature_description:{
            type:DataTypes.STRING
        },
    });
} 