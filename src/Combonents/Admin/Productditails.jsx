import React, { useContext, useState } from 'react';
import { Adminprovider } from './Admincontext';
import { BsCartPlusFill } from "react-icons/bs";
import { MdAddToPhotos } from "react-icons/md";


function Productditails() {
  const { product,
          modalisopen,
          handleEdit,
          editproduct,
          seteditProduct,
          setmodalIsopen,
          updatefunction
        } = useContext(Adminprovider);


 
 console.log(editproduct);
 const handleInput=(e)=>{
    const {name,value}=e.target
    seteditProduct({...editproduct,[name]:value})
       



 }
   console.log("this editing input"+editproduct)
 
 
  const handleDelete = (id) => {
    console.log(`Deleting product with id: ${id}`);
    // Add your delete logic here
  };

  const handleAdd = () => {
    setmodalIsopen(true)
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2" onClick={handleAdd}>
      <MdAddToPhotos /> Add product
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 bg-white text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Photo</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Stock</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  <img src={product.url} alt="Product" className="h-20 w-20 object-cover rounded" />
                </td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.quantities}</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {modalisopen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Enter Product Details</h2>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={editproduct.name}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="text"
                name="url"
                value={editproduct.url}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Quantities</label>
              <input
                type="number"
                name="quantities"
                value={editproduct.quantities}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quantities"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={editproduct.price}
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter price"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={ ()=>setmodalIsopen(false)}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
             onClick={ updatefunction}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productditails;
