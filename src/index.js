import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "antd/dist/reset.css";
import { UserProvider } from "./Components/contextApi/UserContext";
import { ProductProvider } from "./Components/contextApi/ProductContext";
import { SearchProvider } from "./Components/contextApi/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <SearchProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </SearchProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
