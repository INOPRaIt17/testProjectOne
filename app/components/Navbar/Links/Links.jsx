import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className='linkItem'>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          Home
        </p>
      </Link>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          About
        </p>
      </Link>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          Pages
        </p>
      </Link>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          Shop
        </p>
      </Link>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          Projects
        </p>
      </Link>
      <Link to="/" className='linkStyle'>
        <p className='linkText'>
          News
        </p>
      </Link>
    </div>
  )
}
