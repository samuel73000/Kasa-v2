import "./_Collapse.scss";
import arrow from "../../Assets/arrow_back.png";
import React, { useState } from "react";
export default function Collapse(props) {
  const [open, setOpen] = useState(false);

  return (
    <section className={props.classSection}>
      <div className={props.classTitre}>
        <p className="titre-collapse">{props.titre}</p>
        <img
          onClick={() => setOpen(!open)}
          src={arrow}
          alt="fleche pour ouvire le collapse"
          className={`arrow-collapse  ${
            open ? "arrow-collapse-active" : "arrow-collapse-reverse"
          }`}
        />
      </div>

      <div
        className={`${props.classContenu} ${
          open ? "div-collapse-active" : "div-collapse-reverse"
        }`}
      >
        <ul className="contenu-collapse">{props.contenu}</ul>
      </div>
    </section>
  );
}
