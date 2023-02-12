import React from 'react'
import  { Outlet, Link } from "react-router-dom";
const About = () => {
  return (
    <div>
        <h4>v5.5</h4>
        <Link to="/">Go Back</Link>
        <Outlet />
    </div>
  )
}

export default About