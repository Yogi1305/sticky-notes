import React from 'react'
import plusIcon from "../../assest/plus.png"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <img src={plusIcon} alt="Add" />
    </div>
  )
}

export default Sidebar