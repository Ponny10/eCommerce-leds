import React from 'react'

export const CategoriasProd = (props) => {
    const { img, title, description, url, cat } = props;
    return (

        <div className='col-sm-6 col-md-4 col-lg-3 mb-lg-2'>
            <div className='card mb-3'>
                <img src={ img } className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text">{ description }</p>
                    <a href="#" className="btn btn-primary">{ url }</a>
                </div>
            </div>
        </div>
    )
}
