import { BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage"
import {CartPage} from "./Pages/CartPage"


import axios from "axios"
import {useState, useEffect} from "react"


function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
