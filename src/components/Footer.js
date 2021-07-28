import { Link } from "react-router-dom"
import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"
import { MdEmail, MdPhone } from "react-icons/md"
import logo from "../assets/images/footer-logo.png"
import "../styles/footer.css"

export function Footer(){
   return(
      <div className="footer">
         <div className="footerNavigation">
            <Link to="/">
               <img className="logo" src={logo} alt="Designo" />
            </Link>  
            <nav className="footerLinks">
               <Link className="footerLink" to="/">OUR COMPANY</Link>
               <Link className="footerLink" to="/">LOCATIONS</Link>
               <Link className="footerLink" to="/">CONTACT</Link>
            </nav>
         </div>
         <hr/>
         <div className="footerInfo">
            <div className="address">
               <p>Designo Central Office</p>
               <p>3886 Wellington Street</p>
               <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="contactInfo">
               <p>Contact Us (Central Office)</p>
               <p><MdPhone /> : +1 253-863-8967</p>
               <p><MdEmail /> : contact@designo.co</p>        
            </div>
            <div className="socialMedia">
               <Link to="https://www.instagram.com/"><FaInstagram size={30}/></Link>
               <Link to="https://www.instagram.com/"><FaTwitter size={30} /></Link>
               <Link to="https://www.instagram.com/"><FaYoutube size={30} /></Link>
               <Link to="https://www.instagram.com/"><FaPinterest size={30}t /></Link>
               <Link to="https://www.instagram.com/"><FaFacebook size={30} /></Link>
            </div>

         </div>
      </div>
   )
}