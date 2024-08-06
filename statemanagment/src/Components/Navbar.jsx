import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='navbar1'>
        <h3 className='orange-title'>Orange</h3>
        <div className='right-btn'>
            <h3>Favourites</h3>
            <h4 className='count'>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar