import ReactDOM from 'react-dom/client';
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App;
