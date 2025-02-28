import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios'
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
      if (currentState==="Login") {
        newUrl +="/api/user/login"
      }else{
        newUrl +="/api/user/register"

      }

      const response = await axios.post(newUrl,data);
      
      if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token)
        setShowLogin(false)
        }else{
          alert(response.data.message)
          
          
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
    </div>
  )
}

export default LoginPopUp
