import { LuShoppingBag } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { Outlet, Link, useNavigate } from "react-router-dom";

function Adminhome() {
 const navigate = useNavigate()
const handlelogout=()=>{
  localStorage.clear()
  navigate("/login")

}


  return (
    <div className="flex h-screen">
      {/* Sidebar */}f
      <nav className="bg-green-600 text-white w-64 flex flex-col justify-between">
        <div className="p-4 text-center font-bold text-lg">
          <Link to="/">My App</Link>
        </div>
        <ul className="flex-1">
          <li className="px-4 py-2 hover:bg-gray-700">
         <Link to="/admin/User">
              <FaUserCircle className="inline-block mr-2" />
              Users
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/admin/productditails">
              <LuShoppingBag className="inline-block mr-2" />
              Product Details
            </Link>
            </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/admin/dash">
              <LuShoppingBag className="inline-block mr-2" />
              dash board
            </Link>
          </li>
        </ul>
        <div className="p-4 text-center border-t border-gray-700">
          {/* <Link to="/logout" className="text-red-500">
            Logout
          </Link> */}
          <button onClick={handlelogout}> log out</button>
        </div>
      </nav>

    
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> 
      </main>
    </div>
  );
}

export default Adminhome;
