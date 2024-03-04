import {configureStore} from '@reduxjs/toolkit'
import {origenSlice} from '../features/slice/miSlice'

// creamos el almacenamiento de Redux en una constante llamada store
export const store = configureStore({

    reducer:{
        unValor:origenSlice.reducer
    }
})