import React from 'react';
import './navbar.css';
import Component1 from './component1';
import Cards1 from './cards1';
import Freelancing from './freelancing';
import Cards2 from './cards2'
import Card3 from './card3';
import Footer from './footer';
export default function Navbar(props) {
  const x='Component 1';
  return (
    <div>
    
    <div className={`${props.tilteffect}`}>
    <ul className="menu_items5">
    <li ><a  onClick={props.closeclick} className='fa3'><i className="icon fa fa-home  fa-2x fa2"></i> Home </a></li>
    <li ><a href="index.html#/contact" className='fa3' ><i className="icon fa  fa-phone fa-2x fa2"></i> Contact-Me</a></li>
    <li ><a href="index.html#/resume" className='fa3'><i className="icon fa fa-send fa-2x fa2"></i>My-Resume</a></li>
  </ul>
    <span className="menu_toggle5">
    <i onClick={props.openclick} className="menu_open5 fa fa-bars fa-lg"></i>
    <i onClick={props.closeclick} className="menu_close5 fa fa-times fa-lg"></i>
  </span>
 
  <main >
    <body >
      <div  className="content5" >
      <Component1 openclick2={props.openclick} />  
      <Cards1 />
   <Freelancing openclick2={props.openclick}/>
   <Cards2/>


   <Card3/>
   <Footer openclick2={props.openclick} />
      </div>
    
  </body>
     
  </main>
</div>

</div>

    
  )
}
