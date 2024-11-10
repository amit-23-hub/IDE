import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Login() {

    const [Email , setEmail] = useState() ;
    const [Password , setPassword] = useState() ;

    const submitForm = (e)=>{
        e.preventDefault();
    }

  return (
   <>
    <div className="container w-screen min-h-screen flex items-center justify-between pl-[100px]">

    <div className='left w-[40%]'>
        <img className='w-[200px]' src='#'  alt='logo' />

        <form action='POST' onSubmit={submitForm} className='w-full mt-5'>
            
            
            <div className='inputBox'>
                <input onChange={(e)=>{setEmail(e.target.value)}}  value = {Email} type='email' placeholder='email' required />
            </div>
            <div className='inputBox'>
                <input onChange={(e)=>{setPassword(e.target.value)}}  value = {Password} type='password' placeholder='Password'  required />
            </div>
            <p className='text-gray-400'>Dont  have an account <Link className= 'text-blue-600' to='/SignUp'> Signup</Link></p>

            <button className='btnBlue w-full mt-[20px]'>Login</button>
        </form>
    </div>
    <div className='right w-[55%]'>
        <img className='w-[100%] object-cover h-[100vh]' src='#' alt='image' />
    </div>
    </div>
   </>
  )
}
