import React from 'react';
import { FooterScreen } from '../footer/FooterScreen';
import { ServiciosList } from './ServiciosList';

export const ServiciosScreen = () => {
    const services = [
        {
            name: 'Leds',
            descript: 'Contamos con una amplia variedad de productos leds que se adecuan a tu vehículo.',
            img: require('../../assets/led.png'),
        },
        {
            name: 'Instalación',
            descript: 'Le ofrecemos el servicio de instalación de leds y accesorios para su auto.',
            img: require('../../assets/instalacion.png'),
        },
        {
            name: 'Cotización',
            descript: 'Le apoyamos en la cotización de cualquier otro componente o accesorio para su auto.',
            img: require('../../assets/cotizacion.png'),
        },
    ]
    return (
        <>
            <div className='container'>
                {/* <div className='card my-sm-3 my-md-4 my-lg-5'>
                    <div className='card-header text-center'>
                    </div>
                </div> */}
                <div className='my-sm-3 my-md-5 my-lg-5 my-5'>
                    <h2>Servicios</h2>
                    <hr />
                </div>
                <div className='row'>
                    {
                        services.map((res, index) => (
                            <ServiciosList key={ index } { ...res } />
                        ))
                    }
                </div>
            </div>
            <FooterScreen />
        </>
    )
}
