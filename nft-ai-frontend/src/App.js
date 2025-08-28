import logo from "./logo.svg";
import Navbar2 from "./components/Navbar2";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage";
import Explore from "./pages/Explore";
import My_NFT from "./pages/My_NFT";


function App() {
  return (
    <div className="App min-h-screen bg-gray-100 dark:bg-[rgba(21,21,44,1)]">

      <Navbar2 />
      <Routes>
        <Route path="/" element={<GeneratePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my_nft" element={<My_NFT />} />
      </Routes>
    </div>
  );
}

export default App;
