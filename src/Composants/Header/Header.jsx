import "./Header.scss";
import Logo from "../../Assets/Logo-pc.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <img src={Logo} alt="logo su site" />
        <nav>
        <Link className="lien-header" to="/" style={{ marginRight: '4vw' }}>Accueil</Link>
          <Link className="lien-header" to="/Propos"> A Propos</Link>
        </nav>
      </div>
    </header>
  );
}
