import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contacts from "./page/Contacts";
import Login from "./page/Login";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="products">
        <ProductCard
          productImg="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          name="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price="109.95"
        />
        <ProductCard
          productImg="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          name="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price="109.95"
        />
        <ProductCard
          productImg="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          name="Fjallraven"
          price="109.95"
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
