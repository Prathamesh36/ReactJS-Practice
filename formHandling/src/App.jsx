import { useRef, useState } from 'react'

function App() {
  // const name = useRef(null);
  // const age = useRef(null);

  const[val, setVal]= useState({name:"", email:""})

  const handleClick = (event) =>{
      event.preventDefault();
     // console.log(name.current.value, age.current.value);   ///for useRef
     console.log(val);  //for component 
  }

  return (
    <>
      <form action="" onSubmit={handleClick}>
        {/* <input ref={name} type="text" placeholder='name'/>/
        <input ref={age} type="text" placeholder='age'/> */}
        <input type="text" placeholder='name' onChange={(event)=>setVal({...val, name:event.target.value})} />
        <input type="email" placeholder='email' onChange={(event)=>setVal({...val, email:event.target.value})}/>
        <input type="submit" />
      </form>
    </>
  )
}

export default App
