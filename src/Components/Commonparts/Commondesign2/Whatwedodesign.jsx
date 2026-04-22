import React from 'react'
import './Whatwedodesign.css';
import Button2 from '../../Commonbuttons/Button2'

export default function Whatwedodesign({topic1,topic2,topic3}) {
  return (
    <section className='content'>
        <div className="icon"><i class={topic1}></i></div>
        <h1>{topic2}</h1>
        <p>{topic3}</p>
        <div className="btn"><Button2 Mybtn2={"Learn More"} /></div>
    </section>
  )
}
