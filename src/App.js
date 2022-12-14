import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import MainPage from "./components/MainPage"
import { ProductContext } from "./contexts/ProductContext";
import './style.css'
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";

function App() {

  return (
   <div>
     <Router>
      <Routes>
        <Route path="/" element={ <MainPage /> }/>
        <Route path="/basket" element={ <Basket /> }/>
        <Route path="/product-detail/:id" element={ <ProductDetail /> }/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
