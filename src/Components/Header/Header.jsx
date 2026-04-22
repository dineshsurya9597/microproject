import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import Button2 from '../Commonbuttons/Button2';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
            <h1>Chari<span>Team</span></h1>
            <div className="navbar"><i class="bi bi-list"></i></div>
        </div>
        <div className="navigators">
            <ul>
                <li><Link to={'/'}>Home main</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Causes'}>Causes</Link></li>
                <li><Link to={'/Pages'}>Pages</Link></li>
                <li><Link to={'/Contacts'}>Contact</Link></li>
                <Button2 Mybtn2={"Donate Now"} />
                {/* <li><Link to={'.Donate'}>Donate Now <i class="bi bi-arrow-right-circle-fill"></i></Link></li> */}
            </ul>
        </div>
    </header>
    )
  }
}



