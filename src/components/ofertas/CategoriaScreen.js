import React from 'react';
import ofertas from '../../assets/ofertas.png';
import { CategoriasProd } from './CategoriasProd';

export const CategoriaScreen = (props) => {

    const { titulo, id_oferta } = props;
    const productos = [
        {
            img: ofertas,
            title: 'Combo 1',
            description: 'Some quick example text to build on the card title and make up the bulk of the card´s content.',
            url: 'Go somewhere',
            cat: 'Combo 1'
        },
        {
            img: ofertas,
            title: 'Combo 2',
            description: 'Some quick example text to build on the card title and make up the bulk of the card´s content.',
            url: 'Go somewhere',
            cat: 'Combo 2'
        },
        {
            img: ofertas,
            title: 'Combo 1',
            description: 'Some quick example text to build on the card title and make up the bulk of the card´s content.',
            url: 'Go somewhere',
            cat: 'Combo 1'
        },
        {
            img: ofertas,
            title: 'Combo 2',
            description: 'Some quick example text to build on the card title and make up the bulk of the card´s content.',
            url: 'Go somewhere',
            cat: 'Combo 1'
        },
        {
            img: ofertas,
            title: 'Combo 1',
            description: 'Some quick example text to build on the card title and make up the bulk of the card´s content.',
            url: 'Go somewhere',
            cat: 'Combo 1'
        },
    ];

    return (
        <>
            {
                titulo ?
                    <div className='bg-warning p-3 text-center my-3'>
                        <h2>{ titulo + id_oferta }</h2>
                    </div>
                    :
                    null
            }
            <div div className='row'>
                {
                    productos.map((res, index) => (
                        <CategoriasProd { ...res } key={ index } />
                    ))
                }
            </div>
        </>
    )
}