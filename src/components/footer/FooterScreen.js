import React from 'react';
import './style.css';

export const FooterScreen = () => {
    return (
        <div className='footer-page'>
            <footer className="page-footer font-small teal pt-4 bg-dark text-white">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Contacto</h5>
                            <p>(81) 1315 2015</p>
                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Redes sociales</h5>
                            <div className='row'>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    Facebook
                                </div>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    WhatsApp
                                </div>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    Instagram
                                </div>
                                <div className='col-sm-3 col-md-3 col-lg-3'>
                                    Youtube
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Correo electronico</h5>
                            <p>luces.leds@gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className="text-center py-3">© 2020 Copyright:
                    <a href="/"> MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    )
}
