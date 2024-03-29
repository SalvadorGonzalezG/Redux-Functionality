// slice: porcion de estado.

import {createSlice} from '@reduxjs/toolkit'

export const origenSlice = createSlice({
    name:'unValor',
    initialState:{miNombre:'rock', edad:18,
    // creamos un array de objetos el cual modificaremos ya que es parte del estado inicial de la app.
    bibliotecas: [
        {name:"JavaScrip", inicio:2002},
        {name:"NodeJs",inicio:2005}
    ],
    employes: [
        {name:"Filiberto",puesto:'Desarrollador', edad:'10 años'},
        {name:"Ramiro", puesto:'DevOps', edad:'10 años'},
        {name:"vanesa", puesto:'FullStack', edad:'11 años'},
        {name:"pablo", puesto:'Ing Software', edad:'2 años'},
        {name:"Ramses", puesto:'Analista Code', edad:'1 año'},
        {name:"franco", puesto:'FrontEnd', edad:'3 años'}
    ],
    },
    reducers:{

        moreedad:(state) =>{
            state.edad = state.edad +1
        },
        // la modificacion del estado inicial se va a realizar mediante un reducer.
        cambiarNombre:(state, action) => {
        // que voy a utilizar para modificar = lo que reciba mediante el payload 
            state.miNombre = action.payload;
        },
        mo1:(state,action)=>{
           const {index, newName, newPuesto, newEdad} =action.payload
           state.employes[index].name = newName
           state.employes[index].puesto = newPuesto
           state.employes[index].edad = newEdad
        },
        mod2:(state, action)=>{
            const{index, newName, newPuesto, newEdad} = action.payload
            state.employes[index].name = newName
            state.employes[index].puesto = newPuesto
            state.employes[index].edad = newEdad
        },
        mod3: (state, action) => {
            const {index, newName, newPuesto, newEdad} = action.payload
            state.employes[index].name = newName
            state.employes[index].puesto = newPuesto
            state.employes[index].edad = newEdad
        },
        mod4:(state, action)=>{
            const {index, newName, newPuesto, newEdad} = action.payload
            state.employes[index].name = newName
            state.employes[index].puesto = newPuesto
            state.employes[index].edad = newEdad
        },
        mod5:(state, action)=>{
            const {index, newName, newPuesto, newEdad} = action.payload
            state.employes[index].name = newName
            state.employes[index].puesto = newPuesto
            state.employes[index].edad = newEdad
        },
        mod6:(state, action)=>{
            const {index, newName, newPuesto, newEdad} = action.payload
            state.employes[index].name = newName
            state.employes[index].puesto = newPuesto
            state.employes[index].edad = newEdad
        },
        modificar1valor:(state, action)=>{
            const {indice, nuevoNombre, nuevoInicio} = action.payload
            state.bibliotecas[indice].name =nuevoNombre
            state.bibliotecas[indice].inicio = nuevoInicio
        },
        agregarUnValor: (state, action) =>{
            const {nuevoNombre, nuevoInicio} = action.payload
            state.bibliotecas = [...state.bibliotecas, {name:nuevoNombre, inicio:nuevoInicio}]
        },
        eliminarUnValor: (state, action)=>{
            state.bibliotecas = state.bibliotecas.filter(valor=> valor.name !== action.payload)
        },
        modif2Valor:(state, action)=>{
            const {indice, nuevoNombre, nuevoInicio} = action.payload
            state.bibliotecas[indice].name = nuevoNombre
            state.bibliotecas[indice].inicio =nuevoInicio  
        },
        restablecerState: (state)=>{
            state.miNombre = 'Rock'
        }
    }
})
export const otroSlice = createSlice({
    name:'otroValor',
    initialState:{puntuacion:0},
    reducers:{
        // la modificacion del estado inicial se va a realizar mediante un reducer.
        incrementarPuntuacion:(state) => {
        // que voy a utilizar para modificar = lo que reciba mediante el payload 
            state.puntuacion = state.puntuacion+1;
        },
        decrementarPuntuacion: (state) =>{
            state.puntuacion = state.puntuacion - 1;
        },
        dividirEntreDos:(state) =>{
            state.puntuacion = state.puntuacion / 2;
        }, 
        multiplicarPuntuacion: (state) => {
            state.puntuacion = state.puntuacion * 10
        },
        multiplicarPor20: (state) =>{
            state.puntuacion = state.puntuacion * 20
        },
        multiplicarPor100: (state) => {
            state.puntuacion = state.puntuacion * 100
        },
        multiplicarPor1000:(state) => {
            state.puntuacion = state.puntuacion *1000
        }
    }
})

export const {mod6,mod5,mod4,mod3,mod2,mo1,moreedad, agregarUnValor, eliminarUnValor, modif2Valor,restablecerState,cambiarNombre,modificar1valor} = origenSlice.actions
export const {incrementarPuntuacion} = otroSlice.actions
export const {dividirEntreDos,multiplicarPor1000, multiplicarPor100,decrementarPuntuacion,multiplicarPuntuacion, multiplicarPor20} = otroSlice.actions

export default {origenSlice, otroSlice}.reducer
