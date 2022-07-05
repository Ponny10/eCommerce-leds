import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { App } from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={ store }>
            <App />
        </Provider>
    </>
);