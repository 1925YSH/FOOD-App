import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopUp = ({setShowLogin}) => {

    const [currentState,setCurrentState]=useState("Login");

    const {url,setToken} = useContext(StoreContext)

    const [data,setData] =useState({
      name:"",
      email:"",
      password:""
    });

    const onChangeHandler = async(event)=>{

      const name = event.target.name;
      const value = event.target.value;

      setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(e)=>{
  e.preventDefault();
  let newUrl = url;
  if (currentState === "Login") {
    newUrl += "/api/user/login"
  } else {
    newUrl += "/api/user/register"
  }

  try {
    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      // ✅ First show the toast
      toast.success(response.data.message);

      // ⏳ Then close popup after small delay (optional)
      setTimeout(() => {
        setShowLogin(false);
      }, 1500); // allow toast to appear before closing
    } else {
      toast.error(response.data.message);
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  }
}
    


  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>:<input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder='Your Name' required />}
            <input onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Your Email' required />
            <input onChange={onChangeHandler} value={data.password} name='password' type="password" placeholder='Password' required />

        </div>
            <button type='submit'>{currentState==="Sign-up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing , i agree to the terms of use & privacy policy</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new account ? <span onClick={()=>setCurrentState("Sign-up")}>Click here</span></p>
            : <p>Already have an account ? <span onClick={()=>setCurrentState("Login")} >Login here</span></p>
        }
           
             
      </form>
      {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default LoginPopUp
