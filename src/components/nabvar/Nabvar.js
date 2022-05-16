import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export const Nabvar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Mart Leds</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Acerca de</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={faUser} style={{color: 'white', height: 24}} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <FontAwesomeIcon icon={faCartShopping} style={{color: 'white', height: 24}} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
