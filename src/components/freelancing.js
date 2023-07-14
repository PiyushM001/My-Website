import React from 'react'
import './freelancing.css'

export default function Freelancing(props) {
  return (<>
   <div className='freelance-section'>
   <p class="p5">I AM Available For <span class="fancy">Freelancing</span></p>
   <button onClick={props.openclick2} className='contact-me-btn all-btns'>Contact Me</button>
   <p className='text-under-btn'>As a passionate learner, I eagerly embrace the opportunity to collaborate with client and further enrich my learning journey. Every project I undertake presents a new challenge, enabling me to expand my expertise and explore different technologies. With each freelance endeavor, I am committed to delivering high-quality results, meeting client expectations, and contributing to the success of their projects.</p>

   </div>
      
  </>
  )
}
