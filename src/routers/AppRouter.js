import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthScreen } from '../components/auth/AuthScreen';
import { FirebaseAuth } from '../firebase/firebaseConfig';
import { login } from '../store/slices/auth/authSlice';
import { checkAdmin, startLogout } from '../store/slices/auth/thunks';
import { LoginRouter } from './LoginRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

    // Dispatch para ejecutar los Redux
    const dispatch = useDispatch();

    // useSelector para verificar el estatus del login
    const { status } = useSelector(state => state.auth);
    // Bandera para verificar el estado de logueo
    const [ checking, setChecking ] = useState(true);

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user?.uid) {
                dispatch(startLogout());
                setChecking(false);
            } else {
                const { uid, email, displayName, photoURL } = user;
                dispatch(login({ uid, email, displayName, photoURL }));
                dispatch(checkAdmin(uid));
                setChecking(false);
            }
        });
    }, [ checking ]);

    if (checking) {
        return (
            <div className='d-flex align-items-center justify-content-center'>
                <h2>Cargando...</h2>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <PublicRouter isAuth={ status } /> } />
                <Route path='/login' element={ <LoginRouter isAuth={ status }>
                    <AuthScreen />
                </LoginRouter> } />
            </Routes>
        </BrowserRouter>
    );
}