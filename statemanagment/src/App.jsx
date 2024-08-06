import React, { useState } from "react"
import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
function App() {

  const data = [
    {name:"Prathamesh Patil", title:"sdasfefasfasdf", added: false},
    {name:"Lokesh Kohli", title:"fsdf sd sqw asfgs", added: false},
    {name:"Mayank Borse", title:"rtg rehrtfasf wsfsgr", added: false},
    {name:"Shubham Pakhale", title:"sder fhrthrf ", added: false},
    {name:"Ram Nerpagar", title:"rhtg swa3 g rjyg", added: false},
  ]

  const [song, setSong] = useState(data);
  const handleClick = (index)=>{
      setSong((prev)=>{
      return prev.map((item, itemIndex)=>{
        if(itemIndex===index) return {...item, added:!item.added};
        return item;
      })
    })
  }

  return (
    <>
      <div className="main-div">
        <Navbar data={song}/>
        <div className="mid-div">
          {song.map((items, index)=>{
            return(
              <Card value={items} index={index} key={index} handleClick={handleClick}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
