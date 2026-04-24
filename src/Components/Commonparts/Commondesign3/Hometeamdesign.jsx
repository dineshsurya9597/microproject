import React from 'react'
import './Hometeamdesign.css';


export default function Hometeamdesign({Profile,Profilename,Profiledesti}) {
  return (
    <div className="profiles">
        <img src={Profile} alt="profileimg" />
        <div className="profiletitle">
            <h2>{Profilename}</h2>
            <h4>{Profiledesti}</h4>
            <div className="profileicons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
            </div>
        </div>

    </div>
  )
}
