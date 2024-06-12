const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const router=express.Router();
const bcrypt = require("bcrypt")
const {users} = require("../models")
router.get("/",async (req,res)=>{
    const listofuser= await users.findAll();
    res.json(listofuser);
});
router.get("/byId/:id",async (req,res)=>{
  const id= req.params.id;
  const user= await users.findByPk(id);
  res.json(user);
});
router.post("/",async(req,res)=>{
    const {fullname,email,password}= req.body;
    bcrypt.hash(password,10).then((hash)=>{
        users.create({
            fullname:fullname,
            email:email,
            password:hash,
        })
    })
    res.json("sesh");
});
router.delete("/:userId", async (req, res) => {
    const postId = req.params.postId;
    await Posts.destroy({
      where: {
        id: postId,
      },
    });
    res.json("DELETED SUCCESSFULLY");
  });
router.post("/login", async (req, res) => {
    const { fullname,email, password } = req.body;
  
    const user = await users.findOne({ where: { email:email } });
  
    if (!user) res.json("sai email");
  
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.json("sai mk");
  
      res.json({ fullname: user.fullname });
    });
  });
module.exports  = router;