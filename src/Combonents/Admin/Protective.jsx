import React from 'react'
import {  Navigate, Outlet, useNavigate } from 'react-router-dom'

function Protective() {
    const navigation=useNavigate()
  return (
    <div>
        {localStorage.getItem("role")?<Outlet/>: <Navigate to={"/login"}/>}
      
    </div>
  )
}

export default Protective
