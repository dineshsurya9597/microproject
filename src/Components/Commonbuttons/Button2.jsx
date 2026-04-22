import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

export default function Button2({Mybtn2}) {
  return (
    <button className='btn2'>
        <Link to={'/'}> {Mybtn2} <i class="bi bi-arrow-right-circle-fill"></i></Link>
    </button>
  )
}
