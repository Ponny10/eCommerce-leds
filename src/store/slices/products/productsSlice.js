import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        isSaving: false,
        message: '',
        products: [],
        active: null,
    },
    reducers: {
        savingProduct: (state) => {
            state.isSaving = true;
        },
        addNewProduct: (state, actions) => {
            state.products.push(actions.payload);
            state.isSaving = false;
        },
        setActiveProduct: (state, actions) => {
            state.active = actions.payload;
        },
        setProducts: (state, actions) => {
            state.products = actions.payload;
        },
        setSaving: (state) => {

        },
        updateProduct: (state, actions) => {

        }
    }
});

export const {
    addNewProduct,
    savingProduct,
    setActiveProduct,
    setProducts,
    setSaving,
    updateProduct,
} = productsSlice.actions;