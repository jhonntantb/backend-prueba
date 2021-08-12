import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer-area footer--light">
      <div class="footer-big">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <div class="footer-widget">
                <div class="widget-about">
                  <img
                    src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.18169-9/10923273_406735952831411_3065322763382978546_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=mPv01XSVFSgAX9-cxzs&tn=s9y3TrQbg6IVf8rV&_nc_ht=scontent.ftuc1-1.fna&oh=5435ad22048225e9211a64eff661f9e7&oe=61377CD8"
                    alt=""
                    height="200"
                  />
                  <div class="row-fluid ">
                    <div class="col-lg-9 col-xs-12 col-md-12 col-sm-12 col-auto my-md-2 mt-10 order-sm-5 order-3 ">
                      <p class="social text-muted mb-0 pb-0 bold-text ">
                        <span class="mx-4">
                          <a href="https://www.facebook.com/aracelimerceria">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </span>
                        <span class="mx-4">
                          <a href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </span>
                        <span class="mx-4">
                          <a href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 ">
              <div class="footer-widget">
                <div class="widget widgets-footercontact toggled-on">
                  <h4 class="footer-widget-title">Contactanos</h4>
                  <ul>
                    <li>
                      {" "}
                      <big>
                        <span>
                          <i
                            id="fa1"
                            class="fa fa-whatsapp"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        +54 381 ***-****{" "}
                      </big>
                    </li>
                    <br />
                    <li>
                      {" "}
                      <big>
                        <span>
                          <i
                            id="fa1"
                            class="fa fa-phone"
                            aria-hidden="true"
                          ></i>
                        </span>{" "}
                        0381 ***-****{" "}
                      </big>
                    </li>
                    <br />
                    <li>
                      <big>
                        {" "}
                        <span>
                          <i
                            id="fa1"
                            class="fa fa-envelope"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <a href="aracelimerceria@gmail.com">****@gmail.com</a>
                      </big>
                    </li>
                    <br />
                    <li>
                      <big>
                        {" "}
                        <span>
                          <i
                            id="fa1"
                            class="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                        </span>
                        DIRECCION:{" "}
                      </big>
                      <br />
                      <small>
                        <span>
                          Uttinger 110 4103 Tafi Viejo, Tucumán,Argentina
                        </span>
                      </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
              <div class="footer-widget">
                <div class="footer-menu">
                  <h4 class="footer-widget-title">Nuestros Servicios</h4>
                  <ul>
                    <li>
                      <a href="#">Acerca de nosotros</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Envios a domicilio</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Politicas de privacidad</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Terminos &amp; Condiciones</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-12 col-sm-12">
              <div class="footer-widget">
                <div class="footer-menu no-padding">
                  <h4 class="footer-widget-title">Ayuda</h4>
                  <ul>
                    <li>
                      <a href="#">Foro de ayuda</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Terminos &amp; Condiciones</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Politicas de devoluciones</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mini-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="copyright-text">
                <p>
                  © 2020
                  <span>HENRY</span> All rights reserved. Created by
                  <span>Grupo 8</span>
                </p>
              </div>

              <div class="go_top">
                <i class="icon-arrow-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
