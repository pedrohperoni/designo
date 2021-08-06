import "../styles/locationCards.css"

import canada from "../assets/images/shared/desktop/illustration-canada.svg"
import australia from "../assets/images/shared/desktop/illustration-australia.svg"
import unitedKingdom from "../assets/images/shared/desktop/illustration-united-kingdom.svg"
import circle from "../assets/images/shared/desktop/bg-pattern-small-circle.svg"

export function LocationCards(){
   return(
      <div className="locationCardsContainer">
         <div className="location">
               <img src={canada} alt="canada" className="countryImg" />
               <img src={circle} alt="circle" className="bgImgLocation"/>
               <h3>CANADA</h3>
               <button className="darkButton">SEE LOCATION</button>
          </div>
          <div className="location">
               <img src={australia} alt="australia" className="countryImg"  />
               <img src={circle} alt="circle" className="bgImgLocation"/>
               <h3>AUSTRALIA</h3>
               <button className="darkButton">SEE LOCATION</button>
          </div>
          <div className="location">
               <img src={unitedKingdom} alt="UK" className="countryImg" />
               <img src={circle} alt="circle" className="bgImgLocation"/>
               <h3>UNITED KINGDOM</h3>
               <button className="darkButton">SEE LOCATION</button>
          </div>
      </div> 
   )
}