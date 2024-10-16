import React, { useState } from "react";
import "./_Slideshow.scss";
import { useData } from "../../Composants/DataFetcher";
import { useParams } from "react-router-dom"; /// Récupère l'ID depuis l'URL
import arrow_left from "../../Assets/arrow_Left.png";
import arrow_right from "../../Assets/arrow_right.png";

// Composant Slideshow
export default function Slideshow() {
  const data = useData();
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = data.find((item) => item.id === id); // Trouve le logement correspondant à l'ID

  let [index, setIndex] = useState(0); // Gère l'index pour naviguer entre les images

  // Fonction pour aller à l'image suivante
  function suivant() {
    setIndex(index < logement.pictures.length - 1 ? index + 1 : 0); // Incrémente ou revient à 0
  }

  // Fonction pour revenir à l'image précédente
  function precedent() {
    setIndex(index > 0 ? index - 1 : logement.pictures.length - 1); // Décrémente ou revient à la dernière image
  }

  // Vérifie s'il y a plus d'une image
  const plusieursImages = logement.pictures.length > 1;

  return (
    <section className="container-Slideshow">
      {/* Affiche les flèches seulement s'il y a plus d'une image */}
      {plusieursImages && (
        <img
          className="img-fleche-Slideshow-left"
          src={arrow_left}
          alt="fleche"
          onClick={precedent}
        />
      )}

      {/* Conteneur qui glisse avec l'index */}
      <div
        className="slideshow-wrapper"
        style={{
          transform: `translateX(-${index * 100}%)`, // Translation en fonction de l'index
        }}
      >
        {logement.pictures.map((picture, idx) => (
          <img
            key={idx}
            className="img-logement-Slideshow"
            src={picture}
            alt={`logement ${idx}`}
          />
        ))}
      </div>

      {/* Affiche les flèches seulement s'il y a plus d'une image */}
      {plusieursImages && (
        <img
          className="img-fleche-Slideshow-right"
          src={arrow_right}
          alt="fleche"
          onClick={suivant}
        />
      )}

      {/* Affiche le compteur seulement s'il y a plus d'une image */}
      {plusieursImages && (
        <p className="compteur-slideshow">
          {index + 1}/{logement.pictures.length}
        </p>
      )}
    </section>
  );
}
