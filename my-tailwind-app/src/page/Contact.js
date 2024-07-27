import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit  = async (data) => {
    const useInfo={
      name:data.name,
      email:data.email,
      message:data.message,
    }
    try{
      await axios.post('https://getform.io/f/bgdyjkja' ,useInfo)
      toast.success("your message has been sent")
    }catch(error){
      console.log("something went wrong");
    }
  };
  return (
    <>
      <div name="Contact" className='max-w-screen-2xl container md:px-20 mx-auto px-4 mt-10 '>
         <h1 className='text-3xl font-bold mb-4 text-teal-500'>Contact Me</h1>
         <span className='text-sm font-semibold text-purple-500'>Fill out the form below the contact me</span>
         <div className='flex flex-col justify-center items-center mt-5 '>
         {/* action='https://getform.io/f/bgdyjkja' */}
          {/* method="POST" */}
           <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 rounded-xl '>
            <h1 className='text-xl font-semibold mb-3'>send your message</h1>
              <div className='flex flex-col mb-3'>
                <label className=' text-gray-700 block mb-2'>FullName</label> 
                <input 
                   required  
                   type="text" 
                   id='Name'
                   name="name"
                   placeholder='Enter Name'
                   className='shadow appearance-none border rounded px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-slate-400'
                   {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
              </div>
              <div className='flex flex-col mb-3'>
                <label className=' text-gray-700 block mb-2'>Email Address</label> 
                <input 
                   required  
                   type="email" 
                   id='email'
                   name='email'
                   placeholder='Enter Email Address'
                   className='shadow appearance-none border rounded px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-slate-400'
                   {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
              </div>
              <div className='flex flex-col mb-3'>
                <label className=' text-gray-700 block mb-2'>message</label> 
                <textarea 
                   required  
                   type="text" 
                   id='message'
                   name='message'
                   placeholder='text your Message'
                   className='shadow appearance-none border rounded px-2 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-slate-400'
                   {...register("message", { required: true })} />
                    {errors.message && <span>This field is required</span>}
              </div>
              <button type='submit' className='text-[#fff] bg-fuchsia-500 px-3 py-2 rounded-lg hover:bg-fuchsia-950 duration-300'>send</button>
           </form>
         </div>
      </div>
    </>
  )
}

export default Contact
