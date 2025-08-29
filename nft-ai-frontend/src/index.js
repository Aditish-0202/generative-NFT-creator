import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// RainbowKit v2 & Wagmi v2 imports
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { mainnet, polygon, polygonMumbai, sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { darkTheme } from '@rainbow-me/rainbowkit';


// Build Wagmi config (v2 way)
const config = getDefaultConfig({
  appName: "GenNFT",
  projectId: "GenNFT-hackathon", // can be any string
  chains: [polygonMumbai, polygon, mainnet, sepolia],
  ssr: false,
});

const queryClient = new QueryClient();

const customTheme = darkTheme({
  accentColor: '#40aaff',
  accentColorForeground: '#fff',
  borderRadius: 'large',
  fontStack: 'system',
  overlayBlur: 'small',
  colors: {
    connectButtonBackground: 'rgba(28,30,43,0.8)',
    connectButtonText: '#fff',
    connectButtonHoverBackground: '#092134',
    connectButtonBorder: '#40aaff',
    connectButtonSecondaryText: '#53dfff',
    modalBackground: '#121214',
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={config.chains} theme={customTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
