import React from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Input from "./components/Input/Input";

const App = () => {
  return (
    <div className="flex">
      <Navbar />
      <div>
      <Main />
      <Input/>
      </div>
    </div>
  );
};

export default App;
