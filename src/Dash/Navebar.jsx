












import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { Productcontext } from "./Productprovider";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoReorderFour } from "react-icons/io5"

function Navebar({toggleModal}) {
const navition = useNavigate()
const  {setSearch,login,setLogin, handlLogin,handlLogout}= useContext(Productcontext)
  const username=localStorage.getItem('name')
  const handleSearch=(e)=>{
   setSearch(e.target.value)
  }

  return (
    <div>
      <nav className= "  fixed top-0 left-0 w-full bg-light-green p-4 shadow-md z-10"  >
        
        <div className=" flex items-center justify-between" >
          {/*  logo*/}
         
          <img
        src="src/assets/Screenshot 2024-11-28 100353.png"
        alt="logo"
        className="h-10"></img>
  
         


          {/* Search */}


          <div className="flex items-center gap-2">
            <label htmlFor="search" className="text-gray-700 font-medium">
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-custom-teal"
              onChange={handleSearch}
            />
          </div>

          


          <div className="flex items-center gap-6">

            
          


            <div className="flex items-center gap-1 text-gray-700">
              <button onClick={()=>navition('orderlist')}>  <IoReorderFour /></button>
          

              
            </div>

            
            <div className="flex items-center gap-1 text-gray-700">
             <button onClick={toggleModal}> <CiShoppingCart className="text-custom-teal" /></button>
              <span className="hidden sm:inline">Cart</span>
            </div>

    
            <div className="flex items-center gap-1 text-gray-700">
              {(login)?
            
             <button onClick={handlLogout}><CiLogout className="text-custom-teal"/> </button> :
             <button onClick={ handlLogin}><FiLogOut className="text-custom-teal"/></button>
            }
            </div>

            <div className="flex items-center gap-1 text-gray-700">
              <MdAccountCircle className="text-custom-teal" />

              <span className="hidden sm:inline">{username}</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navebar;