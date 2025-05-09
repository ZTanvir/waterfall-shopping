import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleProduct from "./page/SingleProduct";
import Contacts from "./page/Contacts";
import SingleContact from "./page/SingleContact";
import Login from "./page/Login";
import Checkout from "./page/Checkout";
import productService from "./services/products";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const { data, isLoading, isError } = productService.getAll();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cardData={{ data, isLoading, isError }}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              cardData={{ data, isLoading, isError }}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <SingleProduct
              cardData={{ data, isLoading, isError }}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/contacts"
          element={<Contacts cart={cart} setCart={setCart} />}
        />
        <Route
          path="/contacts/:id"
          element={<SingleContact cart={cart} setCart={setCart} />}
        />
        <Route
          path="/login"
          element={<Login cart={cart} setCart={setCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
