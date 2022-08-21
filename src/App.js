import React from "react";
import Navigation from "./components/Navigation";
import PreRegistation from "./components/PreRegistation";
import Home from "./components/Home";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/preregistation" element={<PreRegistation />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
