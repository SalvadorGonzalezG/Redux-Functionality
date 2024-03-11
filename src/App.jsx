import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Products from './components/Products'
import Products2 from './components/Products2'
import Products3 from './components/Products3';

const App = () => {
  const notify = () => toast('wooow')
  return (
    <>
    <div>
    <button onClick={notify}>notify</button>
    <ToastContainer/>
    </div>
    
      <Router>
        <Link to="/products" ><button>Products</button></Link>
        <Link to="/productos2"><button>Products2</button></Link>
        <Link to="/productos3"><button>Productos3</button></Link>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path='/productos3' element={<Products3/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
