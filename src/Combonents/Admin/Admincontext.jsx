
import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
export  const Adminprovider =createContext()
function Admincontext({children}) {



    const   [product,setProduct]=useState([])
    const [editproduct ,seteditProduct] = useState({})
    const  [modalisopen,setmodalIsopen]=useState(false)
    const [Users,setUsers]=useState([])


    useEffect(() => {
      const handleUser = async () => {
        try {
          const response = await axios.get('http://localhost:3004/user');
          setUsers(response.data);
          console.log(Users)
           // Append the response data
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      handleUser();
    }, []);


    const Totalsold = Users.reduce((total, user) => {
      const totalUserOrder = user.order.reduce((totalOrder, order) => {
          return totalOrder + order.items.reduce((totalItems, item) => {
              return totalItems + (Number(item.quantity) || 0); 
          }, 0); 
      }, 0); 
      return total + totalUserOrder; 
  }, 0); 
  
  console.log("Total Sold:", Totalsold);
  
console.log(Users)

    
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



const addProducts= async()=>{
  try{
const formatdata={
  ...editproduct,
  quantities:Number(editproduct.quantities)
  
}

  const responce=await axios.post('http://localhost:3004/Products',formatdata)
  setProduct((prev)=>[...prev,responce.data])
  seteditProduct({})
  setmodalIsopen(false)
  }catch(error){
    console.error()
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

  const  Bestsoldproduct= Users.reduce((bestsold,users)=>{
    users.order.forEach((order)=>{
      order.items.forEach((item)=>{
        if(bestsold[item.name]){
          bestsold[item.name]+=item.quantity
        }else{
          bestsold[item.name]=item.quantity
        }
          
          
        }
      )
    })
    return bestsold

  },{})
  // console.log(`this is the top selled${Bestsoldproduct}`)
  // console.log("Bestsoldproduct:", JSON.stringify(Bestsoldproduct, null, 2));


  let Bestsoldname=''
  let bestsoldquantity=0
  for( let product in Bestsoldproduct ){
    if(Bestsoldproduct[product]>bestsoldquantity){
      Bestsoldname=product
      bestsoldquantity=Bestsoldproduct[product]
    }
  }
  console.log(`this is the best product${Bestsoldname}`)

  

  return (
    <div>
        <Adminprovider.Provider value={{product,
                                        handleEdit,
                                        setmodalIsopen,
                                        modalisopen,
                                        editproduct,
                                        seteditProduct,
                                        updatefunction,
                                        addProducts,
                                        Users,
                                        setUsers,
                                        Totalsold,
                                        Bestsoldname,

                                                }}>
            {children}
        </Adminprovider.Provider>
      
    </div>
  )
}

export default Admincontext
