import "../Style/Header.css";
import Logo from "../Assets/Logo-pc.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <img src={Logo} alt="logo su site" />
        <nav className="conatiner-lien-header">
        <Link className="lien-header" to="/" style={{ marginRight: '4vw' }}>Accueil</Link>
          <Link className="lien-header" to="/"> A Propos</Link>
        </nav>
      </div>
    </header>
  );
}
