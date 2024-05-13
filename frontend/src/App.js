import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import "./App.css";

function App() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
