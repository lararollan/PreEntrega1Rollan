import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import CategoriesProductList from "./components/ProductList/CategoriesProductList";
import ProductList from "./components/ProductList/ProductList";
import Detail from "./components/ItemDetailContainer/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cart from './components/Cart/Cart';
import CartProvider from "./components/context/CartContext";
import Brief from "./components/Checkout/Brief";

 
function App() { 
  
  return (
    <>
     <CartProvider>
    <Router>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<ProductList/>} />
    <Route exact path='/products' element={<ProductList/>} />
    <Route exact path="/category/:categoryId" element={<CategoriesProductList/>}/>
    <Route exact path="item/:productId" element={<Detail/>}/>
    <Route exact path="/cart" element={<Cart />} />
    <Route exact path="/brief" element={<Brief />} ></Route>
    </Routes>
  
   
    <Footer></Footer>

    </Router>
    
  
    </CartProvider>
   
   
    </>
  )
}

export default App


