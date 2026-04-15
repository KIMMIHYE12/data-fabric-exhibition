import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gruppe1 from "./pages/Gruppe1";
import Gruppe2 from "./pages/Gruppe2";
import Gruppe3 from "./pages/Gruppe3";
import Gruppe4 from "./pages/Gruppe4";
import Gruppe5 from "./pages/Gruppe5";
import Gruppe6 from "./pages/Gruppe6";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/gruppe1">Gruppe 1</Link> |{" "}
        <Link to="/gruppe2">Gruppe 2</Link> |{" "}
        <Link to="/gruppe3">Gruppe 3</Link> |{" "}
        <Link to="/gruppe4">Gruppe 4</Link> |{" "}
        <Link to="/gruppe5">Gruppe 5</Link> |{" "}
        <Link to="/gruppe6">Gruppe 6</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gruppe1" element={<Gruppe1 />} />
        <Route path="/gruppe2" element={<Gruppe2 />} />
        <Route path="/gruppe3" element={<Gruppe3 />} />
        <Route path="/gruppe4" element={<Gruppe4 />} />
        <Route path="/gruppe5" element={<Gruppe5 />} />
        <Route path="/gruppe6" element={<Gruppe6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
