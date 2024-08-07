import React from 'react'
import {useForm} from 'react-hook-form';

//form handling using useForm hook


const App1 = () => {
   const {register, handleSubmit}= useForm();
  return (
    <div>
        <form action="" onSubmit={handleSubmit(data => console.log(data))}>
            <input type="text" placeholder='name' {...register('name')} />
            <input type="email" placeholder='email' {...register('email')} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default App1