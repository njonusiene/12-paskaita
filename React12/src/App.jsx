import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import './styles/style.scss'
import Reviews from "./pages/Reviews";

export default function App() {
 
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reviews/:productId" element={<Reviews/>}/>
          </Routes>
        </Router>
    </>
  )
}
