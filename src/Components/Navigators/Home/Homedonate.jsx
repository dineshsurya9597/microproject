import React from 'react'
import './Homedonate.css';
import Photo from '../../../Assets/Banner4.jpg';
import Button1 from '../../Commonbuttons/Button1';

export default function Homedonate() {
  return (
    <section className='donatenow'>

      <div className="leftsidepart">
        <h4>About Us</h4>
        <h1>We Help People In Need Around <br />The World</h1>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet <br />Jhon Doe, Founder</p>
      </div>
      <div className="rightsidepart">
        <div className="form">
        <input type="text" name="Username" id="Username" placeholder='Your Name' />
        <input type="email" name="UserEmail" id="UserEmail" placeholder='Your Email'/>
        </div>

        <div className="rate">
          <h4>$10</h4>
          <h4>$20</h4>
          <h4>$30</h4>
        </div>
        <div className="btnn">
          <Button1 Mybtn1={"Learn More"}/>
        </div>
      </div>
    </section>
  )
}
