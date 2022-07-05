import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginTrue } from '../../store/slices/auth/thunks';
import { Login } from './Login';
import { Register } from './Register';
import './styles.css';

export const AuthScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginTrue(true));
    }, []);

    const { showLogin } = useSelector(state => state.auth);

    return (
        <>
            {
                (showLogin) ? <Login /> : <Register />
            }
        </>
    )
}
