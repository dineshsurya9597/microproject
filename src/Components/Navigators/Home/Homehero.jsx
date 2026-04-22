import React from 'react'
import './Homehero.css';
import Button1 from '../../Commonbuttons/Button1';

export default function Homehero() {
  return (
    <section className='heropart'>
      <div className="herotopic">
        <h1>Let's Save More Lifes With <br />Our Helping Hand</h1>
        <p>Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed stet lorem sit clita duo justo erat amet</p>
        <Button1 Mybtn1={"Learn More"} />
      </div>
    </section>
  )
}
