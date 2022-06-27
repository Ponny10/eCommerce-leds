import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AcercaDeScreen } from '../components/acercaDe/AcercaDeScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Nabvar } from '../components/nabvar/Nabvar';
import { ServiciosScreen } from '../components/servicios/ServiciosScreen';
import './style.css';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className='body-page'>
                <Nabvar />
                <Routes>
                    <Route path="/*" element={ <HomeScreen /> } />
                    <Route path="/servicios" element={ <ServiciosScreen /> } />
                    <Route path='/acercade' element={ <AcercaDeScreen /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
