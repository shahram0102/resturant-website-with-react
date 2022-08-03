import React from "react";
import { BottomMenu } from "./components/BottomMenu";

import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Main from "./components/Main";
import FilterProducts from "./components/FilterProducts";
import Layout from "./layout/Layout";
import { Products } from "./components/Products";
import { NotFound } from "./components/NotFound";
import Cart from "./components/Cart";
import FavoriteItems from "./components/FavoriteItems";
import Form from "./components/Form";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<FilterProducts />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/not-found" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<FavoriteItems />} />
        <Route path="/contactUs" element={<Form />} />
      </Routes>
      <ToastContainer />
      <BottomMenu />
    </Layout>
  );
}

export default App;
