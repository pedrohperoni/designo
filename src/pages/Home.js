import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/home.css"
import phone from "../assets/images/home/image-hero-phone.png"

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
                     <button type="button">LEARN MORE</button>
                  </div>
               </div>
               <div className="heroHomeImg">
                  <img src={phone} alt="iphone" />
               </div>
            </div>






            <div className="designHome"></div>
            <div className="featuresHome"></div>
            <div className="talkHome"></div>
         </div>
      </main>
      <Footer />
      </div>
   )
}