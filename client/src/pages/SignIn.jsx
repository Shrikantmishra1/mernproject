import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice';
const SignIn = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const [formData,setFormData]=useState({});
     const {loading,error}=useSelector((state)=>state.user);
const handelChange=(e)=>{
    setFormData({ ...formData,
        [e.target.id]:e.target.value});
}
 
const handelSubmit= async(e)=>{
e.preventDefault();
try {
    dispatch(signInStart());
    const res=await fetch('/api/auth/signin/',{

        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),

    });
    const data=await res.json();
    
      
    if(data.success===false){
        dispatch(signInFailure(data));
        return ;
    }
    dispatch(signInSuccess(data));
    navigate('/');
} catch (error) {
      dispatch(signInFailure(error));
}


}
  return (
     <div className='p-4 max-w-lg mx-auto'>
         <h1 className='text-3xl text-center font-semibold my-7'>SignIn </h1>
 
         <form className='flex flex-col gap-4' onSubmit={handelSubmit}>
           
            <input type='email' placeholder='Email.'
            id='email' className='bg-slate-100 p-3 shadow-xl rounded-lg' onChange={handelChange}/>
            <input type='password' placeholder='Password'
            id='password' className='bg-slate-100 p-3 shadow-xl rounded-lg' onChange={handelChange}/>
            <button  disabled={loading}  className='bg-five text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                 {loading ? 'Loading...' :' Sign In'}

            </button>
           
         </form>
         <div className='flex gap-2 mt-5 '>
                <p className='shadow-inner'> Don`t  Have an Account ?</p>
                <Link to="/sign-up">
                <span className='text-six shadow-inner' >Sign-up</span>
                </Link>
                 
            </div>
            <p className='text-three'>{error ? error.message || 'Wrong credentials ' :""}</p>
     </div>

  )
}

export default SignIn