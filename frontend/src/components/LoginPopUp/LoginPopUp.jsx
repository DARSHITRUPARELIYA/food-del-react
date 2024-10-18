import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currstate,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currstate==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currstate==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp
