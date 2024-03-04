import { useDispatch, useSelector } from 'react-redux'
import { cambiarNombre } from '../features/slice/miSlice';

// useSelector: hook para releccionar datos especificos del store de redux
// useDispatch: Permite que un componente de funcion despache acciones a traves del store de redux, devuelve una funcion que se puede llamar oara despachar acciones
const Products = () => {

  const dispatch = useDispatch();
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  
  const modificar = () => {
    dispatch(cambiarNombre('lalo'))
  }
  return (
    <>
      <h1>{miNombreAhora}</h1>
      <button onClick={modificar}> modifName </button>
    </>
  )
}

export default Products