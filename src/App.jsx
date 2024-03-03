import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Products from './components/Products'
import Products2 from './components/Products2'

const App = () => {

  return (
    <>
      <Router>
        <Link to="/products" ><button>Products</button></Link>
        <Link to="/products2"><button>Products2</button></Link>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
