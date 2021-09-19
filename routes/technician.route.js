const express = require("express");
const router = express.Router();
const User = require("../model/technician.model");

router.post("/addTechnician", async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body;
        let newUser = await User.findOne({email});
        if(newUser) {
            return res.json({message: "Technician Already Present with this Email"});
        }
        newUser = new User({firstName, lastName, email});
        await newUser.save();
        res.json({message: "Technician Added Successfully"});
    } catch (error) {
        console.error(error);
        res.json({message: "Server Error"});
    }
});

router.get("/allTechnicians", async (req, res) => {
    try {
        let technicians = await User.find();
        res.json(technicians);
    } catch (error) {
        console.log(error);
        res.json({message: "Server Error"});   
    }
});

router.delete("/deleteTechnician/:id", async (req, res) => {
    try {
        let technician = await User.findById(req.params.id);
        if(!technician) {
            return res.json({message: "No Technician Found"});
        }
        await technician.remove();
        res.json({message: "Technician Removed Successfully"});
    } catch (error) {
        console.log(error);
        res.json({message: "Server Error"});   
    }
});

module.exports = router;