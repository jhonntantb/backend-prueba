import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="footer-dark position-fixed-bottom">
      <footer>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 col-sm-12 item text ps-5">
              <h3>Araceli Merceria</h3>
              <br />
              <img src="https://scontent.flim1-4.fna.fbcdn.net/v/t1.18169-1/10923273_406735952831411_3065322763382978546_n.jpg?stp=dst-jpg_p148x148&_nc_cat=104&ccb=1-7&_nc_sid=1eb0c7&_nc_eui2=AeGrxCVBF-VTWPkqhNBfjFLe7LRiD_fiG1nstGIP9-IbWa4_0SlMgwrRv7S6DBQ5NBYYoXOIZ9sS3NTf1K9H3MN1&_nc_ohc=PZea2RjR2IIAX8IbJIb&_nc_ht=scontent.flim1-4.fna&oh=00_AT9mHF2z5jJLogcmrJWGnnguDaad59d-wFWq7aiJg-CiDQ&oe=633DB8BE"
                alt="img footer" height="150px" />
            </div>
            <div className="col-md-4  col-sm-12 item text-center">
              <h3>Acerca de </h3>
              <br />
              <ul>
                <li><NavLink to="/aboutus">Nosotros</NavLink></li>
                <br />
                <li><NavLink to="/contactus">Contactanos</NavLink></li>
                <br />
                <li><NavLink to="/productlist">Comprar</NavLink></li>
                <br />
                <li><NavLink to="/wishlist">Favoritos</NavLink></li>
              </ul>
            </div>
            <div className="col-md-4  col-sm-12 item ">
              <div className="col item social">
                <h3>Redes </h3>
                <br />
                <ul>
                <li>
                <a target="_blank"  href="https://www.facebook.com/aracelimerceria" title="AraceliMerceria on Facebook" rel="noreferrer">
                  <span style={{fontSize:"20px"}} className="fa fa-facebook me-2" aria-hidden="true"></span>
                  Facebook
                </a>
              </li>
              <br />
              <li >
                <a id="falink2" target="_blank" href="https://wa.link/l28b79" title="AraceliMerceria Whatsapp" rel="noreferrer">
                  <span style={{fontSize:"20px"}} className="fa fa-whatsapp me-2" aria-hidden="true"></span>
                  Whatsapp
                </a>
              </li>
                </ul>
              </div>
              </div>
            <p className="copyright">Araceli Merceria © 2021</p>
            </div>
          </div>
    </footer>
</div>
      );
};

      export default Footer;
