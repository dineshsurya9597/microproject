import React from 'react'
import './Homefeaturedesign.css';

export default function Homefeaturedesign({haed1,head2,head3,sub1,sub2,cardimg}) {
  return (
    <div className="design1">
        <div className="headdesign">
            <h4>{haed1}</h4>
        </div>
        <h3>{head2}</h3>
        <p>{head3}</p>
        <div className="part1">
            <span>{sub1}</span>
            <span>{sub2}</span>
            <div className="percentage">
                <progress>progress</progress>
            </div>
        </div>
        <img src={cardimg} alt="img" />
    </div>

    
  )
}
