import React from "react";
import { BottomMenu } from "./components/BottomMenu";

import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import FilterProducts from "./components/FilterProducts";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Routes>
        <Route path="/products/:category" element={<FilterProducts />} />
      </Routes>
      <BottomMenu />
    </div>
  );
}

export default App;
