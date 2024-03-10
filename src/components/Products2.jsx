import { useDispatch, useSelector } from "react-redux"
import {mod6,mod5,mod4,mod3,mod2,mo1,agregarUnValor, eliminarUnValor} from '../features/slice/miSlice'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Products2 = () => {
  const dispatch = useDispatch()
  const miNombreAhora = useSelector(state=> state.unValor.miNombre)
  const lenguaje = useSelector(state => state.unValor.bibliotecas)
  const myEmployes = useSelector(state => state.unValor.employes)
  
  const agregar = ()=>{
    dispatch(agregarUnValor({
      nuevoNombre:"Vue",
      nuevoInicio: 2010
    }))
  }
  const eliminar = () => {
    dispatch(eliminarUnValor("Vue"))
  }
  const m1=()=>{
    dispatch(mo1({
      index: 0,
      newName:"Riss",
      newPuesto:'RH',
      newEdad:'1año'
    }),
    toast.success('Se a modificado el primer elemento del array')
    )}
    const m2=()=>{
      dispatch(mod2({
        index:1,
        newName: "jonh",
        newPuesto: "Inductor html",
        newEdad: '5 años'
      }))}
      const m3= () => {
        dispatch(mod3({
          index:2,
          newName:'Alex',
          newPuesto: 'Desarrollador BackEnd',
          newEdad: '4 años'
        }))
    }
    const m4=()=>{
      dispatch(mod4({
        index:3,
        newName:'Lorentz',
        newPuesto: 'Ing Sistemas',
        newEdad:'7 años'
      }))
    }
    const m5 = ()=> {
      dispatch(mod5({
        index:4,
        newName:'GinOne',
        newPuesto: 'CEO',
        newEdad: '14 años'
      }))
    }
    const m6 =()=>{
      dispatch(mod6({
        index:5,
        newName:'Fray',
        newPuesto:'IngSistemas',
        newEdad:'4 años'
      }))
    }
  return (
    <>
    <h1>{miNombreAhora}</h1>
    {lenguaje.map((valor, i)=>
      <div key={i}>{valor.name} {valor.inicio}</div>
    )}
    <h3>{myEmployes.map((valor,i)=>
    <div key={i}>{i+1}. {valor.name} {valor.puesto} ({valor.edad})</div> )}</h3>
    <button onClick={agregar}>Agregar1Valor</button>
    <button onClick={eliminar}>Elimina1Valor</button>
    <button onClick={m1}>moddificar1</button>
    <button onClick={m2}>moddificar2</button>
    <button onClick={m3}>moddificar3</button>
    <button onClick={m4}>moddificar4</button>
    <button onClick={m5}>moddificar5</button>    
    <button onClick={m6}>modificar6</button>

    <ToastContainer
        position='top-center'
      />
    </>
  )
}

export default Products2