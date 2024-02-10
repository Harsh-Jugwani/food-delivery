import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './userSlice'

const appStore = configureStore({

    reducer:{
        cart: cartReducer,
    },
}
);

export default appStore;