const {User, Review} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");


router.get("/:id", async  (req,res,next) => {
    console.log('req.params  ' + req.params)
    var id=req.params.id
    console.log('id? ' + id)
    try {
        var user= await User.findByPk(id)
        //console.log("ESTO ES USER despues de buscar en la DB: " , user)
        if(user) {res.send(user)}
        else{throw  Error("no se encontró el usuario")}
        

    } catch (err) {next(err)}
})

// crea y envia 
router.get("/",(_req,res)=>{
    User.findAll({include: {model:Review, attributes: ['id','date','score','description']}})
    .then(User => res.status(200).json(User))
    .catch(error => res.status(400).send(error))
})


router.post("/",async (req,res,next)=>{
    //console.log(req.body)
    try {
        const [user,created]=await User.findOrCreate({
            where:{email: req.body.email},
            defaults:{
                id: req.body.id,
                user_name: req.body.user_name,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                // password: req.body.password,
                address: req.body.address,
                location: req.body.location,
                province: req.body.province,
                country: req.body.country
            }
        })
        res.send(user);
        console.log(created);
    } catch (error) {
        next(error)
    }
})
router.put("/",async (req,res,next)=>{
//entra un array
 var arr = req.body
    //reformular para trabajar con promise.all
     arr.forEach(async (c) => {
            let changes=c.changes
            let id=c.id
         try {
             await User.update(changes,{where:{id:id}}) 
         } catch (error) {
             next(error)
         }

     })

     const allUsers= await User.findAll()
    //solo el admi puede modificar su active
    return res.send(allUsers)
})
router.delete("/:id",async (req,res,next)=>{
    const id=req.params.id;
    try {
        const deleteUser=await User.destroy({where:{id:id}})
        deleteUser === 1 ?  res.status(200).send('Usuario eliminado') :  res.status(400).send('No existe usuario')
        // console.log(deleteUser)//para saber que manda
    } catch (error) {
        next(error)
    }
})



module.exports = router;
