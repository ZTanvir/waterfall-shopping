import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Contacts from "./page/Contacts";
import Login from "./page/Login";
import productService from "./services/products";

function App() {
  const { products, isLoading, isError } = productService.getAll();
  console.log(products, isLoading, isError);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home cardData={{ products, isLoading, isError }} />}
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
