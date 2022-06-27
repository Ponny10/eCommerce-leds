import React from 'react';

export const ServiciosList = ({ name, descript, img }) => {
    return (
        <>
            <div className='col-sm-6 col-md-6 col-lg-4 my-5'>
                <div className='card p-3'>
                    <div className='text-center'>
                        <img src={ img } className='card-img-top w-50' />
                    </div>
                    <div className='card-body'>
                        <h3 className='text-center'>{ name }</h3>
                        <p className='text-justify'>{ descript }</p>
                    </div>
                </div>
            </div>
        </>
    )
}
