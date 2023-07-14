import React from 'react'
import './footer.css'
export default function Footer(props) {
  return (
    <div className='footer-div'>
      
        
         <div className="footer">
         <div className="footer1">
          <div className="footer2"><div className='ready-div'>Ready for Next Project ?
          </div>
          <button onClick={props.openclick2} className="contact-us-footer-btn all-btns footer-btn">Contact ME</button>

          <div className="lets-get-started">Lets get started!</div>
            
          </div>
         </div>
         <h3 className='text-h3'> Designed and Programmed By Piyush Mehta</h3>
         </div>
        
       </div>
      
  
  )
}
