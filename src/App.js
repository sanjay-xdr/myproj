import logo from './logo.svg';
import './App.css';
import { ProductListing } from './pages/ProductListing';
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>

<Navbar/>
    
    <Routes>
      
      <Route path='/' element={<ProductListing/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    <ToastContainer
position="bottom-right"
autoClose={3000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
}

export default App;
