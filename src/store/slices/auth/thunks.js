import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { FirebaseAuth, FirebaseDB } from '../../../firebase/firebaseConfig';
import { admin, login, logout, startLoading, startLogin, startRegister } from './authSlice';
import Swal from 'sweetalert2';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';

export const loginTrue = (status) => {
    return (dispatch) => {
        dispatch(startLogin(status));
    }
}

// Método para registrar nuevo usuario con Correo y Contraseña
export const register = (rEmail, rPassword, name) => {
    return async (dispatch) => {
        dispatch(startRegister(true));
        try {
            const resp = await createUserWithEmailAndPassword(FirebaseAuth, rEmail, rPassword);
            const { uid, photoURL, email, displayName } = resp.user;
            console.log(resp.user);
            await updateProfile(FirebaseAuth.currentUser, {
                displayName: name,
            });
            dispatch(login({
                uid, email, name, photoURL,
            }));
            dispatch(startRegister(false));
            Swal.fire({
                title: 'Registro éxitoso',
                text: 'Se ha registrado correctamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: e,
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            dispatch(startRegister(false));
        }
    }
}

// Método para iniciar Sesión
export const logIn = (correo, password) => {
    return async (dispatch) => {
        dispatch(startLoading(true));
        try {
            const resp = await signInWithEmailAndPassword(FirebaseAuth, correo, password);
            const { uid, photoURL, email, displayName } = resp.user;
            dispatch(startLoading(false));
            dispatch(login({
                uid, email, displayName, photoURL,
            }));
            dispatch(checkAdmin(uid));
            Swal.fire({
                title: 'Bienvenido',
                text: displayName,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });
        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: e,
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
            dispatch(startLoading(false));
        }
    }
}

// Método para verificar si es admin el usuario logueado
export const checkAdmin = (uid) => {
    return async (dispatch) => {
        const docRef = collection(FirebaseDB, 'Admin');
        const qry = query(docRef, where('uid', '==', uid));
        const qrySnapshot = await getDocs(qry);
        let uidAdmin = '';
        qrySnapshot.forEach((doc) => {
            uidAdmin = { ...doc.data() }
        })
        dispatch(admin(uidAdmin.uid));
    }
}

// Método para cerrar sesión
export const startLogout = () => {
    return async (dispatch) => {
        await FirebaseAuth.signOut();
        dispatch(logout());
    }
}