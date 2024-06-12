module.exports =(sequelize,DataTypes)=>{
    const Users= sequelize.define("users",{
        fullname:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });
    return  Users;
}