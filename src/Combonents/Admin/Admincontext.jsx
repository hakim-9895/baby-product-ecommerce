
import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
export  const Adminprovider =createContext()
function Admincontext({children}) {
    const   [product,setProduct]=useState([])
    const [editproduct ,seteditProduct] = useState({})
    const  [modalisopen,setmodalIsopen]=useState(false)
    
 const updatefunction=async()=>{
    try{
        const responce= await axios.put(`http://localhost:3004/Products/${editproduct.id}`,editproduct)
        setProduct((prev)=>
        prev.map((product)=>
        product.id===editproduct.id?{...product,...editproduct}:product))
        setmodalIsopen(false)
        seteditProduct({})
    }catch(error){
        console.log(error)
    }


}



  const handleEdit = (product) => {
    console.log(`Editing product with id: `);
    setmodalIsopen(true)
    seteditProduct(product)
    
  };
    useEffect(() => {
    
        const fetchProducts = async () => {
          try {
            const response = await axios.get("http://localhost:3004/Products");
            setProduct(response.data);
          
            
    
        
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        fetchProducts();
      }, []);
  return (
    <div>
        <Adminprovider.Provider value={{product,
                                        handleEdit,
                                        setmodalIsopen,
                                        modalisopen,
                                        editproduct,
                                        seteditProduct,
                                        updatefunction,

                                                }}>
            {children}
        </Adminprovider.Provider>
      
    </div>
  )
}

export default Admincontext
