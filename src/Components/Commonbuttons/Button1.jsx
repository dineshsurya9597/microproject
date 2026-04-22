import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button1({Mybtn1}) {
  return (
    <button className='btn1'>
        <Link to={'/'}> {Mybtn1} <i class="bi bi-arrow-right-circle-fill"></i></Link>
    </button>
  )
}
