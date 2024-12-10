// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { MdOutlineRemoveRedEye } from "react-icons/md";


// function Userdetails() {
//   const [Users, setUser] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3004/user');
//         console.log("Fetched Users:", response.data);
//         // console.log("status of user:"+response.status);
//         response.data.forEach(user => {
//             console.log(`User: ${user.username}, Status: ${user.status}`);
//           });
        
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);



//   const handlestatus=async(userid,currentstatus)=>{
//     try{
//     const responce= await axios.patch(`http://localhost:3004/user/${userid}`,
//         {status:!currentstatus}

//     )
//     console.log(`User: ${user.username}, Status: ${user.status}`);
//     setUser((prevUsers) =>
//         prevUsers.map((user) =>
//           user.id === userid ? { ...user, status: !currentstatus } : user
//         )
//       );
// }catch(error){
//   console.error(error)
// }
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Details</h1>
//       {Users.length >= 0 ? (
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="px-4 py-2 border-b">#</th>
//               <th className="px-4 py-2 border-b">User Name</th>
//               <th className="px-4 py-2 border-b">User email</th>
//               <th className="px-4 py-2 border-b">order</th>
//               <th className="px-4 py-2 border-b">user current status</th>
              
            
//             </tr>
//           </thead>
//           <tbody>
//             {Users.map((user, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="px-4 py-2 border-b">{index + 1}</td>
//                 <td className="px-4 py-2 border-b">{user.username}</td>
//                 <td className="px-4 py-2 border-b">{user.email}</td>
//                 <td className="px-4 py-2 border-b"><MdOutlineRemoveRedEye /></td>
//                 <td className="px-4 py-2 border-b"><button onClick={()=>handlestatus(user.id,user.status)} className={user.status===true?'bg-red-600':'bg-green-500'}>{(user.status)?"Block":"unblock"}</button></td>


             
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-600">No users found.</p>
//       )}
//     </div>
//   );
// }

// export default Userdetails;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { MdOutlineRemoveRedEye } from "react-icons/md";

// function Userdetails() {
//   const [Users, setUser] = useState([]);
//   const [orderDitails,setOrderditails]=useState({})
//   const [modalisopen,setModalisopen]=useState(null)
  
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:3004/user');
//         console.log("Fetched Users:", response.data);
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []); 

  
//   const handlestatus = async (userid, currentstatus) => {
    
//     const updatedUsers = Users.map((user) =>
//       user.id === userid ? { ...user, status: !currentstatus } : user
//     );
//     setUser(updatedUsers);

//     try {
  
//       const response = await axios.patch(`http://localhost:3004/user/${userid}`, {
//         status: !currentstatus
//       });

    
//       console.log(`User: ${response.data.username}, Status: ${response.data.status}`);
//     } catch (error) {
    
//       console.error("Error updating user status:", error);


//       const user = Users.find(user => user.id === userid);
//       if (user) {
//         console.log(`Failed to update User: ${user.username}, Status: ${user.status}`);
//       }

    
//       const revertedUsers = Users.map((user) =>
//         user.id === userid ? { ...user, status: currentstatus } : user
//       );
//       setUser(revertedUsers);
//     }
//   };


//   const showOrderdetails=(orders)=>{
//     setOrderditails(orders)
//     setModalisopen(true)

//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">User Details</h1>
//       {Users.length > 0 ? (
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="px-4 py-2 border-b">#</th>
//               <th className="px-4 py-2 border-b">User Name</th>
//               <th className="px-4 py-2 border-b">User Email</th>
//               <th className="px-4 py-2 border-b">Order</th>
//               <th className="px-4 py-2 border-b">Current Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Users.map((user, index) => (
//               <tr key={user.id} className="hover:bg-gray-100">
//                 <td className="px-4 py-2 border-b">{index + 1}</td>
//                 <td className="px-4 py-2 border-b">{user.username}</td>
//                 <td className="px-4 py-2 border-b">{user.email}</td>
//                 <td className="px-4 py-2 border-b">
//                <button onClick={()=>showOrderdetails(user.order)}>   <MdOutlineRemoveRedEye className="text-gray-500 cursor-pointer" /></button>
//                 </td>
//                 <td className="px-4 py-2 border-b">
//                   <button
//                     onClick={() => handlestatus(user.id, user.status)}
//                     className={`py-2 px-4 rounded ${
//                       user.status ? 'bg-red-600' : 'bg-green-500'
//                     } text-white`}
//                   >
//                     {user.status ? "Block" : "Unblock"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="text-gray-600">No users found.</p>
//       )}


// {modalisopen&&orderDitails&&(
//   <div>
//     <div>{orderDitails.map((orders,index)=>(
//       <div key={index}><p>{orders.name}</p>
//       <p>{orders.address}</p>
//       {orders.item.map((p,index)=>(
//         <div key={index}>
//         <p>{p.name}</p>
//         <p>{p.price}</p>
//         <p>{p.payment}</p>
//         </div>
//       ))}
//       </div>
    
//     ))}</div>

//   </div>
// )}

//     </div>
//   );
// }

// export default Userdetails;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Userdetails() {
  const [Users, setUser] = useState([]);
  const [orderDitails, setOrderditails] = useState([]);
  const [modalisopen, setModalisopen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3004/user');
        console.log("Fetched Users:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handlestatus = async (userid, currentstatus) => {
    const updatedUsers = Users.map((user) =>
      user.id === userid ? { ...user, status: !currentstatus } : user
    );
    setUser(updatedUsers);

    try {
      const response = await axios.patch(`http://localhost:3004/user/${userid}`, {
        status: !currentstatus,
      });
      console.log(`User: ${response.data.username}, Status: ${response.data.status}`);
    } catch (error) {
      console.error("Error updating user status:", error);
      const revertedUsers = Users.map((user) =>
        user.id === userid ? { ...user, status: currentstatus } : user
      );
      setUser(revertedUsers);
    }
  };

  const showOrderdetails = (orders) => {
    if (Array.isArray(orders)) {
      setOrderditails(orders);
      setModalisopen(true);
    } else {
      console.error("Invalid order details:", orders);
    }
  };

  const closeModal = () => {
    setModalisopen(false);
    setOrderditails([]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      {Users.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">User Name</th>
              <th className="px-4 py-2 border-b">User Email</th>
              <th className="px-4 py-2 border-b">Order</th>
              <th className="px-4 py-2 border-b">Current Status</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{user.username}</td>
                <td className="px-4 py-2 border-b">{user.email}</td>
                <td className="px-4 py-2 border-b">
                  <button onClick={() => showOrderdetails(user.order)}>
                    <MdOutlineRemoveRedEye className="text-gray-500 cursor-pointer" />
                  </button>
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handlestatus(user.id, user.status)}
                    className={`py-2 px-4 rounded ${
                      user.status ? 'bg-red-600' : 'bg-green-500'
                    } text-white`}
                  >
                    {user.status ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No users found.</p>
      )}

      {modalisopen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Order Details</h2>
            <div>
              {orderDitails.map((order, index) => (
                <div key={index} className="mb-4">
                  <p className="font-bold">Name: {order.name}</p>
                  <p>Address: {order.address}</p>
                  {order.items.map((p, idx) => (
                    <div key={idx} className="pl-4">
                      <p>Item Name: {p.name}</p>
                      <p>Price: {p.price}</p>
                      <p>Payment: {p.payment}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userdetails;


