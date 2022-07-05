import React from 'react';
import { FooterScreen } from '../footer/FooterScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faSquarePhoneFlip, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import escribir from '../../assets/escribir.gif';

library.add(fas, faWhatsapp, faFacebook);



export const AcercaDeScreen = () => {

    return (
        <>
            <div className='container my-5'>
                <div className=''>
                    <h2>Contacto</h2>
                    <hr />
                </div>
                <div className='row my-5'>
                    <div className='col-sm-12 col-md-4 col-md-3'>
                        <div className='card text-center p-5'>
                            <FontAwesomeIcon icon={ faSquarePhoneFlip } style={ { color: '#ffbc42', height: 60 } } />
                            <div className='card-body'>
                                <h5 className='card-title'>Telefono</h5>
                                <p className='card-text'>81-1020-1020</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-md-3'>
                        <div className='card text-center p-5'>
                            <FontAwesomeIcon icon={ faLocationDot } style={ { color: '#c1121f', height: 60 } } />
                            <div className='card-body'>
                                <h5 className='card-title'>Dirección</h5>
                                <p className='card-text'>Guadalupe, NL.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-md-3'>
                        <div className='card text-center p-5'>
                            <FontAwesomeIcon icon={ faWhatsapp } style={ { color: '#0ead69', height: 60 } } />
                            <div className='card-body'>
                                <h5 className='card-title'>WhatsApp</h5>
                                <p className='card-text'>81-1020-1020</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 col-md-3 my-5'>
                        <div className='card text-center p-5'>
                            <FontAwesomeIcon icon={ faFacebook } style={ { color: '#0466c8', height: 60 } } />
                            <div className='card-body'>
                                <h5 className='card-title'>Facebook</h5>
                                <p className='card-text'>www.facebook.com/marleds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-5'>Escribenos</h2>
                <div className='row my-5'>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <img src={ escribir } className='img-fluid img-thumbnail' />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='card p-3 bg-light'>
                            <form>
                                <div className='form-group mt-3'>
                                    <label htmlFor='name' className='h5'>Nombre completo</label>
                                    <input id='name' className='form-control form-control-lg' type='text' placeholder='Ingrese nombre completo' />
                                </div>
                                <div className='form-group my-3'>
                                    <label htmlFor='name' className='h5'>Correo electronico</label>
                                    <input id='name' className='form-control form-control-lg' type='text' placeholder='Ingrese nombre completo' />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='name' className='h5'>Comentarios</label>
                                    <textarea id='name' className='form-control form-control-lg' rows='5' placeholder='Ingrese nombre completo' />
                                </div>
                                <div className='form-group text-center my-3'>
                                    <button className='btn btn-primary btn-lg btn-block'>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
