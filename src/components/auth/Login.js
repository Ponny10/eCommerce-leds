import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn, loginTrue } from '../../store/slices/auth/thunks';
import logo from '../../assets/logo.jpeg';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [ formLogin, handleInputChange ] = useForm({
        lEmail: 'mktic.test@gmail.com',
        lPassword: 'Abc123*-',
    });

    const { lEmail, lPassword } = formLogin;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(logIn(lEmail, lPassword));
    }

    const register = () => {
        dispatch(loginTrue(false));
    }

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="row d-flex justify-content-center align-items-center vh-100 bg-login m-0">
                <div className="col-sm-12 col-md-5 col-lg-4">
                    <div className="card cascading-right carta" >
                        <div className="card-body p-5 shadow-5  text-center">
                            <img src={ logo } className="l-login" alt="" />
                            <p className="title-login">Iniciar sesión</p>
                            <form onSubmit={ handleRegister }>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        name='lEmail'
                                        value={ lEmail }
                                        onChange={ handleInputChange }
                                        className="form-control"
                                        placeholder='Correo electrónico'
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        name='lPassword'
                                        value={ lPassword }
                                        onChange={ handleInputChange }
                                        className="form-control"
                                        placeholder='Contraseña'
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block my-4">
                                    Ingresar
                                </button>
                                <p>No tengo una cuenta? <a href='#' onClick={ register }>Registrarse</a> </p>
                            </form>
                            <button type='button' className='btn btn-success' onClick={ handleBack }>Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
