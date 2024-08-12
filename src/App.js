import logo from './logo.svg';
import './App.css';
import { ProductListing } from './pages/ProductListing';
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>

<Navbar/>
    
    <Routes>
      
      <Route path='/product' element={<ProductListing/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </>
  );
}

export default App;
