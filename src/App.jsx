import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/About-us"
import Products from "./pages/Products"
import Layout from "./layout/Layout"
import Product from "./pages/Ptoduct"

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/products" Component={Products} />
            <Route path="/products/:id" Component={Product} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
