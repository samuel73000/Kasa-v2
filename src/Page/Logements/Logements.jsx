import "./_Logements.scss";
import { useData } from "../../Composants/DataFetcher";
import { useParams, useNavigate } from "react-router-dom"; // Récupère l'ID depuis l'URL
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slideshow from "../../Composants/Slideshow/Slideshow";
import Collapse from "../../Composants/Collapse/Collapse";

export default function Logement() {
  const data = useData(); // Charge les données du logement
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL
  const navigate = useNavigate(); // Hook pour la navigation

  // Vérifie si data est défini et si l'ID est valide
  if (!data) {
    return <div>Chargement...</div>; // Affiche un message de chargement si data est indéfini
  }

  const logement = data.find((item) => item.id === id); // Trouve le logement correspondant à l'ID

  // Vérifie si le logement a été trouvé
  if (!logement) {
    navigate("/erreur"); // Redirection vers la page d'erreur
    return null; // Retourne null pour éviter le rendu du composant
  }

  return (
    <section className="section-logement">
      {/* Slideshow */}
      <Slideshow logement={logement} />

      <section className="section-info-logement">
        {/* Titre */}
        <div className="container-all-titre-tags">
          <div className="container-titre">
            <h1 className="titre-page-logement">{logement.title}</h1>
            <p className="localisation-page-logement">{logement.location}</p>
          </div>
          {/* Tag */}
          <div className="container-tags">
            {logement.tags.map((tag, index) => (
              <p className="tag" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="container-all-proprietaire-etoile">
          {/* La photo du propriétaire */}
          <div className="container-proprietaire">
            <p className="name-page-logement">{logement.host.name}</p>
            <img
              className="img-page-logement"
              src={logement.host.picture}
              alt="le propriétaire"
            />
          </div>
          {/* Étoile */}
          <div className="container-etoile">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="etoile"
                style={{
                  color: index < logement.rating ? "#FF6060" : "#E3E3E3",
                }} // Change la couleur en fonction de l'index
              />
            ))}
          </div>
        </div>
      </section>
      {/* Collapse */}
      <div className="container-all-collaps-logement">
        <Collapse
          titre="Description"
          contenu={logement.description}
          classSection="section-collapse-logement"
          classTitre="div-titre-collapse-logement"
          classContenu="div-contenu-collapse-logement"
        />
        <Collapse
          titre="Équipements"
          contenu={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
          classSection="section-collapse-logement"
          classTitre="div-titre-collapse-logement"
          classContenu="div-contenu-collapse-logement"
        />
      </div>
    </section>
  );
}
