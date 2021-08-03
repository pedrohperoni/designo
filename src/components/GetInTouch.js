import "../styles/getInTouch.css"
import circle from '../assets/images/shared/desktop/bg-pattern-call-to-action.svg'

export function GetInTouch(){
   return(
      <>
         <div className="getInTouch">
            <img src={circle} alt='circleBg' className='getInTouchBg' />
            <div className="getInTouchTxt">
               <h1>Let’s talk about your project</h1>
               <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
            <button type="button" className="lightButton">GET IN TOUCH</button>
         </div>
      </>
   )
}