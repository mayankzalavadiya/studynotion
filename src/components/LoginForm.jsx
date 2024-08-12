import React, { useState } from 'react'
import {toast} from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedIn}) {

    const navigate = useNavigate();

   const [formData,setFormData] = useState({
    email:"",
    password:""
   })

   const [showPassword,setShowPassword] = useState(false)

   function changeHandler(e){
       setFormData((prevData) =>(
        {
            ...prevData,
            [e.target.name] : e.target.value
        }
       ))
   }

   
   function submitHandler(e){
    e.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");

    console.log("logged in hua hai..")
   console.log(formData);

   }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label htmlFor="" className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200 gap-x-2'>*</sup>
            </p>
            <input type="email" 
        required 
        value={formData.email}
        name='email'
        onChange={changeHandler}
        placeholder='enter email id...'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>



        <label className='w-full relative' htmlFor="">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200 gap-x-2'>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")}
        required 
        name='password'
        value={formData.password}
        onChange={changeHandler}
        placeholder='password...'
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

        <span
        className='absolute right-3 top-[38px] cursor-pointer'
        onClick={()=>
            setShowPassword((prev) => !prev)
        }>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>

        <Link to="#">
            <p className='text-xs mt-1 max-w-max text-blue-100 ml-auto'>Forgot Password</p>
        </Link>
        </label>
  
       <button className='w-full bg-yellow-300 rounded-md py-2 text-richblack-600'>
          Sign In
       </button>


    </form>
  )
}

export default LoginForm