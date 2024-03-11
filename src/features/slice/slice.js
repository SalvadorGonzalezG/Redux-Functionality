import { createSlice } from '@reduxjs/toolkit'

export const contadorSlice = createSlice ({
    //nombre del slice
    name:'contador',
    initialState: {
        libraries:[
            {pais:'usa',tipo:'desarrollador', ds:'linux'},
            {pais:'mx', tipo:'jsjr', ds:'mac'},
            {pais:'england',tipo:'Reactjs', ds:'windows'}]
    },
    reducers:{
        modchan: (state, action) =>{
            const {index, newPais, newTipo, newds} = action.payload
            state.libraries[index].pais = newPais
            state.libraries[index].tipo = newTipo
            state.libraries[index].ds = newds
            },
            modch2:(state, action)=> {
            const {index, newPais, newTipo, newds} = action.payload
            state.libraries[index].pais = newPais
            state.libraries[index].tipo = newTipo
            state.libraries[index].ds =newds
            },
            modch3:(state, action)=>{
                const {index, newPais, newTipo, newds} = action.payload
                state.libraries[index].pais = newPais
                state.libraries[index].tipo = newTipo
                state.libraries[index].ds = newds
            }
    }
})


export const {modch3,modch2,modchan} = contadorSlice.actions
export default {contadorSlice}.reducer
