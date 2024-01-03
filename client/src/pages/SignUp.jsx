import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const SignUp = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({});
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(false);
const handelChange=(e)=>{
    setFormData({ ...formData,
        [e.target.id]:e.target.value});
}
 
const handelSubmit= async(e)=>{
e.preventDefault();
try {
    setLoading(true);
    const res=await fetch('/api/auth/signup/',{

        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),

    });
    const data=await res.json();
    setLoading(false);
    setError(false);
    if(data.success===false){
        setError(true);
        return ;
    }
    navigate('/');
} catch (error) {
    setLoading(false);
    setError(true);
    console.log(error);
}


}
  return (
     <div className='p-4 max-w-lg mx-auto'>
         <h1 className='text-3xl text-center font-semibold my-7'>Sign up     </h1>
 
         <form className='flex flex-col gap-4' onSubmit={handelSubmit}>
            <input type='text' placeholder='Username'
            id='username' className='bg-slate-100 p-3 shadow-xl rounded-lg' onChange={handelChange} />
            <input type='email' placeholder='Email.'
            id='email' className='bg-slate-100 p-3 shadow-xl rounded-lg' onChange={handelChange}/>
            <input type='password' placeholder='Password'
            id='password' className='bg-slate-100 p-3 shadow-xl rounded-lg' onChange={handelChange}/>
            <button  disabled={loading}  className='bg-five text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                 {loading ? 'Loading...' :' Sign up'}

            </button>
           
         </form>
         <div className='flex gap-2 mt-5 '>
                <p className='shadow-inner'> Have an Account ?</p>
                <Link to="/sign-in">
                <span className='text-six shadow-inner' >Sign-In</span>
                </Link>
                 
            </div>
            <p className='text-three'>{error && 'Something went wrong'}</p>
     </div>

  )
}

export default SignUp