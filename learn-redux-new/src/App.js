import React from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="p-5 bg-cyan-100 max-w-4xl mx-auto border">
      <Navbar />
      <Todos />
    </div>
  );
}

export default App;
