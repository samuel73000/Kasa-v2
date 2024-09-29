import "./_Logements.scss";
import { useData } from "../../Composants/DataFetcher";
import { useParams } from "react-router-dom"; // Récupère l'ID depuis l'URL
import Slideshow from "../../Composants/Slideshow/Slideshow";
export default function Logement() {
  const data = useData(); // Charge les données du logement
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = data.find((item) => item.id === id); // Trouve le logement correspondant à l'ID
  return (
    <section>
      <Slideshow />
      <div>
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>
        <div>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="" />
        </div>
      </div>
    </section>
  );
}
