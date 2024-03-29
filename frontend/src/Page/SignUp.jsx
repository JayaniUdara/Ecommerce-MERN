import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import loginsignupimage from '../assest/login-animation.gif';
import {BiShow,BiHide} from 'react-icons/bi';
import { ImagetoBase64 } from '../Utility/ImagetoBase64';

const SignUp = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword]=useState(false);
  const [showconfirmPassword, setshowconfirmPassword]=useState(false);
  const[data,setData]=useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmpassword : "",
    image : "",
});
console.log(data)
  const handleshowPassword =()=>{
    setshowPassword(preve=> !preve)
  };
  const handleshowconfirmPassword =()=>{
    setshowconfirmPassword(preve=> !preve)
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

  const handleuploadimage= async(e) =>{
    const data= await ImagetoBase64(e.target.files[0])
    console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
  } 
  console.log(process.env.REACT_APP_SERVER_DOMIN)

  const handleSubmit= async(e)=>{
    e.preventDefault()
    const {firstName,lastName,email,password,confirmpassword}=data
    if(firstName && lastName && email && password && confirmpassword){
      if(password === confirmpassword){
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body :JSON.stringify(data)
        })
        const dataRes=await fetchData.json()
        console.log(dataRes)

        alert("successfull");
        //navigate("/login");
      }
      else{
        alert("passwords are not match")
      }
    }
    else{
      alert("Please enter required fields")
    }

  }

  return (
    <div className='p-3 md:4p-4 '>
      <div className='w-full max-w-md bg-white m-auto flex  flex-col p-4'>
        <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
        <div className='w-20  h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
          <img src={data.image ? data.image : loginsignupimage} className='w-full h-full' alt='' />

          <label htmlFor='profileimage'>
          <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
            <p className='text-sm p-1 text-white'>Upload</p>
          </div>
          <input type={"file"} id="profileimage" accept='image/' className='hidden' onChange={handleuploadimage}/>
          </label>
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
             type={'text'} 
             id='firstName' 
             name='firstName' 
             className='w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
             value={data.firstName}
             onChange={handleOnChange}
             />

          <label htmlFor='lastName'>Last Name</label>
          <input 
          type={'text'} 
          id='lastName' 
          name='lastName' 
          className='w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
          value={data.lastName}
          onChange={handleOnChange}
          />

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
          
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
          <input 
          type={showconfirmPassword ? 'text':'password'} 
          id='confirmpassword' name='confirmpassword' 
          className='w-full bg-slate-200 border-none outline-none' 
          value={data.confirmpassword}
          onChange={handleOnChange}
          />
          <span 
          className='flex text-xl cursor-pointer' 
          onClick={handleshowconfirmPassword}>{showconfirmPassword?<BiShow/>:<BiHide/>}</span>
          </div>

          <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
        </form>
        <p className='text-left text-sm mt-2'>Already have account ? <Link to={"/login"} className='text-red-600'>Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp
