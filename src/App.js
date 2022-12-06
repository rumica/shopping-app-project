import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage"
import { ProductProvider } from "./contexts/ProductContext";
import './style.css'
import Basket from "./components/Basket";

function App() {

  return (
   <div>
    <ProductProvider>
     <Router>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/basket" element={ <Basket /> }/>
      </Routes>
    </Router>
   </ProductProvider>
   </div>
  );
}

export default App;
