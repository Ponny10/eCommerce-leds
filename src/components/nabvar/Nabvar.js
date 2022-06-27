import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export const Nabvar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={ logo } style={ { width: '6rem', height: '6rem' } } />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavLink
                            activeclassname="active"
                            className="nav-item nav-link h4"
                            to="/"
                        >
                            Inicio
                        </NavLink >
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/productos'
                        >
                            Productos
                        </NavLink>
                        <NavLink
                            activeclassname='active'
                            className='nav-item nav-link h4'
                            to='/servicios'
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/acercade'
                        >
                            Acerca de
                        </NavLink>
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/login'
                        >
                            <FontAwesomeIcon icon={ faUser } style={ { color: 'blue', height: 24 } } />
                        </NavLink>
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/car'
                        >
                            <FontAwesomeIcon icon={ faCartShopping } style={ { color: 'blue', height: 24 } } />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
