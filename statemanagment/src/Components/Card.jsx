import React from 'react'

const Card = ({value, index, handleClick}) => {
    const {name, title, added} = value;
  return (
    <div className='card-main'>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <button className={!added ? 'btn1' : 'btn2'} onClick={()=>handleClick(index)}>{(!added ? "Add to favourites" : " Added")}</button>
    </div>
  )
}

export default Card