

import React, { useContext, useEffect } from 'react';
import { Productcontext } from './Productprovider';
import { ToastContainer, toast } from 'react-toastify';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons
import { useNavigate } from 'react-router-dom';
const Cart = React.memo(({ isOpen, onClose }) => {
const  navitgation=useNavigate()


  const { cart, useremail, removeCart, setCart } = useContext(Productcontext);
  console.log(useremail);

 
  const   handleNavigation =()=>{
   navitgation('payment')
  }

  useEffect(() => {
    if (!useremail) {
      toast.error("Oops! Something went wrong.");
    }
  }, [useremail]);

const handleincrement=(item)=>{
  console.log(cart)
    const updatedcart=cart.map((p)=>{
        if(p.id==item){
            return {...p,quantity:p.quantity+1,}
        }
        return p
    })
    setCart(updatedcart)
    
}
const handledecrement=(item)=>{
    const updatedcart=cart.map((p)=>{
        if(p.id==item){
            return {...p,quantity:p.quantity>1?p.quantity-1:1}
        }
        return p
    })
    setCart(updatedcart)
    
}

  
  
  if (!isOpen) return null; 



  
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
   console.log('rerendeered cart')
  return (
    <div
      className="fixed top-0 right-0 w-[600px] h-[80vh] bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="w-full h-full bg-white text-green-600 p-6 rounded-lg shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <h2 className="text-xl font-bold mb-6 text-center text-green-700">Your Cart</h2>

        {/* Cart Items List */}
        <ul className="space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-green-50 p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <img
                    src={item.url} // Use the actual product image URL
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">{item.name}</span>
                    <span className="text-sm text-gray-500">Price: ${item.price}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 border-2 border-solid">
                  {/* Increase/Decrease Buttons */}
                  <button  onClick={()=>handledecrement(item.id)}
                    className="w-10 h-10  text-black rounded-full flex justify-center items-center"
                    // Handle Decrease Quantity
                  >
                    <FaMinus className="text-xl" />
                  </button>
                  <span className="text-lg">Quantity: {item.quantity}</span>
                  <button   onClick={()=>handleincrement(item.id)}
                    className="w-10 h-10  text-black rounded-full flex justify-center items-center"
                    // Handle Increase Quantity
                  >
                    <FaPlus className="text-xl" />
                  </button>
                </div>
                <div>
                  <span className="text-lg font-semibold">Total: ${item.price * item.quantity}</span>
                </div>
                <button
                  onClick={() => removeCart(item.id)}
                  className="text-sm text-red-500 mt-2 hover:text-red-700"
                >
                  Remove product
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Total Price */}
        {cart.length > 0 && (
          <div className="p-3 mt-6 flex justify-between items-center text-xl font-semibold text-green-700">
            <span>Total Price</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        )}

        {/* Close Button */}
    
        <div className="flex justify-evenly">
        <button
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
        {(cart.length>0&&
        <button onClick={handleNavigation} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ">
            order place
        </button>)
}
        </div>
      </div>
    
    </div>
  );
});

export default Cart;


