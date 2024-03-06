import "./App.css";
import HeaderTest from "./components/layout/HeaderTest.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";
import Login from "./components/pages/Login.jsx";

function App() {
  return (
    <>
      <HeaderTest />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
