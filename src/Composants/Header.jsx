import "../Style/Header.css";
import Logo from "../Assets/Logo-pc.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="logo su site" />
        <nav>
          <Link to="/"> Accueil</Link>
          <Link to="/"> A Propos</Link>
        </nav>
      </div>
    </header>
  );
}
