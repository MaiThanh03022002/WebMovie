const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const router=express.Router();
const {movies} = require("../models")

router.get("/",async (req,res)=>{
    const listofmovie= await movies.findAll();
    res.json(listofmovie);
});
router.get("/byId/:id",async (req,res)=>{
    const id= req.params.id;
    const movie= await movies.findByPk(id);
    res.json(movie);
});

router.post("/",async(req,res)=>{
    const movie= req.body;
    await movies.create(movie);
    res.json(movie);
});
module.exports  = router;