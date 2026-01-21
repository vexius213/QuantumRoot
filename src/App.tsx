import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
