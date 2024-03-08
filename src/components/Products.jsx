import { useDispatch, useSelector } from 'react-redux'
import {moreedad,modif2Valor,modificar1valor,dividirEntreDos,restablecerState, multiplicarPor1000, multiplicarPor100, multiplicarPor20,multiplicarPuntuacion, cambiarNombre, incrementarPuntuacion, decrementarPuntuacion } from '../features/slice/miSlice';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// useSelector: hook para releccionar datos especificos del store de redux
// useDispatch: Permite que un componente de funcion despache acciones a traves del store de redux, devuelve una funcion que se puede llamar oara despachar acciones
const Products = () => {

  const dispatch = useDispatch();
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  const puntuacionAhora = useSelector(state => state.otroValor.puntuacion)
  const miEdadAhora = useSelector(state=>state.unValor.edad)
  const lenguaje = useSelector(state => state.unValor.bibliotecas)

  const modificar = () => {
// que funcion quiero utilizar con el nuevo valor que quiero añadir al estado
    dispatch(cambiarNombre('neoker'))
    toast('excelente')
    
  }
  const masUno = () => {
    dispatch(incrementarPuntuacion())
    toast.success(`Estas sumando + 1 puntuacion: ${puntuacionAhora + 1}`)
  }
  const menosUno = () => {
    dispatch(decrementarPuntuacion())
  }
  const porDiez = () => {
    dispatch(multiplicarPuntuacion())
  }
  const porBeinte = () => {
    dispatch(multiplicarPor20())
  }
  const porCien = () =>{
    dispatch( multiplicarPor100())
  }
  const porMil = () => {
    dispatch(multiplicarPor1000())
  }
  const nameAnterior = () =>{
    dispatch(restablecerState())
  }
  const entre2=()=>{
    dispatch(dividirEntreDos())
    toast('dividiste entre 2')
  }
  const modificar2Array = () => {
    dispatch(modificar1valor({
      indice:0,
      nuevoNombre: "Java",
      nuevoInicio:"Agosto de 2010"
    }))
  }
  const modif2Value = () => {
    dispatch(modif2Valor({
      indice:1,
      nuevoNombre:"PHP",
      nuevoInicio:"Marzo 2015"
    }))
  }
  const masedad=() => {
    dispatch(moreedad())
  }
 
  return (
    <>
    <div>
      <h1>{miNombreAhora} </h1>
      <h2>{miEdadAhora} años</h2>
    
      {lenguaje.map((valor, i)=> 
      <div key={i}>{valor.name} ({valor.inicio})</div>
          )}
      <h1>{puntuacionAhora}</h1>
      <button onClick={modificar}> changeName </button>
      <button onClick={masedad}>MasEdad</button>
      
      <button onClick={nameAnterior}>nombreAnterior</button>
      <button onClick={modificar2Array}>modificar un Valor2 array</button>
      <button onClick={modif2Value}>mod 2 valor 2Array</button>
      <button onClick={masUno}>+1</button>
      <button onClick={menosUno}>-1</button>
      <button onClick={entre2}>/2</button>
      <button onClick={porDiez}>x10</button>
      <button onClick={porBeinte}>x20</button>
      <button onClick={porCien}>x100</button>
      <button onClick={porMil}>x1000</button>
      
      <ToastContainer
        position='top-center'
        
      />
      </div>
    </>
  )
}

export default Products