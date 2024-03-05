import { useSelector } from "react-redux"


const Products2 = () => {
  const miNombreAhora  = useSelector(state=> state.unValor.miNombre)
  return (
    <h1>{miNombreAhora}</h1>
  )
}

export default Products2