import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LocationsCards } from "../components/LocationsCards";
import "../styles/contact.css"
import bigCircle from "../assets/images/contact/desktop/bg-pattern-hero-desktop.svg"

export function Contact(){
   return(
      <div className="main">
      <Header />
      <main>
         <div className="contactMain">
            <div className="contactContainer">
               <img src={bigCircle} alt="bigcirclebg" className="bgImgLg" />
               <div className="contactTxt">
                  <h1>Contact Us</h1>
                  <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
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
                  <button type="submit" className="lightButton">SUBMIT</button>
      
                  </form>
               </div>
            </div>
            <LocationsCards />
         </div>
      </main>
      <Footer />
      </div>
   )
}