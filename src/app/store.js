import {configureStore} from '@reduxjs/toolkit'
import {origenSlice, otroSlice} from '../features/slice/miSlice'

// creamos el almacenamiento de Redux en una constante llamada store
export const store = configureStore({

    reducer:{
        unValor:origenSlice.reducer,
        otroValor:otroSlice.reducer
    }
})