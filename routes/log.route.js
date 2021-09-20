const express = require("express");
const router = express.Router();
const Logs = require("../model/log.model");

router.post("/addLog", async (req, res) => {
    try {
        const {message, fixed, technician} = req.body;
        let newLog = new Logs({message, fixed, technician});
        await newLog.save();
        res.json({message: "Log Added Successfully"});
    } catch (error) {
        console.log(`${error} from addLog`);
        res.json({message: "Server Error"});
    }
});

router.get("/allLogs", async (req, res) => {
    try {
        let logs = await Logs.find();
        res.json(logs);
    } catch (error) {
        console.log(`${error} from getLogs`);
        res.json({message: "Server Error"});
    }
});

router.put("/updateLog/:id", async (req, res) => {
    try {
        const log = await Logs.findById(req.params.id);
        const {message, fixed, technician} = req.body;
        log.message = message;
        log.fixed = fixed;
        log.technician = technician;
        await log.save();
        res.json({message: "Log Updated Successfully"});  
    } catch (error) {
        console.log(`${error} from updateLogs`);
        res.json({message: "Server Error"});
    }
});

router.delete("/deleteLog/:id", async (req, res) => {
    try {
        let logs = await Logs.findById(req.params.id);
        if(!logs) {
            return res.json({message: "No Log Found"});
        }
        await logs.remove();
        res.json({message: "Log Removed Successfully"});
    } catch (error) {
        console.log(`${error} from deleteLog`);
        res.json({message: "Server Error"});
    }
});

module.exports = router;