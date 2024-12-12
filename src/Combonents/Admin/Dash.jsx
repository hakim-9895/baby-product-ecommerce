// import React, { useContext } from 'react';
// import { Adminprovider } from './Admincontext';


// function Dash() {
//   const { product, Users, Totalsold, Bestsoldname } = useContext(Adminprovider);

//  const totaluser= Users.forEach((user, index) => {
//     console.log(`User ${index + 1} order:`, JSON.stringify(user.order, null, 2));
//   });

//   const sum = product.reduce((acc, currentItem) => {
//     return acc + currentItem.price * currentItem.quantities;
//   }, 0);

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h1 className="text-xl font-semibold mb-4 text-gray-800">Dashboard</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md w-full sm:w-auto">
//             <p className="text-sm font-medium text-gray-600">Total Products</p>
//             <p className="text-lg font-bold text-blue-600">{product.length}</p>
//           </div>

//           <div className="flex justify-between items-center p-2 bg-green-50 rounded-md w-full sm:w-auto">
//             <p className="text-sm font-medium text-gray-600">Total Sold Items</p>
//             <p className="text-lg font-bold text-green-600">{Totalsold}</p>
//           </div>
//           <div className="flex justify-between items-center p-2 bg-green-50 rounded-md w-full sm:w-auto">
//             <p className="text-sm font-medium text-gray-600">Total Users</p>
//             <p className="text-lg font-bold text-green-600">{Users.length}</p>
//           </div>

//           <div className="flex justify-between items-center p-2 bg-purple-50 rounded-md w-full sm:w-auto">
//             <p className="text-sm font-medium text-gray-600">Total Value</p>
//             <p className="text-lg font-bold text-purple-600">${sum.toFixed(2)}</p>
//           </div>

//           <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md w-full sm:w-auto">
//             <p className="text-sm font-medium text-gray-600">Top Sold Product</p>
//             <p className="text-lg font-bold text-yellow-600">{Bestsoldname}</p>
//           </div>

          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dash;

import React, { useContext } from "react";
import { Adminprovider } from "./Admincontext";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dash() {
  const { product, Users, Totalsold, Bestsoldname } = useContext(Adminprovider);

  
  const chartData = {
    labels: ["Total Products", "Total Sold Items", "Total Users"],
    datasets: [
      {
        label: "Dashboard Metrics",
        data: [
          product.length,
          Totalsold,
        //   product.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantities, 0),
          Users.length,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dashboard Overview",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-100 max-h-screen">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4 text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex justify-between items-center p-2 bg-blue-50 rounded-md w-full sm:w-auto">
            <p className="text-sm font-medium text-gray-600">Total Products</p>
            <p className="text-lg font-bold text-blue-600">{product.length}</p>
          </div>

          <div className="flex justify-between items-center p-2 bg-green-50 rounded-md w-full sm:w-auto">
            <p className="text-sm font-medium text-gray-600">Total Sold Items</p>
            <p className="text-lg font-bold text-green-600">{Totalsold}</p>
          </div>
          <div className="flex justify-between items-center p-2 bg-green-50 rounded-md w-full sm:w-auto">
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-lg font-bold text-green-600">{Users.length}</p>
          </div>

          <div className="flex justify-between items-center p-2 bg-purple-50 rounded-md w-full sm:w-auto">
            <p className="text-sm font-medium text-gray-600">Total Value</p>
            <p className="text-lg font-bold text-purple-600">
              ${product.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantities, 0).toFixed(2)}
            </p>
          </div>

          <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-md w-full sm:w-auto">
            <p className="text-sm font-medium text-gray-600">Top Sold Product</p>
            <p className="text-lg font-bold text-yellow-600">{Bestsoldname}</p>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-4">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Dash;
