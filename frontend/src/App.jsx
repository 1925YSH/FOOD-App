import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import AboutUs from './components/AboutUs/AboutUs';
import Delivery from './components/Delivery/Delivery';
import PrivacyPolicy from './components/Privacy & Policy/PrivacyPolicy';

function App() {
    const [showLogin,setShowLogin] =useState(false)

  return (
    <>
    {
      showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>
    }
    <div className='app'>
     <Navbar setShowLogin={setShowLogin} />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/placeOrder' element={<PlaceOrder/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>} />
      <Route path='/about' element={<AboutUs/>}/>
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
     </Routes>
     
    </div>
    <Footer/>
    
    {/* ✅ Global ToastContainer at the end */}
    <ToastContainer position="top-right" autoClose={3000} />
    
  </>)
}

export default App
