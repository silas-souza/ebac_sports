import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/cartSlice'
import { cartApi } from '../reducer/cartApi' 

    export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartApi.middleware), 
    devTools: true 
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch