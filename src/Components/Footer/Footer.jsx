import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="bottompart1">
        <h1>Chari<span>Team</span></h1>
        <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
        <div className="icons">
          <span><i class="bi bi-twitter"></i></span>
          <span><i class="bi bi-facebook"></i></span>
          <span><i class="bi bi-youtube"></i></span>
          <span><i class="bi bi-envelope-plus"></i></span>
        </div>
      </div>

      <div className="bottompart2">
        <h4>Address</h4>
        <div className="address">
          <ul>
            <li><i class="bi bi-geo-alt-fill"></i>123 Street, New York, USA</li>
            <li><i class="bi bi-telephone-fill"></i>+012 345 67890</li>
            <li><i class="bi bi-envelope"></i>info@example.com</li>
          </ul>
        </div>
      </div>

      <div className="bottompart3">
        <h4>Quick Links</h4>
        <div className="links">
          <ul>
            <li><i class="bi bi-chevron-right"></i><a href="#">About us</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#">Contact us</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#">Our Services</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#">Terms & Conditions</a></li>
            <li><i class="bi bi-chevron-right"></i><a href="#">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="bottompart4">
        <h4>Newsletter</h4>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>

        <div className="form">
          <input type="email" name="uemail" id="uemail"placeholder='Enter Email'/>
          <span>Sign up</span>
        </div>
      </div>
    </footer>

  )
}
