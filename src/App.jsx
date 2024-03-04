import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderTest from "./components/layout/HeaderTest.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage.jsx";

function App() {
  return (
    <>
      <HeaderTest />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
