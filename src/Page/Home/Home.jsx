import "./Home.scss";
import BannierHome from "../../Assets/Bannier-page-home.png";
import CardsHome from "../../Composants/CardsHome/CardsHome";
import { useData } from "../../Composants/DataFetcher"; 

export default function Home() {
  const data = useData(); // Utilisation du hook pour obtenir les données

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
