import "./_Slideshow.scss";
import { useData } from "../../Composants/DataFetcher"; // Récupère les données des logements
import { useParams } from 'react-router-dom'; // Récupère l'ID depuis l'URL
import React, { useState } from "react";
import arrow_left from "../../Assets/arrow_Left.png";
import arrow_right from "../../Assets/arrow_right.png";

// Composant Slideshow
export default function Slideshow() {
  const data = useData(); // Charge les données du logement
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = data.find(item => item.id === id); // Trouve le logement correspondant à l'ID

  let [index, setIndex] = useState(0); // Gère l'index pour naviguer entre les images

  // Fonction pour aller à l'image suivante
  function suivant() {
    setIndex(index < logement.pictures.length-1 ? index + 1 : 0); // Incrémente ou revient à 0
  }

  // Fonction pour revenir à l'image précédente
  function precedent() {
    setIndex(index > 0 ? index - 1 : 4); // Décrémente ou revient à 4
  }

  return (
    <section className="container-Slideshow">
      <img className="img-fleche-Slideshow-left" src={arrow_left} alt="fleche" onClick={precedent} />
      <img className="img-logement-Slideshow" src={logement.pictures[index]} alt="logement" /> {/* Affiche l'image selon l'index */}
      <img className="img-fleche-Slideshow-right" src={arrow_right} alt="fleche" onClick={suivant}/>
      <p className="compteur-slideshow">{index+1}/{logement.pictures.length}</p> {/* Affiche le compteur d'images */}
    </section>
  );
}
