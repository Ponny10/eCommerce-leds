import { Navigate, useLocation } from 'react-router-dom';

export const AuthRouter = ({ children, isAuth }) => {
    const location = useLocation();
    console.log(location);
    localStorage.setItem('path', location.pathname);
    console.log('Ruta actual a ir ' + localStorage.getItem('path'));
    return (isAuth === 'authenticated') ? children : <Navigate to={ '/login' } />;
}
