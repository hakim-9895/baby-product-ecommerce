// import React, { useContext } from "react";
// import { Productcontext } from "./Productprovider";

// function Payment() {
//   const { cart } = useContext(Productcontext);

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );
//   const orderconform=()=>{
//     isOpen={isopen}
//   }

//   console.log("Rendered cart:", cart);
//   console.log("Total Price:", totalPrice);

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
//       <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
//       {cart.length > 0 ? (
//         <div className="space-y-4">
//           {cart.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
//             >
//               <div>
//                 <h4 className="text-sm font-semibold text-gray-800">
//                   {item.name}
//                 </h4>
//                 <p className="text-xs text-gray-600">
//                   Price: ${item.price} x {item.quantity}
//                 </p>
//               </div>
//               <p className="text-sm font-semibold text-gray-800">
//                 ${item.price * item.quantity}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-600">Your cart is empty.</p>
//       )}
//       <div className="mt-6 border-t pt-4">
//         <h3 className="text-md font-bold text-gray-800">
//           Total Amount: <span className="text-green-600">${totalPrice}</span>

//         </h3>
//         <button onClick={orderconform}>conform the order</button>
//       </div>


//       <modal>
//         const isopen={isopen}

//       </modal>
//     </div>
//   );
// }

// export default Payment;
import React, { useContext, useState } from "react";
import { Productcontext } from "./Productprovider";
import axios from "axios";

function Payment() {
  const { cart ,setCart,orderlist,setOrderlist} = useContext(Productcontext);
  const [isOpen, setIsOpen] = useState(false);
  const [FormData, setFormdata] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const orderConform = () => {
    setIsOpen(true); // Open the modal
  };

  const closeModal = async () => {
    const date = new Date(); // Corrected date constructor
    const orderList = {
      date: date.toLocaleDateString(),
      name: FormData.name,
      address: FormData.address,
      payment: FormData.payment,
      items : cart
    };

    try {
        console.log("this is form data ", FormData );
      const useremail = localStorage.getItem("email");
      const response = await axios.get(
        `http://localhost:3004/user?email=${useremail}`
      );
      console.log("this is respose after email fethcing ",response.data)
      const userId = response.data[0].id;

      // console.log("user id",userId); 
      // console.log("orders   ",orderList);
      console.log("previous orders    ,",response.data[0].order);

      // Move cart items to orders
       const updatedOrders = [...response.data[0].order, orderList];
       console.log("this is updated orders .. ",updatedOrders);

    //   // Clear the cart after placing the order
      await axios.patch(`http://localhost:3004/user/${userId}`, {
       order: updatedOrders,
        cart: [], // Clear cart after placing the order
      });

      setIsOpen(false);
      setCart([])
      setOrderlist(updatedOrders)
      console.log(orderlist)
      console.log(orderlist);
      
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <div>
                <h4 className="text-sm font-semibold text-gray-800">{item.name}</h4>
                <p className="text-xs text-gray-600">
                  Price: ${item.price} x {item.quantity}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-md font-bold text-gray-800">
          Total Amount: <span className="text-green-600">${totalPrice}</span>
        </h3>
        <button
          onClick={orderConform}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Confirm the Order
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">Address and Payment Details</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={FormData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={FormData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="mt-1 p-2 border rounded w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <select
                  name="payment"
                  className="mt-1 p-2 border rounded w-full"
                  value={FormData.payment}
                  onChange={handleChange}
                >
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cash">Cash on Delivery</option>
                </select>
              </div>
              <button
                type="button"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={closeModal}
              >
                Submit
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;


