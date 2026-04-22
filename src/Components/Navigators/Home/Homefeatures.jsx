import React from 'react'
import './Homefeatures.css';
import Homefeaturedesign from '../../Commonparts/Commondesign1/Homefeaturedesign';
import Img1 from '../../../Assets/img1.jpg';
import Img2 from '../../../Assets/img2.jpg';
import Img3 from '../../../Assets/img3.jpg';

export default function Homefeatures() {
  return (
    <section className='featurepart'>
      <div className="head">
        <div className="head1">
          <h4>Feature Causes</h4>
        </div>
        <h1>Every Child Deserves The <br />Opportunity To Learn</h1>
      </div>

      <div className="designs">
        <Homefeaturedesign 
        haed1={"Education"}
        head2={"Education For African Children"} 
        head3={"Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos"}
        sub1={"$10,000 Goal"}
        sub2={"$9,542 Raised"}
        cardimg={Img1}
        />

        <Homefeaturedesign 

        haed1={"Pure water"}
        head2={"Ensure Pure Drinking Water"} 
        head3={"Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos"}
        sub1={"$10,000 Goal"}
        sub2={"$9,542 Raised"}
        cardimg={Img2}
        />

      <Homefeaturedesign 

        haed1={"Healthy Life"}
        head2={"Ensure Medical Treatment"} 
        head3={"Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos"}
        sub1={"$10,000 Goal"}
        sub2={"$9,542 Raised"}
        cardimg={Img3}
        />
      </div>
    </section>
  )
}
