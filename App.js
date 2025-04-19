import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Weather from "./components/weather";
import React from "react";

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Header />} />
    <Route path='/weather' element={<Weather />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
