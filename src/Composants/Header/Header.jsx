import "./_Header.scss";
import Logo from "../../Assets/Logo-pc.png";
import { Link , useLocation} from "react-router-dom";
import React, { useEffect } from "react";

export default function Header() {

  const location = useLocation();

  useEffect(() => {
    const link = document.querySelectorAll(".lien-header");

    // Réinitialiser les décorations de texte
    link.forEach((l) => (l.style.textDecoration = 'none'));

    if (location.pathname === "/") {
      link[0].style.textDecoration = 'underline';
    } else if (location.pathname === "/Propos") {
      link[1].style.textDecoration = 'underline'; 
    }
    
  }, [location.pathname]); // Dépendance sur location.pathname pour mettre à jour les styles à chaque changement de chemin


  return (
    <header>
      <div className="container-header">
        <img src={Logo} alt="logo su site" className="img-header" />
        <nav>
        <Link className="lien-header" to="/" style={{ marginRight: '4vw' }}>Accueil</Link>
          <Link className="lien-header" to="/Propos"> A Propos</Link>
        </nav>
      </div>
    </header>
  );
}
