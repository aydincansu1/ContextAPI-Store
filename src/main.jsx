import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductProvider } from "./contect/productContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { BasketProvider } from "./contect/basketContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
        <ToastContainer autoClose={1500} />
      </ProductProvider>
    </BasketProvider>
  </React.StrictMode>
);
