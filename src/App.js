import React from "react";
import { BottomMenu } from "./components/BottomMenu";

import { Routes, Route, Navigate } from "react-router-dom";

// components
import Main from "./components/Main";
import FilterProducts from "./components/FilterProducts";
import Layout from "./layout/Layout";
import { Products } from "./components/Products";
import { NotFound } from "./components/NotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<FilterProducts />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/not-found" />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <BottomMenu />
    </Layout>
  );
}

export default App;
