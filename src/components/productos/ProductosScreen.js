import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProducts, startNewProduct } from '../../store/slices/products';
import { FooterScreen } from '../footer/FooterScreen';
import { ProductList } from './ProductList';

export const ProductosScreen = () => {

    const dispatch = useDispatch();
    const { products, isSaving } = useSelector(state => state.products);

    useEffect(() => {
        loadingProducts();
    }, []);

    const loadingProducts = () => {
        dispatch(startLoadingProducts());
    }

    const saveProduct = () => {
        dispatch(startNewProduct());
    }

    return (
        <>
            <div className='container my-5'>
                <h2>Productos</h2>
                <hr />
                <div className='my-5'>
                    <div className='row'>
                        {
                            products.map((prod) => (
                                <ProductList key={ prod.id } { ...prod } />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary btn-lg' style={ { width: '100%' } } onClick={ saveProduct } disabled={ isSaving } >
                        Guardar
                    </button>
                </div>
            </div>
        </>
    )
}
