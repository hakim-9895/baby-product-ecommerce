import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Combonents/Register'
import Login from './Combonents/Login'
import Home from './Dash/Home'

import Productprovider from './Dash/Productprovider'
import Orderpage from './Dash/Orderpage'
import Payment from './Dash/Payment'

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
