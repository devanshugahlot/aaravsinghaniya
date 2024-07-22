import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import DrawerAppBar from "./componets/DrawerAppBar";
import Contact from "./componets/Contact";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <Router>
      <>
       
        <DrawerAppBar window={window} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <a
            href="https://wa.me/8168235174"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={50} color="#25D366" />
          </a>
        </div>
      </>
    </Router>
  );
}

export default App;
