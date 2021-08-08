const router = require('express').Router();
const {Office,Schedule}=require('../db')

router.get("/", async (req,res,next)=>{
    try {
        const schedule=await Schedule.findAll()
        res.send(schedule);
    } catch (error) {
        next(error)
    }
})
router.post("/",async (req,res,next)=>{
    try {
        const schedule=await Schedule.create({
            date:req.body.schedule,
        })
        res.send(schedule);
        //await Schedule.setOffices(req.body.officeId)
    } catch (error) {
        next(error);
    }
})
module.exports = router;