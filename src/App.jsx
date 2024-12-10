import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Combonents/Register'
import Login from './Combonents/Login'
import Home from './Combonents/main/Home'

import Productprovider from './Combonents/main/Productprovider'
import Orderpage from './Combonents/main/Orderpage'
import Payment from './Combonents/main/Payment'
import Adminhome from './Combonents/Admin/Adminhome'
import Userdetails from './Combonents/Admin/Userdetails'

function App() {

  return (
    <>
      <div>
      <Productprovider> 
<Routes>
   <Route path='register' element={<Register/>}/>  
   <Route path='login' element={<Login/>}/>  
   <Route path='/' element={<Home/>}/>
   <Route path='orderpage' element={<Orderpage/>}/>
   <Route path='payment' element={<Payment/>}/>
   <Route path='orderlist' element={<Orderpage/>}/>
   <Route path='Admin' element={<Adminhome/>}/>
   <Route path='User' element={<Userdetails/>}/>

</Routes>
</Productprovider>

       </div>
    </>
  )
}

export default App
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Register from './Combonents/Register';
// import Login from './Combonents/Login';
// import Home from './Dash/Home';
// import Cart from './Dash/Cart';
// import Productprovider from './Productprovider'; // Import Productprovider

// function App() {
//   return (
//     <Productprovider>  {/* Wrap the entire app with Productprovider */}
//       <div>
//         <Routes>
//           <Route path="register" element={<Register />} />
//           <Route path="/" element={<Login />} />
//           <Route path="home" element={<Home />} />
//           <Route path="cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </Productprovider>
//   );
// }

// export default App;
