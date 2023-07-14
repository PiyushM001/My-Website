import React from 'react'
import './contact.css'
export default function Contact() {
   


  return (
    <div>
    

<div className="section-contact">
    <div >
    
   <p className='contact-text'> Send Your Message </p> 

    </div>

    <div className="section-contact-main contact-container">
      <form action="https://formspree.io/f/mgeblrnd" method="POST">
        <div className="grid11 grid-two-column11">
          <div className='input1'>
            <label for="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              required
              autocomplete="off"
            />
          </div>
          <div className='input1'>
            <label for="email"></label>
            <input
              type="email"
              name="email"
              placeholder="demo@mail.com"
              id="email"
              autocomplete="off"
              required
            />
          </div>
        </div>

        <div className='input1'>
          <label for="subject"></label>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            id="subject"
            autocomplete="off"
            required
          />
        </div>
        <div className='input1'>
          <label for="textarea"></label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            autocomplete="off"
            placeholder="Write your message"
            required
          ></textarea>
        </div>
<div className='contact-btn-div'>
        <div className='submit'>
          <input
            type="submit"
            name="submit"
            id="submit"
            className="btn"
            value="send message"
          />
                <a href='/' className='contact-btn' >Back to Home</a>

        </div> 
        </div>
      </form>

    </div>
  </div>


    </div>
  )
}

