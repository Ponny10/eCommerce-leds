import { Navigate } from 'react-router-dom';

export const LoginRouter = ({ children, isAuth }) => {
    const path = localStorage.getItem('path');
    return (isAuth === 'authenticated') ? <Navigate to={ path } /> : children;
}