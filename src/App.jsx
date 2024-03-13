import "./App.css";
import HeaderTest from "./components/layout/HeaderTest.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import Login from "./components/pages/Login.jsx";
import NewPlayer from "./components/layout/NewPlayer.jsx";
import Footer from "./components/layout/Footer.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import PremiumPlan from "./components/pages/PremiumPlan.jsx";

function App() {
  return (
    <>
      <HeaderTest />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/newplayer" element={<NewPlayer />} />
        <Route path="/prices" element={<PremiumPlan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
