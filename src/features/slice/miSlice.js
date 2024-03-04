// slice: porcion de estado.

import {createSlice} from '@reduxjs/toolkit'

export const origenSlice = createSlice({
    name:'unValor',
    initialState:{miNombre:'rock'},
    reducers:{
        // la modificacion del estado inicial se va a realizar mediante un reducer.
        cambiarNombre:(state, action) => {
        // que voy a utilizar para modificar = lo que reciba mediante el payload 
            state.miNombre = action.payload;
        }
    }
})

export const {cambiarNombre} = origenSlice.actions
export default origenSlice.reducer