import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
     <div className='p-4 max-w-lg mx-auto'>
         <h1 className='text-3xl text-center font-semibold my-7'>Sign up     </h1>
 
         <form className='flex flex-col gap-4'>
            <input type='text' placeholder='Username'
            id='username' className='bg-slate-100 p-3 shadow-xl rounded-lg'/>
            <input type='email' placeholder='Email.'
            id='email' className='bg-slate-100 p-3 shadow-xl rounded-lg'/>
            <input type='password' placeholder='Password'
            id='password' className='bg-slate-100 p-3 shadow-xl rounded-lg'/>
            <button className='bg-five text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                  Sign up
            </button>
            <div className='flex gap-2 mt-5 '>
                <p className='shadow-inner'> Have an Account ?</p>
                <Link to="/sign-in">
                <span className='text-six shadow-inner' >Sign-In</span>
                </Link>
                 
            </div>
         </form>
     </div>

  )
}

export default SignUp