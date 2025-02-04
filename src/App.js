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
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import UserDashboard from "./User/UserDashboard";
import UserProfile from "./UserPage/UserProfile";
import UserOrder from "./UserPage/UserOrder";
import UserAddress from "./UserPage/UserAddress";
import AboutUs from "./UserPage/AboutUs";
import Faq from "./UserPage/Faq";
import ReferEarn from "./UserPage/ReferEarn";
import TopShelf from "./UserPage/TopShelf";
import LoginOtp from "./Auth/LoginOtp";
import AddAddress from "./UserPage/AddAddress";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user-dashboard" element={<UserDashboard />}></Route>
        {/* userMenu */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/order" element={<UserOrder />} />
        <Route path="/address" element={<UserAddress />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/refer" element={<ReferEarn />} />
        <Route path="/top-shelf" element={<TopShelf />} />
        <Route path="/add-address" element={<AddAddress />} />
        {/* userMenu */}
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login-otp" element={<LoginOtp />}></Route>
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
