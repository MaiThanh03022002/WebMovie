const express = require('express');
const app=express();
const db= require("./models");
const cors = require('cors');
app.use(express.json());
app.use(cors());

const userRouter= require("./Routes/User");
app.use("/user",userRouter);

const movieRouter= require("./Routes/Movie");
app.use("/movie",movieRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("3001 strat");
    });
});
