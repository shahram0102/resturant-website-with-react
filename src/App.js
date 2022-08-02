import React from "react";
import { BottomMenu } from "./components/BottomMenu";

// components
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <BottomMenu />
    </div>
  );
}

export default App;
