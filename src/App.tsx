import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Dex from "./pages/dex/Dex";
import CommingSoonDex from "./pages/comming_soon/CommingSoonDex";
import TokenSale from "./pages/tokensale/TokenSale.tsx";
import Dashboard from "./pages/dashboard/Dashboard";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Policies from "./pages/policies/Policies";
import CommingSoonTokenSale from "./pages/comming_soon/CommingSoonTokenSale";
import React from "react";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "30980df3d204e25c5ae7cfe90918d5ef",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#0077ff",
          accentColorForeground: "white",
          borderRadius: "large",
        })}
      >
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Landing />} />
              <Route path="/dex*" element={<Dex />} />
              {/* <Route path="/dexx" element={<CommingSoonDex />} /> */}
              <Route path="/token-sale" element={<TokenSale />} />
              {/* <Route path="/token-sale" element={<CommingSoonTokenSale />} /> */}

              <Route path="/policies" element={<Policies />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

// [[redirects]]
// from = "/*"
// to = "/index.html"
// status = 200
