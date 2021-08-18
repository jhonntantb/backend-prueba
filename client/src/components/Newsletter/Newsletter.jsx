import React from 'react';
import './Newsletter.css';

export const Newsletter = () => {
    return (
        <div class="container">
            <div class="row  justify-content-start">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <form class="">
                        <div id="cardnews">
                            <div class="row justify-content-center">
                                <div class="col-md-9 col-11">
                                    <div class="row mt-0">
                                        <div class="col-md-12 ">
                                            <h4 class="text-center heading">Obtene 10% off</h4>
                                            <p class="text-center sub-heading">suscribite a nuestro newsletter & recibi un cupon</p>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-3">
                                    <div class="col-md-12 mb-0"> <input id="e-mail" type="text" placeholder="INGRESA TU EMAIL" name="email" class="form-control input-box rm-border text-center"/> </div>
                                    </div>
                                    <div class="form-group row justify-content-center mb-0">
                                    <div class="col-md-12 px-3"> <input type="submit" value="¡OBTENE AHORA!" class="btn btn-block btn-black rm-border"/> </div>
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
    )
}

export default Newsletter;
