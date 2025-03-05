import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contacts from "./page/Contacts";
import Login from "./page/Login";
import productService from "./services/products";
import SingleProduct from "./page/SingleProduct";

function App() {
  const { data, isLoading, isError } = productService.getAll();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home cardData={{ data, isLoading, isError }} />}
        />
        <Route
          path="/shop"
          element={<Shop cardData={{ data, isLoading, isError }} />}
        />
        <Route
          path="/shop/:id"
          element={<SingleProduct cardData={{ data, isLoading, isError }} />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
