import React from 'react';
import './Newsletter.css';

export const Newsletter = () => {
    return (
        <div class="    ">
        <div class="container-fluid">
            <div class="row justify justify-content-start">
                <div class="col-3 col-lg-2 col-xl-3">
                    <form class="">
                        <div class="card">
                            <div class="row justify-content-center">
                                <div class="col-md-9 col-11">
                                    <div class="row mt-0">
                                        <div class="col-md-12 ">
                                            <h4 class="text-center heading">Obtene 10% off</h4>
                                            <p class="text-center sub-heading">suscribite a nuestro newsletter & recibi un cupon</p>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-md-12 mb-0"> <input id="e-mail" type="text" placeholder="INGRESA TU EMAIL" name="email" class="form-control input-box rm-border text-center"/> 
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                        <div class="col-md-1"> <input type="submit" value="¡OBTENER AHORA!" class="btn  btn-black rm-border text-center"/> 
                                        </div>
                                    </div>
                                    <div class="form-group row justify-content-center mb-0">
                                        <div class="col-md-5 px-3 mt-4"> 
                                        <a href="#">
                                                <p class="thanks">no gracias</p>
                                        </a> </div>
                                    </div>
                                    <div class="form-group row justify-content-center mb-0">
                                        <div class="col-md-12 px-3">
                                            <p class="conditions">* $500 compra minima</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Newsletter;
