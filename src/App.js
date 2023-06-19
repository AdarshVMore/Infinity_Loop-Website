import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Dex from "./pages/dex/Dex";
import CommingSoon from "./pages/comming_soon/CommingSoon";
import TokenSale from "./pages/tokensale/TokenSale";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/dex*" element={<Dex />} />
          <Route path="/dexx" element={<CommingSoon />} />
          <Route path="/token-sale" element={<TokenSale />} />
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
