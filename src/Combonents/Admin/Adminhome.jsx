import React from 'react'
import { LuShoppingBag } from "react-icons/lu";


function Adminhome() {
  return (
  

  
  
        <div className="flex h-screen">
          {/* Sidebar */}
          <nav className="bg-green-600 text-white w-64 flex flex-col justify-between">
            {/* Logo Section */}
            <div className="p-4 text-center font-bold text-lg">
              <a href="/">My App</a>
            </div>
    
            {/* Navigation Links */}
            <ul className="flex-1">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/User">Users</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="/settings"><LuShoppingBag />        product details</a>
                </li>
        
            </ul>
    
          
            <div className="p-4 text-center border-t border-gray-700">
              <a href="/logout" className="text-red-500">
                Logout
              </a>
            </div>
          </nav>
    
          {/* Main Content */}
          <div className="flex-1 bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p>
              This is the main content area. The sidebar is always visible on the
              left.
            </p>
          </div>
        </div>
      
    
    
    
    
  )
}

export default Adminhome

