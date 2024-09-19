import "../Style/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import BannierHome from "../Assets/Bannier-page-home.png";
import CardsHome from "../Composants/CardsHome";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("../Data/data.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error)); // Gérer les erreurs
  }, []);
  return (
    <section>
      {/* section bannier */}
      <div className="container-bannier-home">
        <img
          src={BannierHome}
          alt="bannier du site"
          className="img-bannier-home"
        />
        <h1 className="titre-bannier-home">Chez vous, partout et ailleurs</h1>
      </div>
      {/* section des cards */}

      {data && (
        <div className="container-all-cards-home">
          {data.map((item, index) => (
            <CardsHome
              key={index}
              lien={item.cover}
              titreCards={item.title}
              alt={`image de ${item.title}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
