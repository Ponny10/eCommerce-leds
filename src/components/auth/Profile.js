import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/slices/auth/thunks';

export const Profile = () => {

    const dispatch = useDispatch();

    const salir = () => {
        dispatch(startLogout());
    }

    return (
        <>
            <h1 className='my-5'>Perfil</h1>
            <button
                onClick={ salir }
                className='my-5 btn btn-danger'
            >
                Cerrar sesión
            </button>
            <h1> Hola </h1>
        </>
    )
}
