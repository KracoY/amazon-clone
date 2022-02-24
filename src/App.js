import React from "react";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout'
import Error from "./Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

{
  /* We NEED React-Router */
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}
