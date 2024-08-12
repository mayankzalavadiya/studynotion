import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Navigate, useNavigate } from 'react-router-dom';

function SignUpForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [accounttype,setAccounttype] = useState("student")
    const [showPassword,setShowPassword] = useState(false)
    const [showPassword1,setShowPassword1] = useState(false)
    function changeHandler(e){ 
        setFormData((prev)=>(
            {
                ...prev,
                [e.target.name] : e.target.value
            }
        ))
    }

    function submitHandler(e){
       e.preventDefault();
       if(formData.password != formData.confirmpassword){
        toast.error("password not match")
        return;
       }
       setIsLoggedIn(true);
       toast.success("Account Created");
       const AccountData = {
        ...formData
       };
       console.log("data");
       console.log(AccountData)

       navigate("/dashboard")
       console.log("sign up hua hai..")
       console.log(formData);
    } 

   

  return (
    <div>
        {/* student-instructore */}

        <div
        className='flex bg-richblack-800 h-full p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accounttype==="student"
             ?
               "bg-richblack-900 text-richblack-5"
             : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccounttype("student")}>Student</button>
            <button 
            className={`${accounttype==="Instructor"
            ?
              "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200" } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccounttype("Instructor")}>Instructor</button>

        </div>

        <form onSubmit={submitHandler}>
           {/* name */}
            <div className='flex flex-row gap-x-4 mt-4'>
            <label htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name:<sup  className='text-pink-200 gap-x-2'>*</sup></p>
                <input type="text" 
                required
                name='firstname'
                onChange={changeHandler}
                placeholder='enter the first Name...'
                value={formData.firstname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>

            <label htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name:<sup  className='text-pink-200 gap-x-2'>*</sup></p>
                <input type="text" 
                required
                name='lastname'
                onChange={changeHandler}
                placeholder='enter the Last Name...'
                value={formData.lastname}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
            </div>
            
            {/* email */}
            <label className='mt-4' htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mt-3 mb-1 leading-[1.375rem]'>Email Address:<sup  className='text-pink-200 gap-x-2'>*</sup></p>
                <input type="email" 
                required
                name='email'
                onChange={changeHandler}
                placeholder='enter the Email...'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-[95%] p-[12px]'/>
            </label>

          {/* password */}
            <div className='flex flex-row gap-x-4 mt-4'>
            <label className='relative' htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password:<sup  className='text-pink-200 gap-x-2'>*</sup></p>
                <input type={showPassword ? ("text") : ("password")} 
                required
                name='password'
                onChange={changeHandler}
                placeholder='create password...'
                value={formData.password}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>
            setShowPassword((prev) => !prev)
        }>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
            </label>

            <label className='relative' htmlFor="">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password:<sup  className='text-pink-200 gap-x-2'>*</sup></p>
                <input type={showPassword1 ? ("text") : ("password")} 
                required
                name='confirmpassword'
                onChange={changeHandler}
                placeholder='confirm password...'
                value={formData.confirmpassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=>
            setShowPassword1((prev) => !prev)
        }>
            {showPassword1 ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
            </label>
            </div>

            <button className='w-full bg-yellow-300 rounded-md py-2 text-richblack-600 mt-5'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm