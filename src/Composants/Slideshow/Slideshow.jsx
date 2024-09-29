import "./_Slideshow.scss";
// import { useData } from "../../Composants/DataFetcher";
import arrow_left from "../../Assets/arrow_Left.png";
import arrow_right from "../../Assets/arrow_right.png";
export default function Slideshow() {
//   const data = useData();

  return (
    <section className="container-Slideshow">
      <img className="img-fleche-Slideshow-left" src={arrow_left} alt="fleche" />
      <img
        className="img-logement-Slideshow"
        src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        alt="logoment"
      />
      <img className="img-fleche-Slideshow-right" src={arrow_right} alt="fleche" />
      <p className="compteur-slideshow">1/4</p>
    </section>
  );
}
