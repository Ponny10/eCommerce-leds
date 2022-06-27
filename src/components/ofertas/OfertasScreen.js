import React from 'react';
import { CategoriaScreen } from './CategoriaScreen';

export const OfertasScreen = () => {
    const categorias = [
        {
            titulo: 'Ofertas',
            id: 1,
            id_oferta: 1
        },
        {
            titulo: 'Nuevos productos',
            id: 2,
            id_oferta: 2
        }
    ];
    return (
        <div className='bg-white mt-lg-5 mb-lg-5'>
            <div className='container'>
                {
                    categorias.map((res, key) => (
                        <CategoriaScreen { ...res } key={ key } />
                    ))
                }
            </div>
        </div>
    )
}
