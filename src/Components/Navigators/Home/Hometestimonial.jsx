import React from 'react'
import './Hometestimonial.css';
import Hometestmonialdesign from '../../Commonparts/Commondesign4/Hometestmonialdesign';

export default function Hometestimonial() {
  return (
    <section className='hometestsec'>
      <div className="hometesthead">
        <div className="hometesthead1">
          <h4>Testimonial</h4>
        </div>
        <h1>Trusted By Thousands Of <br />People And Nonprofits</h1>
      </div>

      <div className="testmonialdesign">
        <Hometestmonialdesign />
      </div>
    </section>
  )
}
