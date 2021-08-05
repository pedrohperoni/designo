import { Footer } from "../components/Footer";
import { GetInTouch } from "../components/GetInTouch";
import { Header } from "../components/Header";
import "../styles/locations.css"

import canadaDesktop from "../assets/images/locations/desktop/image-map-canada.png"
import australiaDesktop from "../assets/images/locations/desktop/image-map-australia.png"
import unitedKingdomDesktop from "../assets/images/locations/desktop/image-map-united-kingdom.png"

export function Locations(){
   return(
      <div className="main">
         <Header />
         <div className="locationsContainer">
            <div className="countryContainer">
               <div className="countryInfoLeft">
                  <h2>Canada</h2>
                  <div className="countryTxt">
                     <div className="countryTxtOffice">
                        <p><strong>Designo Central Office</strong></p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                     </div>
                     <div className="countryTxtContact">
                        <p><strong>Contact</strong></p>
                        <p>P: +1 253-863-8967</p>
                        <p>M: contact@designo.co</p>
                     </div>
                  </div>
               </div>
               <img src={canadaDesktop} alt="canada" />
            </div>

            <div className="countryContainer">
            <img src={australiaDesktop} alt="australia" />
               <div className="countryInfoRight">
                  <h2>Australia</h2>
                  <div className="countryTxt">
                     <div className="countryTxtOffice">
                        <p><strong>Designo AU Office</strong></p>
                        <p>19 Balonne Street</p>
                        <p>New South Wales 2443</p>
                     </div>
                     <div className="countryTxtContact">
                        <p><strong>Contact</strong></p>
                        <p>P: (02) 6720 9002</p>
                        <p>M: contact@designo.au</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="countryContainer">
               <div className="countryInfoLeft">
                  <h2>United Kingdom</h2>
                  <div className="countryTxt">
                     <div className="countryTxtOffice">
                        <p><strong>Designo UK Office</strong></p>
                        <p>13 Colorado Way</p>
                        <p>Castleford WF10 4ATA</p>
                     </div>
                     <div className="countryTxtContact">
                        <p><strong>Contact</strong></p>
                        <p>P: 078 3115 1400</p>
                        <p>M: contact@designo.uk</p>
                     </div>
                  </div>
               </div>
               <img src={unitedKingdomDesktop} alt="australia" />
            </div>


         </div>
         <GetInTouch />
         <Footer />
      </div>
   )
}