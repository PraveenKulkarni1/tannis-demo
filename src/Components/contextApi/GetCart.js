import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const getCartContext = createContext();

const GetCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const getCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://tannis.in/api/get-cart", {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setCart(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  return (
    <getCartContext.Provider value={[cart, setCart]}>
      {children}
    </getCartContext.Provider>
  );
};

const useGetCart = () => useContext(getCartContext);
export { GetCartProvider, useGetCart };
