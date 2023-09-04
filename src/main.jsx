import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserProvider } from "./contexts/User-context.jsx";
// import { ProductsProvider } from "./contexts/products.context.jsx";
import { CategoriesProvider } from "./contexts/Categories-context.jsx";
import { CartProvider } from "./contexts/Cart-context.jsx";
import "./Index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
