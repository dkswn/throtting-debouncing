// throtting & debouncing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Componey from "./Pages/Componey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Componey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
