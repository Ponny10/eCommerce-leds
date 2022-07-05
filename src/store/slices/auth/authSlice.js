import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: null,
        showLogin: null,
        startRegister: null,
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        uidAdmin: null,
    },
    reducers: {
        startLogin: (state, actions) => {
            state.showLogin = actions.payload;
        },
        startRegister: (state, actions) => {
            state.startRegister = actions.payload;
        },
        startLoading: (state, actions) => {
            state.loading = actions.payload;
        },
        register: (state, { payload }) => {
            state.status = 'register';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
        },
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
        },
        admin: (state, actions) => {
            state.uidAdmin = actions.payload;
        },
        logout: (state) => {
            state.status = 'no-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.uidAdmin = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { startLogin, startRegister, register, login, startLoading, admin, logout } = authSlice.actions;