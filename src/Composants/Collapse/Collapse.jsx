import "./Collapse.scss"
import arrow from "../../Assets/arrow_back.png"
import React, { useState } from "react";
export default function Collapse ( props){

const [open , setOpen] = useState(false);

    return(
       <section className="section-collapse">
        <div className="div-titre-collapse">
        <h3 className="titre-collapse">{props.titre}</h3>
        <img onClick={() => setOpen(!open)} src={arrow} alt="fleche pour ouvire le collapse" className="arrow-collapse" />
        </div>
         
         {open && (
        <div className="div-contenu-collapse" >
        <p className="contenu-collapse">
         {props.contenu}
        </p>
        </div>
           )}
        </section>
    )
}