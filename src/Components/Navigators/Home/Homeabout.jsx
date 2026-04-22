import React from 'react'
import './Homeabout.css';
import Abtimg1 from '../../../Assets/Banner2.jpg';
import Abtimg2 from '../../../Assets/Banner3.jpg';
import Button1 from '../../Commonbuttons/Button1';
import Button2 from '../../Commonbuttons/Button2';

export default function Homeabout() {
  return (
    <section className='aboutpart'>
      <div className="leftpart">
        <img src={Abtimg1} alt='abt img 1' />
        <img src={Abtimg2} alt='abt img 2' />
      </div>
      <div className="rightpart">
        <h4>About Us</h4>
        <h1>We Help People In Need Around <br />The World</h1>
        <div className="outline">
          <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet <br />Jhon Doe, Founder</p>
        </div>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <div className="click">
          <Button1 Mybtn1={"Learn More"} />
          <Button2 Mybtn2={"Donate Now"} />
        </div>
      </div>
    </section>
  )
}
