import React from 'react'
import './Hometestmonialdesign.css';
import Grade1 from '../../../Assets/profile1.jpg';

export default function Hometestmonialdesign() {
  return (
    <section className='hometest'>
        <div className="testmonialpart">
            <i class="bi bi-arrow-left"></i><img src={Grade1} alt="gradepoint" /><i class="bi bi-arrow-right"></i>
        </div>

        <div className="testcontent">
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <h1>Donor Name</h1>
            <h4>Profession</h4>
         </div>
    </section>
  )
}
