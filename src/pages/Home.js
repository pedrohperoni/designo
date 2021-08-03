import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/home.css"
import phone from "../assets/images/home/desktop/image-hero-phone.png"
import { GetInTouch } from "../components/GetInTouch";


export function Home(){
   return(
      <div className="main">
      <Header />
      <main>
         <div className="homeContainer">
            <div className="heroHome">
               <div className="heroHomeTxt">
                  <div className="heroHomeTxtBox">
                     <h1>Award-winning custom designs and digital branding solutions</h1>
                     <h3>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</h3>
                     <button className="lightButton" type="button">LEARN MORE</button>
                  </div>
               </div>
               <div className="heroHomeImg">
                  <img src={phone} alt="iphone" />
               </div>
            </div>
            <div className="designHome">
               <div className="designHomeWeb">
                  <div className="designHomeBoxTxt">
                     <h2>WEB DESIGN</h2>
                     <h4>VIEW PROJECTS</h4>
                  </div>
               </div>
               <div className="designHomeRight">
                  <div className="designHomeApp">
                     <div className="designHomeBoxTxt">
                        <h2>APP DESIGN</h2>
                        <h4>VIEW PROJECTS ></h4>
                     </div>
                  </div>
                  <div className="designHomeGraphic">
                     <div className="designHomeBoxTxt">
                        <h2>GRAPHIC DESIGN</h2>
                        <h4>VIEW PROJECTS</h4>
                     </div>
                  </div>
               </div>
            </div>






            <div className="featuresHome"></div>
            <GetInTouch />

         </div>
      </main>

      <Footer />
      </div>
   )
}
