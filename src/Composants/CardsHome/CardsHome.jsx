import "./CardsHome.scss"
import { Link } from "react-router-dom";
export default function CardsHome (props){
    return(
        <div className="container-cards-home">
            <Link to="#">
          <img src={props.lien} alt={props.alt} className="img-card-home" />
          </Link>
          <p className="texte-cards-home">{props.titreCards}</p>
        </div>
    )
}