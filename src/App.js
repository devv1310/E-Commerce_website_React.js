import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import CartItem from "./CartItem";
import BuyNow from "./BuyNow";
import PaymentDone from "./PaymentDone";
import Search from "./Search";


const App=()=>{
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="home" element={<Home/>} />
              <Route path="cartitem" element={<CartItem/>} />
              <Route path="buynow" element={<BuyNow/>} />
              <Route path="paydone" element={<PaymentDone/>} />
              <Route path="search" element={<Search/>} />

            </Route>
           </Routes>
        </BrowserRouter>
          
   
        
        </>
    )
}

export default App;