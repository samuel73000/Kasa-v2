import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Style/index.css';
import Home from "../src/Page/Home"
import Header from "../src/Composants/Header.jsx"
import Footer from "../src/Composants/Footer.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Header />
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
  
    </Routes>
  </main>
  <Footer />
</Router>
);

