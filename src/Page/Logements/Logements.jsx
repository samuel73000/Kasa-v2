import "./_Logements.scss";
import { useData } from "../../Composants/DataFetcher";
import { useParams } from "react-router-dom"; // Récupère l'ID depuis l'URL
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slideshow from "../../Composants/Slideshow/Slideshow";

export default function Logement() {
  const data = useData(); // Charge les données du logement
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = data.find((item) => item.id === id); // Trouve le logement correspondant à l'ID

  return (
    <section>
      <Slideshow />
      <div className="container-all-titre-proprietaire">
        <div className="container-titre">
          <h1 className="titre-page-logement">{logement.title}</h1>
          <p className="localisation-page-logement">{logement.location}</p>
        </div>
        <div className="container-proprietaire">
          <p className="name-page-logement">{logement.host.name}</p>
          <img
            className="img-page-logement"
            src={logement.host.picture}
            alt="le proprietaire"
          />
        </div>
      </div>
      <div className="container-all-tags-etoile">
        <div className="container-tags">
          {logement.tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
        <div className="container-etoile">
          <FontAwesomeIcon
            icon={faStar}
            className="etoile"
            style={{ color: "#FF6060" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            className="etoile"
            style={{ color: "#E3E3E3" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            className="etoile"
            style={{ color: "#E3E3E3" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            className="etoile"
            style={{ color: "#E3E3E3" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            className="etoile"
            style={{ color: "#E3E3E3" }}
          />
        </div>
      </div>
    </section>
  );
}
