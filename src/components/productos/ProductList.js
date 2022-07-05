import React from 'react';

export const ProductList = ({ id, description, name }) => {
    return (
        <div className='col-sm-12 col-md-4 col-lg-3'>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title text-center my-3'>{ name }</h3>
                    <p className='card-ytext'>{ description }</p>
                </div>
            </div>
        </div>
    )
}
