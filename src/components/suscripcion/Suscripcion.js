import React from 'react';
import { useForm } from '../../hooks/useForm';

export const Suscripcion = () => {

    const [ values, handleInputChange ] = useForm({
        sEmail: '',
    });

    const { sEmail } = values;

    return (
        <div className='container text-center my-3'>
            <div className='card p-5 bg-warning'>
                <form>
                    <div className="form-group">
                        <label className="h2">Suscribirse para recibir ofertas </label>
                        <input
                            className="form-control"
                            type='email'
                            name='sEmail'
                            value={ sEmail }
                            onChange={ handleInputChange }
                            placeholder='Ingrese correo electronico'
                        />
                    </div>
                    {/* <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}
