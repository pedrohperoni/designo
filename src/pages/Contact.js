import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/contact.css"
import canada from "../assets/images/shared/desktop/illustration-canada.svg"
import australia from "../assets/images/shared/desktop/illustration-australia.svg"
import unitedKingdom from "../assets/images/shared/desktop/illustration-united-kingdom.svg"
import circle from "../assets/images/shared/desktop/bg-pattern-small-circle.svg"

export function Contact(){
   return(
      <div className="main">
      <Header />
      <main>
         <div className="contactMain">
            <div className="contactContainer">
               <div className="contactTxt">
                  <h1>Contact Us</h1>
                  <h3>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</h3>
               </div>
               <div className="contactForm">
                  <form>
                  <div className="formItem">
                     <label for="name"></label>
                     <input type="text" className="contactInput" placeholder="Your Name" />
                  </div>
                  <div className="formItem">
                     <label for="email"></label>
                     <input type="text" className="contactInput" placeholder="Email" />
                  </div>
                  <div className="formItem">
                     <label for="Phone"></label>
                     <input type="text" className="contactInput" placeholder="Phone Number" />
                  </div>
                  <div className="formItem">
                     <label for="message"></label>
                     <input type="text" className="contactInput" placeholder="Your Message" />
                  </div>
                  <button type="submit">SUBMIT</button>
      
                  </form>
               </div>
            </div>
            <div className="locationsContainer">
               <div className="location">
                  <img src={canada} alt="canada" className="countryImg" />
                  <img src={circle} alt="circle" className="bgImg"/>
                  <h2>CANADA</h2>
                  <button className="button">SEE LOCATION</button>
               </div>
               <div className="location">
                  <img src={australia} alt="australia" className="countryImg"  />
                  <img src={circle} alt="circle" className="bgImg"/>
                  <h2>AUSTRALIA</h2>
                  <button className="button">SEE LOCATION</button>
               </div>
               <div className="location">
                  <img src={unitedKingdom} alt="UK" className="countryImg" />
                  <img src={circle} alt="circle" className="bgImg"/>
                  <h2>UNITED KINGDOM</h2>
                  <button className="button">SEE LOCATION</button>
               </div>
            </div>
         </div>
      </main>
      <Footer />
      </div>
   )
}