import React from 'react'
import './Hometeam.css';
import Hometeamdesign from '../../Commonparts/Commondesign3/Hometeamdesign';
import Profile1 from '../../../Assets/profile1.jpg';
import Profile2 from '../../../Assets/profile2.jpg';
import Profile3 from '../../../Assets/profile3.jpg';
import Profile4 from '../../../Assets/profile4.jpg';

export default function Hometeam() {
  return (

    <section className='hometeamsec'>
      <div className="hometeamhead">
        <div className="hometeamhead1">
          <h4>Team Members</h4>
        </div>
        <h1>Every Child Deserves The <br />Opportunity To Learn</h1>
      </div>

      <div className="teamprofiles">
        <Hometeamdesign 
        Profile={Profile1}
        Profilename={"Full Name"}
        Profiledesti={"Destination"}
        />
        <Hometeamdesign 
        Profile={Profile2}
        Profilename={"Full Name"}
        Profiledesti={"Destination"}
        />
        <Hometeamdesign 
        Profile={Profile3}
        Profilename={"Full Name"}
        Profiledesti={"Destination"}
        />
        <Hometeamdesign 
        Profile={Profile4}
        Profilename={"Full Name"}
        Profiledesti={"Destination"}
        />
      </div>
    </section>
  )
}
