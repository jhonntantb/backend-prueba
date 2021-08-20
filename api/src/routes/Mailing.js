const sgMail = require('@sendgrid/mail');
const router = require('express').Router();
const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

router.post('/user' , (req, res) =>{

    const {email, id}=req.body;

        const html = `<div>
          <h1>Estimado Usuario:</h1>
          <p>haga click en el siguiente enlace para continuar con la creaciond e su cuenta</p>
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

module.exports = router;