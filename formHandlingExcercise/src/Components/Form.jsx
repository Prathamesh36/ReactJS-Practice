import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleFormSubmitData}) => {
    const {register, handleSubmit, reset}=useForm();

    const handleFormSubmit=(data)=>{
        handleFormSubmitData(data);
        reset();
    }

    return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10 flex-wrap justify-center' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')}className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name'/>
            <input {...register('email')}className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Email'/>
            <input {...register('image')}className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image URL'/>
            <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold cursor-pointer' type="submit" />
        </form>

    </div>
  )
}

export default Form