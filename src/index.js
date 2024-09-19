import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/Style/index.css';
import { DataProvider } from "../src/Composants/DataFetcher.jsx";
import Home from "../src/Page/Home";
import Header from "../src/Composants/Header.jsx";
import Footer from "../src/Composants/Footer.jsx";
import Propos from "./Page/Propos.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Header />
    <main>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<Propos />} />

        </Routes>
      </DataProvider>
    </main>
    <Footer />
  </Router>
);
