import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <main className="max-w-full">
      <Navbar />
      <Homepage />
    </main>
  );
}

export default App;
