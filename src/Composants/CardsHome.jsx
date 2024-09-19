import "../Style/Composants/CardsHome.css"
export default function CardsHome (props){
    return(
        <div className="container-cards-home">
          <img src={props.lien} alt={props.alt} className="img-card-home" />
          <p className="texte-cards-home">{props.titreCards}</p>
        </div>
    )
}