import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { loginTrue, register } from '../../store/slices/auth/thunks';
import logo from '../../assets/logo.jpeg';

export const Register = () => {

    const dispatch = useDispatch();

    // Enviar y recibir los valores de los inputs del Formulario Register.
    const [ formRegister, handleRegisterInputChange ] = useForm({
        rName: 'Ado',
        rLastName: 'Reyes',
        rEmail: 'mktic.test@gmail.com',
        rPassword: 'Abc123*-',
    });

    // Desestructuración de los valores de formRegister.
    const { rName, rLastName, rEmail, rPassword } = formRegister;

    // Método para registrarse
    const handleFormRegister = (e) => {
        e.preventDefault();
        let name = `${rName} ${rLastName}`;
        console.log(rEmail + ' ' + rPassword + ' ' + name);
        dispatch(register(rEmail, rPassword, name));
    }

    // Método para habilitar el formulario de login y ocultar el formulario de register.
    const login = () => {
        dispatch(loginTrue(true));
    }

    return (
        <>
            <div className="row d-flex justify-content-center align-items-center vh-100 bg-login m-0">
                <div className="col-sm-12 col-md-5 col-lg-4">
                    <div className="card cascading-right carta" >
                        <div className="card-body p-5 text-center">
                            <img src={ logo } className="l-login" alt="" />
                            <p className="title-login">Registrarse</p>
                            <form onSubmit={ handleFormRegister }>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                name='rName'
                                                value={ rName }
                                                onChange={ handleRegisterInputChange }
                                                className="form-control"
                                                placeholder='Nombre'
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                name='rLastName'
                                                value={ rLastName }
                                                onChange={ handleRegisterInputChange }
                                                className="form-control" placeholder='Apellido' />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        name='rEmail'
                                        value={ rEmail }
                                        onChange={ handleRegisterInputChange }
                                        className="form-control"
                                        placeholder='Correo electrónico' />
                                </div>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        name='rPassword'
                                        value={ rPassword }
                                        onChange={ handleRegisterInputChange }
                                        className="form-control"
                                        placeholder='Contraseña' />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Registrarse
                                </button>
                                <p>Ya tengo una cuenta <a href='#' onClick={ login }>Iniciar sesión</a> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
