import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import DetailProduct from "./Components/Pages/DetailProduct";
import CartPage from "./Components/Pages/CartPage";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import RadioDropdown from "./Components/SliderPage/MoreToLike";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/detail-product" element={<DetailProduct />}></Route>
        <Route
          path="/cart"
          element={
            <>
              <CartPage />

              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
