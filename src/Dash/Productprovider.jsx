
//         cart,






import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Productcontext = createContext();

const Productprovider = React.memo(({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catgories, setCatgeries] = useState("");
  const [allproduct, setAllproduct] = useState([]);
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState(true);
  const [cart, setCart] = useState([]);
  const [orderlist,setOrderlist ]= useState([])
  const navigate = useNavigate();

  
  const useremail = localStorage.getItem("email");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3004/Products");
        setProduct(response.data);
        setAllproduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  
  useEffect(() => {
    if (!useremail) {
      console.warn("No user email found in local storage.");
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3004/user?email=${useremail}`
        );
        const cartData = response.data[0]?.cart || [];
        setCart(cartData);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCart([]); // Ensure cart is never undefined
      }
    };

    fetchCart();
  }, [useremail]);

  
  const addCart = async (item) => {
    if (!useremail) {
      console.error("User email not found. Cannot add to cart.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3004/user?email=${useremail}`
      );
      const userId = response.data[0]?.id;

      if (userId) {
        const updatedCart = [...cart];
        const existItem = updatedCart.find((p) => p.id === item.id);

        if (existItem) {
          existItem.quantity += 1; // Update quantity
        } else {
          updatedCart.push({ ...item, quantity: 1 }); 
        }

        await axios.patch(`http://localhost:3004/user/${userId}`, {
          cart: updatedCart,
        });
        setCart(updatedCart);
        console.log("Cart updated:", updatedCart);
      } else {
        console.error("User not found in database.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const removeCart= useCallback(async(item)=>{
    try{
     const response= await axios.get( `http://localhost:3004/user?email=${useremail}`)
     const userId=response.data[0].id
     console.log(userId +'in reomve cart') 
   const updatedcart=cart.filter((p)=>p.id !==item)

  await axios.patch(`http://localhost:3004/user/${userId}`, {
          cart: updatedcart,
        });
        setCart(updatedcart)
      }catch(error){
        console.error(error+'somethine wrong in remove cart');
        
      }

  },[cart,useremail])

  // Filter products by categories
  useEffect(() => {
    if (catgories) {
      const filtered = allproduct.filter((p) => p.categories === catgories);
      setProduct(filtered);
    }
  }, [catgories, allproduct]);

  // Search products
  useEffect(() => {
    if (search.trim() === "") {
      setProduct(
        allproduct.filter((p) => !catgories || p.categories === catgories)
      );
    } else {
      const searching = allproduct.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
      setProduct(searching);
    }
  }, [search, allproduct, catgories]);

  // Login handler
  const handlLogin = () => {
    navigate("/login");
    setLogin(true);
    
  };

  // Logout handler
  const handlLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setLogin(false);
  };

  // Debugging logs
  useEffect(() => {
    console.log("Current cart:", cart);
    console.log("User email:", useremail);
  }, [cart, useremail]);


 

  return (
    <Productcontext.Provider
      value={{
        product,
        loading,
        setProduct,
        setCatgeries,
        setSearch,
        login,
        setLogin,
        handlLogin,
        handlLogout,
        addCart,
        setCart,
        cart,
        useremail,
        removeCart,
        orderlist,
        setOrderlist,
      }}
    >
      {children}
    </Productcontext.Provider>
  );
});

export default Productprovider;
