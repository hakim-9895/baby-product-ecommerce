
import React, { useContext, useReducer ,useEffect} from "react";
import { Productcontext } from "./Productprovider";


function Buttons() {
   
const {setCatgeries}=useContext(Productcontext)

  return (
    <div className="flex flex-wrap space-x-4 justify-center bg-white p-2">
      <button  onClick={()=>setCatgeries("clothing")} className="bg-light-green text-gray-800 font-semibold border-2 border-light-green px-6 py-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        Clothings
      </button>
      <button onClick={()=>setCatgeries("skin care")} className="bg-light-green text-gray-800 font-semibold border-2 border-light-green px-6 py-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        Skin Care
      </button>
     
    </div>
  );
}

export default Buttons;

