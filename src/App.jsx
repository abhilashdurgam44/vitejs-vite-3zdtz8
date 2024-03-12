import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import Store from "./store/Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
