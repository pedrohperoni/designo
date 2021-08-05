import { Link } from "react-router-dom";
import logo from "../assets/images/header-logo.png";
import "../styles/header.css"

export function Header(){
   return(
      <>
         <div className="header">
            <div className="headerContent">
               <Link to="/">
                  <img className="logo" src={logo} alt="Designo" />
               </Link>  
               <div className="burger">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <nav className="headerLinks">
                  <Link className="headerLink" to="/">OUR COMPANY</Link>
                  <Link className="headerLink" to="/locations">LOCATIONS</Link>
                  <Link className="headerLink" to="/contact">CONTACT</Link>
               </nav>
            </div>
         </div>
         <div className="blackdrop" />
      </>
   )
}