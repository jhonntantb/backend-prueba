const sgMail = require('@sendgrid/mail');
const router = require('express').Router();
const { User, Order, Product } = require("../db");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

router.post('/user', (req, res) => {

  const { email, id } = req.body;

  // const html = `<div>
  //         <h1>Estimado Usuario:</h1>
  //         <p>haga click en el siguiente enlace para continuar con la creacion de su cuenta</p>
  //         <br/>
  //         <a href=${`http://localhost:3000/AccountConfirmation?email=${email}&id=${id}`}> >>ENLACE<< </a>
  //         <p> ¡¡¡Muchas Gracias!!! </p>
  //       </div>`

  html = `<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 620px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: arial,helvetica,sans-serif;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #932A89;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
ul ul ul ul  {
  list-style-type: disc !important;
}
ol ol {
  list-style-type: lower-roman !important;
}
ol ol ol {
  list-style-type: lower-latin !important;
}
ol ol ol ol {
  list-style-type: decimal !important;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>
  <!--user entered Head Start--><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
        <tr>
          <td valign="top" bgcolor="#f0f0f0" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="620">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                  <tr>
                                    <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tr>
  <td role="module-content">
    <p></p>
  </td>
</tr>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#ee8585;" height="100%" valign="top" bgcolor="#ee8585" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial, helvetica, sans-serif; color: #ffffff"><strong>Araceli Merceria</strong></span></div><div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#776969" data-distribution="1">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#212529;" height="100%" valign="top" bgcolor="#212529" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Confirmación de cuenta</strong></span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola!</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Estimado usuario necesitamos verificar su cuenta por favor hacer click en el siguiente enlace para continuar con la creación de su cuenta!</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
  <tbody>
    <tr>
      <td align="center" bgcolor="#FFFFFF" class="outer-td" style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
          <tbody>
            <tr>
            <td align="center" bgcolor="#EE8585" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
              <a href=${`http://localhost:3000/AccountConfirmation?email=${email}&id=${id}`} style="background-color:#EE8585; border:0px solid 0; border-color:0; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:300; letter-spacing:0px; line-height:normal; padding:15px 5px 15px 5px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">Confirmar mi cuenta</a>
            </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Gracias!</div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Araceli merceria</span></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table></td>
                                  </tr>
                                </table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>`

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
      return res.send(`Mensaje enviado a  ${email}`)
    })
    .catch((error) => {

      console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
      return res.status(407).send("ERROR AL ENVIAR EL MENSAJE: ")
    })


})

router.post("/order", async (req, res, next) => {
  const { userId, orderId } = req.body

  let html = ''
  let msg = {}

  try {
    var userOk = await User.findByPk(userId)
    var orderOk = await Order.findByPk(orderId)

    console.log("estado actual de la orden: - ", orderOk.status)
  } catch (err) {
    console.log("ocurrio un error buscando usuario y orden")
  }






  if (orderOk.status === "approved") {

    // html = `<div>
    //     <h1>Estimado Usuario:</h1>
    //     <p>Su pedido ha sido registrado con éxito.</p>
    //     <br/>
    //     <p>Puede monitorear el estado de su pedido desde Mi Cuenta - Compras , dentro de nuestra web</p>
    //     <br/>
    //     <a href=http://localhost:3000/> >>>>ENLACE<<<< </a>
    //     <br/>
    //     <p> ¡¡¡Muchas Gracias!!! </p>
    //     <br/>
    //     <p>Araceli Merceria</p>
    //   </div>`

    html = `<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 620px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: arial,helvetica,sans-serif;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #932A89;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  ul ul ul ul  {
    list-style-type: disc !important;
  }
  ol ol {
    list-style-type: lower-roman !important;
  }
  ol ol ol {
    list-style-type: lower-latin !important;
  }
  ol ol ol ol {
    list-style-type: decimal !important;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .social-icon-column {
      display: inline-block !important;
    }
  }
</style>
    <!--user entered Head Start--><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
          <tr>
            <td valign="top" bgcolor="#f0f0f0" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="620">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                    <tr>
                                      <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#ee8585;" height="100%" valign="top" bgcolor="#ee8585" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial, helvetica, sans-serif; color: #ffffff"><strong>Araceli Merceria</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#776969" data-distribution="1">
  <tbody>
    <tr role="module-content">
      <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
    <tbody>
      <tr>
        <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#212529;" height="100%" valign="top" bgcolor="#212529" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Su pedido ha sido aprobado!</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola!</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Estimado usuario le informamos que su pedido ha sido registrado con éxito, puede monitorear el estado &nbsp;de su pedido desde Mi cuenta - &nbsp;Compras, dentro de nuestra web</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
    <tbody>
      <tr>
        <td align="center" bgcolor="#FFFFFF" class="outer-td" style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#EE8585" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="http://localhost:3000/" style="background-color:#EE8585; border:0px solid 0; border-color:0; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:300; letter-spacing:0px; line-height:normal; padding:15px 5px 15px 5px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">Ver el estado de mi compra</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Gracias!</div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Araceli merceria</span></div><div></div></div></td>
    </tr>
  </tbody>
</table></td>
      </tr>
    </tbody>
  </table></td>
    </tr>
  </tbody>
</table></td>
                                    </tr>
                                  </table>
                                  <!--[if mso]>
                                </td>
                              </tr>
                            </table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>`

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
        return res.send(`Mensaje enviado a  ${userOk.email}`)
      })
      .catch((error) => {

        console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
        return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LA ORDEN: - approved")
      })
  }

  if (orderOk.status === "shipped") {

    // html = `<div>
    //   <h1>Estimado Usuario:</h1>
    //   <p>Su pedido ha sido enviado a ${orderOk.home_address} , ${orderOk.location}</p>
    //   <br/>
    //   <p>Puede monitorear el estado de su pedido desde Mi Cuenta - Compras , dentro de nuestra web</p>
    //   <br/>
    //   <a href=http://localhost:3000/> >>>>ENLACE<<<< </a>
    //   <br/>
    //   <p> ¡¡¡Muchas Gracias!!! </p>
    //   <br/>
    //   <p>Araceli Merceria</p>
    // </div>`

    html = `<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 620px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: arial,helvetica,sans-serif;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #932A89;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  ul ul ul ul  {
    list-style-type: disc !important;
  }
  ol ol {
    list-style-type: lower-roman !important;
  }
  ol ol ol {
    list-style-type: lower-latin !important;
  }
  ol ol ol ol {
    list-style-type: decimal !important;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .social-icon-column {
      display: inline-block !important;
    }
  }
</style>
    <!--user entered Head Start--><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
          <tr>
            <td valign="top" bgcolor="#f0f0f0" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="620">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                    <tr>
                                      <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#ee8585;" height="100%" valign="top" bgcolor="#ee8585" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial, helvetica, sans-serif; color: #ffffff"><strong>Araceli Merceria</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#776969" data-distribution="1">
  <tbody>
    <tr role="module-content">
      <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
    <tbody>
      <tr>
        <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#212529;" height="100%" valign="top" bgcolor="#212529" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Su pedido ha sido enviado!</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola!</span></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Estimado usuario le informamos que su pedido ha sido enviado a   ${orderOk.home_address} , ${orderOk.location}. Puede monitorear el estado de su pedido desde Mi cuenta - Compras, dentro de nuestra web</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
    <tbody>
      <tr>
        <td align="center" bgcolor="#FFFFFF" class="outer-td" style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#EE8585" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="http://localhost:3000/" style="background-color:#EE8585; border:0px solid 0; border-color:0; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:300; letter-spacing:0px; line-height:normal; padding:15px 5px 15px 5px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">Ver el estado de mi compra</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Gracias!</div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Araceli merceria</span></div><div></div></div></td>
    </tr>
  </tbody>
</table></td>
      </tr>
    </tbody>
  </table></td>
    </tr>
  </tbody>
</table></td>
                                    </tr>
                                  </table>
                                  <!--[if mso]>
                                </td>
                              </tr>
                            </table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>`

    msg = {
      to: userOk.email, // Change to your recipient
      from: 'jerexand@gmail.com', // Change to your verified sender
      subject: 'Su pedido ha sido enviado',
      text: 'Confirmacion de pedido enviado',
      html
    };

    sgMail
      .send(msg)
      .then(() => {

        console.log("mensaje de orden despachada enviado")
        return res.send(`Mensaje enviado a  ${userOk.email}`)
      })
      .catch((error) => {

        console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
        return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LA ORDEN: -shipped ")
      })
  }

  if (orderOk.status === "delivered") {

    //   html = `<div>
    //   <h1>Estimado Usuario:</h1>
    //   <p>Su pedido ha sido entregado a ${orderOk.home_address} , ${orderOk.location}</p>
    //   <br/>
    //   <p>agradeceremos que nos deje sus comentarios respecto a la experiencia de compra en nuestra web</p>
    //   <br/>
    //   <a href=http://localhost:3000/> >>>>ENLACE<<<< </a>
    //   <br/>
    //   <p> ¡¡¡Muchas Gracias!!! </p>
    //   <br/>
    //   <p>Araceli Merceria</p>
    // </div>`


    html = `<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 620px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: arial,helvetica,sans-serif;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #932A89;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
ul ul ul ul  {
  list-style-type: disc !important;
}
ol ol {
  list-style-type: lower-roman !important;
}
ol ol ol {
  list-style-type: lower-latin !important;
}
ol ol ol ol {
  list-style-type: decimal !important;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>
  <!--user entered Head Start--><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
        <tr>
          <td valign="top" bgcolor="#f0f0f0" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="620">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                  <tr>
                                    <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tr>
  <td role="module-content">
    <p></p>
  </td>
</tr>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#ee8585;" height="100%" valign="top" bgcolor="#ee8585" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial, helvetica, sans-serif; color: #ffffff"><strong>Araceli Merceria</strong></span></div><div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#776969" data-distribution="1">
<tbody>
  <tr role="module-content">
    <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
  <tbody>
    <tr>
      <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#212529;" height="100%" valign="top" bgcolor="#212529" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Su pedido ha sido entregado</strong></span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola!</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">&nbsp;Le informamos que su pedido a sido entregado a ${orderOk.home_address} , ${orderOk.location}.</span></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Agradecemos que nos deje sus comentarios respecto a la experiencia de compra en nuestra web!</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
  <tbody>
    <tr>
      <td align="center" bgcolor="#FFFFFF" class="outer-td" style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
        <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
          <tbody>
            <tr>
            <td align="center" bgcolor="#EE8585" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
              <a href="http://localhost:3000/" style="background-color:#EE8585; border:0px solid 0; border-color:0; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:300; letter-spacing:0px; line-height:normal; padding:15px 5px 15px 5px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">Dejanos un comentario</a>
            </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Gracias!</div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Araceli merceria</span></div><div></div></div></td>
  </tr>
</tbody>
</table></td>
    </tr>
  </tbody>
</table></td>
  </tr>
</tbody>
</table></td>
                                  </tr>
                                </table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>`



    msg = {
      to: userOk.email, // Change to your recipient
      from: 'jerexand@gmail.com', // Change to your verified sender
      subject: 'Su pedido ha sido entregado',
      text: 'Confirmacion de pedido entregado',
      html
    };

    sgMail
      .send(msg)
      .then(() => {

        console.log("mensaje de orden entregada enviado")
        return res.send(`Mensaje enviado a  ${userOk.email}`)
      })
      .catch((error) => {

        console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
        return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LA ORDEN: -delivered ")
      })
  }

  if (orderOk.status === "cancelled") {

    //   html = `<div>
    //   <h1>Estimado Usuario:</h1>
    //   <p>Le informamos que su orden ha sido cancelada</p>
    //   <br/>
    //   <p>Le esperamos nuevamente en nuestra web!</p>
    //   <br/>
    //   <a href=http://localhost:3000/> >>>>ENLACE<<<< </a>
    //   <br/>
    //   <p> ¡¡¡Muchas Gracias!!! </p>
    //   <br/>
    //   <p>Araceli Merceria</p>
    // </div>`

    html = `<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 620px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: arial,helvetica,sans-serif;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #932A89;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  ul ul ul ul  {
    list-style-type: disc !important;
  }
  ol ol {
    list-style-type: lower-roman !important;
  }
  ol ol ol {
    list-style-type: lower-latin !important;
  }
  ol ol ol ol {
    list-style-type: decimal !important;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .social-icon-column {
      display: inline-block !important;
    }
  }
</style>
    <!--user entered Head Start--><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#932A89" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#f0f0f0;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#f0f0f0">
          <tr>
            <td valign="top" bgcolor="#f0f0f0" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="620">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:620px;" align="center">
                                    <tr>
                                      <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#F0F0F0" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="13d36c46-b515-4bdf-ad3c-edafb5c1c151" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:20px 15px 15px 15px; line-height:26px; text-align:inherit; background-color:#ee8585;" height="100%" valign="top" bgcolor="#ee8585" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: arial, helvetica, sans-serif; color: #ffffff"><strong>Araceli Merceria</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 20px 50px 20px;" bgcolor="#776969" data-distribution="1">
  <tbody>
    <tr role="module-content">
      <td height="100%" valign="top"><table width="460" style="width:460px; border-spacing:0; border-collapse:collapse; margin:0px 50px 0px 50px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
    <tbody>
      <tr>
        <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 0px 30px 0px; line-height:36px; text-align:inherit; background-color:#212529;" height="100%" valign="top" bgcolor="#212529" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 46px; color: #ffffff; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif"><strong>Su pedido ha sido cancelado</strong></span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.2" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:50px 30px 30px 30px; line-height:28px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Hola!</span></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565">Estimado usuario le informamos que su orden ha sido cancelada, le esperamos nuevamente en nuestra web!</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div><div></div></div></td>
    </tr>
  </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="d0bf6998-834d-4cc3-b775-8e43e7fcbf90">
    <tbody>
      <tr>
        <td align="center" bgcolor="#FFFFFF" class="outer-td" style="padding:0px 0px 0px 30px; background-color:#FFFFFF;">
          <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
            <tbody>
              <tr>
              <td align="center" bgcolor="#EE8585" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                <a href="http://localhost:3000/" style="background-color:#EE8585; border:0px solid 0; border-color:0; border-radius:0px; border-width:0px; color:#ffffff; display:inline-block; font-size:16px; font-weight:300; letter-spacing:0px; line-height:normal; padding:15px 5px 15px 5px; text-align:center; text-decoration:none; border-style:solid; font-family:trebuchet ms,helvetica,sans-serif;" target="_blank">Comprar de nuevo</a>
              </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="efe5a2c4-1b11-49e7-889d-856d80b40f63.1" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:40px 100px 50px 30px; line-height:26px; text-align:inherit; background-color:#FFFFFF;" height="100%" valign="top" bgcolor="#FFFFFF" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Gracias!</div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565">Araceli merceria</span></div><div></div></div></td>
    </tr>
  </tbody>
</table></td>
      </tr>
    </tbody>
  </table></td>
    </tr>
  </tbody>
</table></td>
                                    </tr>
                                  </table>
                                  <!--[if mso]>
                                </td>
                              </tr>
                            </table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </center>
  </body>`

    msg = {
      to: userOk.email, // Change to your recipient
      from: 'jerexand@gmail.com', // Change to your verified sender
      subject: 'Su pedido ha sido Cancelado',
      text: 'Confirmacion de pedido cancelado',
      html
    };

    sgMail
      .send(msg)
      .then(() => {

        console.log("mensaje de orden cancelada enviado")
        return res.send(`Mensaje enviado a  ${userOk.email}`)
      })
      .catch((error) => {

        console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
        return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LA ORDEN: -cancelled ")
      })
  }

})

router.get("/stock/:productId", async (req, res, next) => {
  const { productId } = req.params

  const product = await Product.findByPk(productId)

  console.log("esto es product dentro de mailing low stock: ", product)

  html = `<div >
  <h1>Estimado Aministrador:</h1>
  <p>Le informamos que el producto ${product.title} , con numero de catalogo ${product.catalog_id} se encuentra con stock minimo o sin stock</p>
  <br/>
  <br/>
  <p> ¡¡¡Muchas Gracias!!! </p>
  <br/>
  <p>Araceli Merceria</p>
</div>`

  msg = {
    to: 'jerexand@gmail.com', // Change to your recipient
    from: 'jerexand@gmail.com', // Change to your verified sender
    subject: 'Aviso de Stock Bajo',
    text: 'aviso de stock bajo',
    html
  };

  sgMail
    .send(msg)
    .then(() => {

      console.log("mensaje de stock Bajo enviado")
      return res.send(`Mensaje enviado a jerexand@gmail.com `)
    })
    .catch((error) => {

      console.log("ERROR AL ENVIAR EL MENSAJE: ", error)
      return res.status(407).send("ERROR AL ENVIAR EL MENSAJE DE LOW STOCK ")
    })

})

module.exports = router;