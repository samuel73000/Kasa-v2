import "./_Propos.scss";
import BannierPropos from "../../Assets/Bannier-page-propos.png";
import Collapse from "../../Composants/Collapse/Collapse";
export default function Propos() {
  return (
    <section>
      {/* section bannier */}
      <div className="container-bannier-home">
        <img
          src={BannierPropos}
          alt="bannier du site"
          className="img-bannier-home"
        />
      </div>
      {/* section Collapse */}
      <div className="container-collapse">
        <Collapse
          titre="Fiabilité"
          contenu=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logments, et toutes les informations sont régulierement vérifiées par nos équipes."
        />
        <Collapse
          titre="Respect"
          contenu="La bienveillance fait partie des valeurs fonfatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme"
        />
        <Collapse
          titre="Service"
          contenu="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons a ce que chaque interaction, que ce soit avec nos hotes ou nos locataires, soite empreinte de respect et de bienveillance"
        />
        <Collapse
          titre="Sécurité"
          contenu="La sécurité est la priorité de Kasa.  aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux criteres de sécurité établis par nos services. En laissant une notye aussi bien a l'hote qu'au locataire, cela permat a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."
        />
      </div>
    </section>
  );
}
