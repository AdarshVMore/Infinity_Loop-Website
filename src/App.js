import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Dex from "./pages/dex/Dex";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/dex*" element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// [[redirects]]
// from = "/*"
// to = "/index.html"
// status = 200
