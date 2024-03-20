import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"

import  Home  from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Login from "./pages/Auth/Login"
import Navbar from "./components/Navbar"
import { CartProvider } from "./context/CartContext"
import Register from "./pages/Auth/Register"
import Footer from "./components/Footer"

function App() {
  

  return (
    <CartProvider>
      <Navbar/>
        <Container>
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/store" element={<Store />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/auth/login" element={<Login />} />
            <Route  path="/auth/register" element={<Register />} />
          </Routes>
        </Container>
        <Footer/>
    </CartProvider>
    
  )
}

export default App
