module.exports =(sequelize,DataTypes)=>{
    const Movies= sequelize.define("movies",{

        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        image_url:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        movie_url:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        descrip:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Genre:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        movie_url:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Actor:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Director:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Writer:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Release:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Duration:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Quality:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Rating:{
            type:DataTypes.DOUBLE,
            allowNull:false,
        }
    });
    return  Movies;
}