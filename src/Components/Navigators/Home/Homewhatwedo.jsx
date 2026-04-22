import React from 'react'
import './Homewhatwedo.css';
import Whatwedodesign from '../../Commonparts/Commondesign2/Whatwedodesign';


export default function Homewhatwedo() {
  return (
    <section className='whatwedo'>
      <div className="head">
        <div className="head1">
          <h4>What We Do</h4>
        </div>
        <h1>Learn More What We Do <br /> And Get Involved</h1>
      </div>

      <div className="model">
        <Whatwedodesign 
        
        topic1={"bi bi-book"}
        topic2={"Child Education"}
        topic3={"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."}
        />

        <Whatwedodesign 
        
        topic1={"bi bi-heart-pulse"}
        topic2={"Medical Treatment"}
        topic3={"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."}
        />

        <Whatwedodesign 
        
        topic1={"bi bi-droplet"}
        topic2={"Pure Drinking Water"}
        topic3={"Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."}
        />
      </div>
    </section>
  )
}

