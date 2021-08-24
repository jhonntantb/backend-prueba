import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="container-fluid">
    <hr class="hr--large" />
    <footer className="site-footer small--text-center" role="contentinfo" data-section-id="footer" data-section-type="footer-section">
      <div className="wraper">
        <div className="grid-uniform">
          <div className="col-lg-3 col-md-3 col-sm-12 grid__item one-third small--one-whole my-3 ">
            <img src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.18169-9/10923273_406735952831411_3065322763382978546_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=mPv01XSVFSgAX9-cxzs&tn=s9y3TrQbg6IVf8rV&_nc_ht=scontent.ftuc1-1.fna&oh=5435ad22048225e9211a64eff661f9e7&oe=61377CD8"
              alt="img footer" height="200" />
          </div>
          <div className="grid__item one-third small--one-whole  pt-2 mt-5 col-lg-3 col-md-3 col-sm-12">
            <ul className="no-bullets social-icons">
              <li>
                <NavLink id="falink1" to="https://www.facebook.com/aracelimerceria" title="AraceliMerceria on Facebook">
                  <span className="fa fa-facebook" aria-hidden="true"></span>
                  Facebook
                </NavLink>
              </li>
              <br />
              <li id="falink2">
                <NavLink id="falink2" to="https://wa.link/l28b79" title="AraceliMerceria Whatsapp">
                  <span className="fa fa-whatsapp" aria-hidden="true"></span>
                  Whatsapp
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third small--one-whole pt-2 my-5 col-lg-3 col-md-3 col-sm-12">
            <ul className="no-bullets site-footer__linklist">
              <li>
                <NavLink to="#">Contactanos </NavLink>
              </li>
              <br />
              <li>
                <NavLink to="#">Acerca de Nosotros </NavLink>
              </li>
            </ul>
          </div>
          <div className="grid__item one-third small--one-whole large--text-right pt-2 my-5 col-lg-3 col-md-3 col-sm-12">
            <form id="localization_form" className="selectors-form" method="post" accept-charset="UTF-8" enctype="multipart/form-data" action="/localization">
              <input type="hidden" name="form_type" value="localization" />
              <input type="hidden" name="utf8" value="✓" />
              <input type="hidden" name="_method" value="put" />
              <input type="hidden" name="return_to" value="/" />
            </form>
            <p className="site-footer__copyright-content">
              © 2021, Araceli Merceria
              <br />
              Powered by Group8
            </p>
            <span class="visually-hidden">Metodos de pago</span>
            <ul className="inline-list payment-icons site-footer__payment-icons">
              <li>
                <svg class="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa">
                  <title id="pi-visa">Visa</title>
                  <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                  <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                  <path fill="#142688" d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"></path>
                </svg>
              </li>
              <li>
                <svg class="icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master">
                  <title id="pi-visa">Mastercard</title>
                  <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                  <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" ></path>
                  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                  <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
