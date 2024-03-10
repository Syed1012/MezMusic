import "./App.css";
import HeaderTest from "./components/layout/HeaderTest.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import Login from "./components/pages/Login.jsx";
import BtmPlyr from "./components/layout/BtmPlyr.jsx";
import NewPlayer from "./components/layout/NewPlayer.jsx";
import MusicCard from "./components/layout/MusicCard.jsx";

function App() {
  return (
    <>
      <HeaderTest />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/btmplayer" element={<BtmPlyr />} />
        <Route path="/newplayer" element={<NewPlayer />} />
        <Route path="/music" element={<MusicCard />} />
      </Routes>
    </>
  );
}

export default App;
