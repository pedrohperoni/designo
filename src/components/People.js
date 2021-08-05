import "../styles/people.css"
import circle from "../assets/images/shared/desktop/bg-pattern-small-circle.svg"
import drawingFront from "../assets/images/home/desktop/illustration-passionate.svg"
import drawingBack from "../assets/images/home/desktop/illustration-resourceful.svg"
import presentation from "../assets/images/home/desktop/illustration-friendly.svg"


export function People(){
   return(
      <div className="peopleContainer">
         <div className="people">
               <img src={drawingFront} alt="drawingFront" className="countryImg" />
               <img src={circle} alt="circle" className="bgImg"/>
               <h3>PASSIONATE</h3>
               <p>Each project starts with an in-depth
            brand research to ensure we only create products that serve a purpose.
            We merge art, design, and technology into exciting new solutions.</p>
          </div>
          <div className="people">
               <img src={drawingBack} alt="drawingBack" className="countryImg"  />
               <img src={circle} alt="circle" className="bgImg"/>
               <h3>RESOURCEFUL</h3>
               <p>Everything that we do has a strategic
            purpose. We use an agile approach in all of our projects and value
            customer collaboration. It guarantees superior results that fulfill our
            clients’ needs.</p>
          </div>
          <div className="people">
               <img src={presentation} alt="presentation" className="countryImg" />
               <img src={circle} alt="circle" className="bgImg"/>
               <h3>FRIENDLY</h3>
               <p>We are a group of enthusiastic folks who
            know how to put people first. Our success depends on our customers, and
            we strive to give them the best experience a company can provide.</p>
          </div>
      </div> 
   )
}