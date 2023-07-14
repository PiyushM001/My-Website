import React from 'react'
import './component1.css';
import img from '../image/Screenshot 2023-07-06 151957.png'
import img2 from '../image/Screenshot 2023-07-06 153124.png'

export default function Component1(props) {
  const instagramid=()=>{
    window.open('https://instagram.com/piyushmehta2625?igshid=MzNlNGNkZWQ4Mg==')
  }
  const linkedinid=()=>{
    window.open('https://www.linkedin.com/in/piyush-mehta-399b14277')
  }
  return (
    <> <div className='freelance-section header'>
    <p class="p5"><div className='hello-div'>Hello</div>I Am  <span class="fancy">Piyush Mehta</span></p>
    <div className='resume-div'>
    <p className=' header-text'>Web Developer </p>
    <button onClick={props.openclick2} className=' header-btn'>RESUME </button>
    </div>
   

    <div className='logos'>
    <img onClick={instagramid} src={img} className='insta' alt='img' ></img>
    <img onClick={linkedinid} src={img2} className='insta' alt='img' ></img>

     </div>
   

    </div>
    </>
   
  )
}
