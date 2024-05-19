import "./App.css";
import { useState } from "react";
import { Navbar } from "./shared/Navbar";
import Home from "./pages/Home";
import Footer from "./shared/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  );
}

export default App;
