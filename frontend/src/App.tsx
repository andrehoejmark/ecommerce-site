import { BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage"
import {CartPage} from "./Pages/CartPage"


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
