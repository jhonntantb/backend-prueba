const { Router} = require('express');
const {Office,Schedule}=require('../db')
const { Op } = require('sequelize');
const router = Router();

router.get("/",(_req,res,next)=>{
    //incluido el calendario
    return Office.findAll({include:{model:Schedule}}).then(response=>res.send(response)).catch(err=>next(err))
});
router.post("/",async(req,res,next)=>{
    const newOffice=req.body
    try {
        const [office,created]=await Office.findOrCreate({
            where:{address:newOffice.address},
            defaults:{name:newOffice.name,
                address:newOffice.address,
                phone:newOffice.phone
            }   
        })
        res.send(office)
        console.log(office.dataValues.id)
        console.log(created)
    } catch (error) {
        next(error)
    }
    
//setear el schedule
    //en response.dataValues se encuentra la info de la officina recien creada
    //console.log(newOffice.office.dataValues)//nombre oficina 
    //const schedule=Schedule.create({})
    

})

module.exports = router;