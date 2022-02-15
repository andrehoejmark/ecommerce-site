import { BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage"
import {CartPage} from "./Pages/CartPage"
import {CheckoutPage} from "./Pages/CheckoutPage"

import axios from "axios"
import {useState, useEffect} from "react"

function App() {


  const [csrfToken, setCsrfToken] = useState<string | null>(null);


  const getCsrfToken = () => {

    if (csrfToken === null){
      axios({
        method: "GET",
        url: "http://127.0.0.1:8000/csrf",
        params: {}
      }).then(res => {
          {console.log(res.data)}
          setCsrfToken(res.data.csrfToken)
      }).catch(e => {
          console.log("Error fetching items: " + e)
      })
    }
  }

  useEffect(() => {
    getCsrfToken()
  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage token={csrfToken}/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
