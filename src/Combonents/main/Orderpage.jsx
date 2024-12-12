// // import React, { useContext, useEffect, useState } from 'react'
// // import { Productcontext } from './Productprovider'
// // import axios from 'axios'

// // function Orderpage() {
// //     const [order, setorders] = useState([])
// //     useEffect(()=>{
    
// //  const oderfect=async()=>{
// //   try{


  
// //   const useremail= localStorage.getItem('email')
// //   console.log(useremail)
// //   const  responce=await axios.get(`http://localhost:3004/user?email=${useremail}`)
// //   console.log(responce.data[0].order);
// //   const orders=responce.data[0].order
// //      setorders(orders)
// //      console.log(order);}
// //      catch(error){
// //       console.error(error)
// //      }
     
// //  }



// //  oderfect()   }
// //     ,[])

// //   return (
// //     <div><ul>
      
    
// //     </ul>
      
      
      
// //     </div>
// //   )
// // }

// // export default Orderpage



// import React, { useContext, useEffect, useState } from 'react'
// import { Productcontext } from './Productprovider'
// import axios from 'axios'

// function Orderpage() {
//     const [order, setorders] = useState([])
//     useEffect(()=>{
    
//  const oderfect=async()=>{
//   try{


  
//   const useremail= localStorage.getItem('email')
//   console.log(useremail)
//   const  responce=await axios.get(`http://localhost:3004/user?email=${useremail}`)
//   console.log(responce.data[0].order);
//   const orders=responce.data[0].order
//      setorders(orders)
//      console.log(order);}
//      catch(error){
//       console.error(error)
//      }
     
//  }



//  oderfect()   }
//     ,[])

//   return (
//     <div><ul>
      
    
//     </ul>
      
      
      
//     </div>
//   )
// }

// export default Orderpage



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Orderpage() {
  const [orders, setOrders] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
 const navigation = useNavigate()
 const handleback=()=>{
  navigation("/")
 }
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const useremail = localStorage.getItem('email'); 
        if (!useremail) throw new Error('User email not found in localStorage.');

        const response = await axios.get(`http://localhost:3004/user?email=${useremail}`);
        const fetchedOrders = response.data[0]?.order || []; 
        setOrders(fetchedOrders); 
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading orders...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }


  return (
    <div className="p-6">
        <button
                  className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-all"
              onClick={handleback}  >
                  back
                </button>
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Your Orders</h1>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{order.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Address: <span className="font-medium">{order.address}</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Date: <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span>
                  </p>
                </div>
                <button
                  className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-all"
                >
                  View Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
}

export default Orderpage;
