import { useState } from "react";
import "./App.css";
import Yuvaraj from "./components/Yuvaraj";
import Karthick from "./components/Karthick";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p style={{ fontSize: "25px" }}>Tom Project</p>
      <Yuvaraj />
      <Karthick />
    </>
  );
}

export default App;
