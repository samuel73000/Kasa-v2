 import '../Style/Home.css'
 import BannierHome from "../Assets/Bannier-page-home.png"; 
 
 export default function Home(){
    return(
        <section>
        <div className='container-bannier-home'>
            <img src={BannierHome} alt="bannier du site" className='img-bannier-home' />
          <h1 className='titre-bannier-home'>Chez vous, partout et ailleurs</h1>  
        </div>
        </section>
    )
 }