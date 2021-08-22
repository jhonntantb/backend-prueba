const sgMail = require('@sendgrid/mail');
const router = require('express').Router();
const {User, Order} = require("../db");
const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

router.post('/user' , (req, res) =>{

    const {email, id}=req.body;

        const html = `<div>
          <h1>Estimado Usuario:</h1>
          <p>haga click en el siguiente enlace para continuar con la creacion de su cuenta</p>
          <br/>
          <a href=${`http://localhost:3000/AccountConfirmation?email=${email}&id=${id}`}> >>ENLACE<< </a>
          <p> ¡¡¡Muchas Gracias!!! </p>
        </div>`
    
        const msg = {
          to: email, // Change to your recipient
          from: 'jerexand@gmail.com', // Change to your verified sender
          subject: 'Comprobacion de Email',
          text: 'Comprobacion de Email para la creacion de su cuenta',
          html
        };

        
    
    sgMail
    .send(msg)
    .then(() => {
      
      console.log("Comprobacion de Email enviada")
      return  res.send(`Mensaje enviado a  ${email}`)
    })
    .catch((error) => {
        
        console.log("ERROR AL ENVIAR EL MENSAJE: " , error)
        return res.status(407).send("ERROR AL ENVIAR EL MENSAJE: ")
    })

   
} )

router.post("/order" , async (req, res , next) => {
    const {userId, orderId} = req.body

    let html = ''
    let msg = {}

    try {
      var userOk = await User.findByPk(userId)
      var orderOk = await Order.findByPk(orderId)
    } catch (err) {
      console.log("ocurrio un error buscando usuario y orden")
    }

   




      if(orderOk.status === "approved") {

        html = `<div>
        <h1>Estimado Usuario:</h1>
        <p>Su pedido ha sido registrado con éxito.</p>
        <br/>
        <p>Puede monitorear el estado de su pedido desde Mi Cuenta - Compras , dentro de nuestra web</p>
        <br/>
        <a href=http://localhost:3000/> >>>>ENLACE<<<< </a>
        <br/>
        <p> ¡¡¡Muchas Gracias!!! </p>
        <br/>
        <p>Araceli Merceria</p>
      </div>`

        msg = {
        to: userOk.email, // Change to your recipient
        from: 'jerexand@gmail.com', // Change to your verified sender
        subject: 'Su pedido ha sido registrado',
        text: 'Confirmacion de pedido registrado',
        html
      };

        sgMail
        .send(msg)
        .then(() => {
          
          console.log("mensaje de orden aprobada enviado")
          return  res.send(`Mensaje enviado a  ${userOk.email}`)
        })
        .catch((error) => {
            
            console.log("ERROR AL ENVIAR EL MENSAJE: " , error)
            return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LA ORDEN: ")
        })

    }




})

module.exports = router;