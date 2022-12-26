import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from './Navbar/Navbar';
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import Cart from "./Cart/Cart";
import Checkout from './Checkout/Checkout'


import { CartContextProvider } from "../context/CartContext";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/product/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App