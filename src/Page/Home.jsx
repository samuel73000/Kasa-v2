import "../Style/Home.css";
import BannierHome from "../Assets/Bannier-page-home.png";
import CardsHome from "../Composants/CardsHome";
export default function Home() {
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
      <div className="container-all-cards-home">

        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        <CardsHome />
        




      </div>
    </section>
  );
}
