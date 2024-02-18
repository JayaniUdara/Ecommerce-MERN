import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginsignupimage from '../assest/login-animation.gif'
import {BiShow,BiHide} from 'react-icons/bi'

const Login = () => {

  const [showPassword, setshowPassword]=useState(false);
  const[data,setData]=useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmpassword : "",
});
console.log(data)
  const handleshowPassword =()=>{
    setshowPassword(preve=> !preve)
  };
  const handleOnChange =(e) =>{
    const {name,value}=e.target
    setData((preve)=>{
      return{
        ...preve,
      [name]:value
      }
      
    })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    const {email,password,}=data
    if(email && password){
      alert("Successfully")
    }
    else{
      alert("Please enter required fields")
    }

  }

  return (
    <div>
      <div className='p-3 md:4p-4 '>
      <div className='w-full max-w-md bg-white m-auto flex  flex-col p-4'>
        <h1 className='text-center text-2xl font-bold'>Login</h1>
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative '>
          <img src={loginsignupimage} className='w-full' alt='' />
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input 
          type={'email'} 
          id='email' 
          name='email' 
          className='w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
          value={data.email}
          onChange={handleOnChange}
          />

          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
          <input 
          type={showPassword ? 'text':'password'} 
          id='password' name='password' 
          className='w-full bg-slate-200 border-none outline-none' 
          value={data.password}
          onChange={handleOnChange}
          />
          <span 
          className='flex text-xl cursor-pointer' 
          onClick={handleshowPassword}>{showPassword?<BiShow/>:<BiHide/>}</span>
          </div>

          <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Login</button>
        </form>
        <p className='text-left text-sm mt-2'>Don't have an account ? <Link to={"/signup"} className='text-red-600'>Sign Up</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Login
