import React from 'react'
import { Link } from "react-router-dom"



const Footer = () => {
  return (
   <div>
    <Link to='/about' style={{ "backgroundColor" : "red", color: "black" }}>About</Link>
   </div>


  )
}

export default Footer