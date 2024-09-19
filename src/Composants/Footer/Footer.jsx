import "./Footer.scss";
import logoFooter from "../../Assets/Logo-footer-pc.png"
export default function Footer (){
    return(
    <footer className="container-footer">
<img src={logoFooter} alt="logo du site version footer"  className="img-footer"/>
<p className="text-footer">© 2020 Kasa. All rights reserved</p>
    </footer>
    )
}