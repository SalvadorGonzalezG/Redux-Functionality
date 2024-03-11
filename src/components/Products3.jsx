import {useSelector, useDispatch} from 'react-redux'
import {modch3,modch2,modchan} from '../features/slice/slice'
const Products3 = () => {
    const dispatch = useDispatch()
    const actualState = useSelector(state=> state.contador.libraries)
    const chang=() => {
        dispatch(modchan({
            index:0,
            newPais:'URS',
            newTipo:'DEVOPS',
            newds:'LINUX,MAC'
        }))
    }
    const ch2= () => {
        dispatch(modch2({
            index:1,
            newPais:'USA',
            newTipo:'FRECODE',
            newds:'WINDOWS'
        }))
    }
    const ch3 = ()=>{
        dispatch(modch3({
            index:2,
            newPais:'Liverpool',
            newds:'MAC, Linux, Windows'
        }))
    }
  return (
    <>
    <h1>Welcome Products3 page.</h1>
    {actualState.map((val, z)=>
    <div key={z}>{val.pais} {val.tipo} {val.ds}</div>)}

    <div>
        <button onClick={chang}>ChangeL1</button>
        <button onClick={ch2}>changeL2</button>
        <button onClick={ch3}>changeL3</button>
    </div>
    </>
  )
}

export default Products3