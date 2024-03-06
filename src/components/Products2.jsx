import { useDispatch, useSelector } from "react-redux"
import {agregarUnValor, eliminarUnValor} from '../features/slice/miSlice'


const Products2 = () => {
  const dispatch = useDispatch()
  const miNombreAhora = useSelector(state=> state.unValor.miNombre)
  const lenguaje = useSelector(state => state.unValor.bibliotecas)
  
  const agregar = ()=>{
    dispatch(agregarUnValor({
      nuevoNombre:"Vue",
      nuevoInicio: 2010
    }))
  }
  const eliminar = () => {
    dispatch(eliminarUnValor("Vue"))
  }
  return (
    <>
    <h1>{miNombreAhora}</h1>
    {lenguaje.map((valor, i)=>
      <div key={i}>{valor.name} {valor.inicio}</div>
    )}
    <button onClick={agregar}>Agregar1Valor</button>
    <button onClick={eliminar}>Elimina1Valor</button>
    </>
  )
}

export default Products2