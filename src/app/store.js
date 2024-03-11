import {configureStore} from '@reduxjs/toolkit'
import {origenSlice, otroSlice} from '../features/slice/miSlice'
import {contadorSlice} from '../features/slice/slice.js'


// creamos el almacenamiento de Redux en una constante llamada store
export const store = configureStore({

    reducer:{
        unValor:origenSlice.reducer,
        otroValor:otroSlice.reducer,
        contador:contadorSlice.reducer
    }
})