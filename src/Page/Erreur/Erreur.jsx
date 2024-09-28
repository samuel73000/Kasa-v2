import "./_Erreur.scss";
import { Link } from "react-router-dom";
export default function Erreur() {
  return (
    <section className="section-page404">
      <h1 className="titre-page404">404</h1>
      <p className="text-page404">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="link-page404" to="/">Retourner sur la page d’accueil</Link>
    </section>
  );
}
