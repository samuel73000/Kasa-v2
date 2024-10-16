import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./_index.scss";
import { DataProvider } from "./Composants/DataFetcher.jsx";
import Home from "./Page/Home/Home.jsx";
import Header from "./Composants/Header/Header.jsx";
import Footer from "./Composants/Footer/Footer.jsx";
import Propos from "./Page/Propos/Propos.jsx";
import Erreur from "./Page/Erreur/Erreur.jsx";
import Logements from "./Page/Logements/Logements.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <main>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Propos" element={<Propos />} />
          <Route path="*" element={<Erreur />} />
          <Route path="/logement/:id" element={<Logements />} />
        </Routes>
      </DataProvider>
    </main>
    <Footer />
  </Router>
);
