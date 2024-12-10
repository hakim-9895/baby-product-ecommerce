






// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Productcontext } from "./Productprovider";
// ;


// function ProductsList() {
//   const { product, loading, addCart } = useContext(Productcontext);
//   const navigate = useNavigate();

//   const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

//   const closeModal = () => setSelectedProduct(null);

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading products...</p>;
//   }

//   return (
//     <div className="relative">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//         {product?.map((product) => (
//           <div
//             key={product.id}
//             onClick={() => setSelectedProduct(product)}
//             className="relative border border-gray-200 rounded-lg shadow-xl overflow-hidden bg-white transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
//           >
//             {/* Product Image */}
//             <div className="relative">
//               <img
//                 src={product.url}
//                 alt={product.name}
//                 className="w-full h-64  transition-transform duration-300 ease-in-out"
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h2 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-all duration-200">
//                 {product.name}
//               </h2>
//               <p className="text-gray-600 text-sm mt-2">{product.description}</p>
//               <p className="text-green-600 font-bold mt-4">₹{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 p-6">
//             <div className="flex justify-between items-center border-b pb-2">
//               <h2 className="text-xl font-semibold text-gray-800">{selectedProduct.name}</h2>
//               <button
//                 className="text-gray-500 hover:text-red-600 transition"
//                 onClick={closeModal}
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="mt-4">
//               <img
//                 src={selectedProduct.url}
//                 alt={selectedProduct.name}
//                 className="w-full h-64 object-cover rounded-md"
//               />
//               <p className="mt-4 text-gray-600">{selectedProduct.description}</p>
//               <p className="text-green-600 font-bold mt-4 text-lg">
//                 ₹{selectedProduct.price}
//               </p>
//             </div>
//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => {
//                   addCart(selectedProduct);
//                   closeModal();
//                 }}
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductsList;


import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Productcontext } from "./Productprovider";

function ProductsList() {
  const { product, loading, addCart } = useContext(Productcontext);
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const closeModal = () => setSelectedProduct(null);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        {product?.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="relative border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.url}
                alt={product.name}
                className="object-center w-full h-64 object-cover transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-all duration-200">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <p className="text-green-600 font-bold mt-4">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[90vh] overflow-auto p-6">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {selectedProduct.name}
              </h2>
              <button
                className="text-gray-500 hover:text-red-600 transition"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <img
                src={selectedProduct.url}
                alt={selectedProduct.name}
                className=" h-64 rounded-md"
              />
              <p className="mt-4 text-gray-600">{selectedProduct.description}</p>
              <p className="text-green-600 font-bold mt-4 text-lg">
                ₹{selectedProduct.price}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  addCart(selectedProduct);
                  closeModal();
                }}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;


