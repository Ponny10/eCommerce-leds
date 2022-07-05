import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nabvar } from '../components/nabvar/Nabvar';
import { AcercaDeScreen } from '../components/contact/AcercaDeScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { ProductosScreen } from '../components/productos/ProductosScreen';
import { ServiciosScreen } from '../components/servicios/ServiciosScreen';
import { FooterScreen } from '../components/footer/FooterScreen';
import { Profile } from '../components/auth/Profile';
import './style.css';
import { AuthRouter } from './AuthRouter';

export const PublicRouter = ({ isAuth }) => {
    return (
        <>
            <div className='body-page'>
                <Nabvar />
                <Routes>
                    <Route path="/*" element={ <HomeScreen /> } />
                    <Route path="/productos" element={ <ProductosScreen /> } />
                    <Route path="/servicios" element={ <ServiciosScreen /> } />
                    <Route path='/contacto' element={ <AcercaDeScreen /> } />
                    <Route path='/profile' element={ <AuthRouter isAuth={ isAuth } ><Profile /></AuthRouter> } />
                    <Route path='/mycar' element={ <AuthRouter isAuth={ isAuth } ><Profile /></AuthRouter> } />
                </Routes>
                <FooterScreen />
            </div>
        </>
    )
}
