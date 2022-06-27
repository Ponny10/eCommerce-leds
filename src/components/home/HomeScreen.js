import React from 'react';
import { FooterScreen } from '../footer/FooterScreen';
import { HeaderScreen } from '../header/HeaderScreen';
import { OfertasScreen } from '../ofertas/OfertasScreen';
import { Suscripcion } from '../suscripcion/Suscripcion';

export const HomeScreen = () => {
    return (
        <>
            <HeaderScreen />
            <OfertasScreen />
            <Suscripcion />
            <hr />
            <FooterScreen />
        </>
    )
}
