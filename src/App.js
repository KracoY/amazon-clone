import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Error from "./Error";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
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
