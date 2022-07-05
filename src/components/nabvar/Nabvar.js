import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';

export const Nabvar = () => {
    const { uid, uidAdmin } = useSelector(state => state.auth);
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
                            to='/contacto'
                        >
                            Contacto
                        </NavLink>
                        {
                            (uid === uidAdmin) ?
                                <NavLink
                                    activeclassname='activate'
                                    className='nav-item nav-link h4'
                                    to='/contacto'
                                >
                                    Admin
                                </NavLink>
                                :
                                null
                        }
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/mycar'
                        >
                            <FontAwesomeIcon icon={ faCartShopping } style={ { color: 'red', height: 24 } } />
                        </NavLink>
                        <NavLink
                            activeclassname='activate'
                            className='nav-item nav-link h4'
                            to='/profile'
                        >
                            <FontAwesomeIcon icon={ faUser } style={ { color: '#2767F5', height: 24 } } />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
