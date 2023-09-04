import React from 'react';
import '../../assets/styles/NavbarStyle.scss'
import logo from '../../assets/image/Icon/Logo.png';
import Links from './Links/Links';
import Search from './Search/Search';

export default function Navbar() {
  return (
    <div className='containerNav'>
      <div className='panelContainer'>
        <div className='logoItem'>
          <img
            className='logoNavbar'
            src={logo}
          />
          <p className='logoNamed'>
            Organick
          </p>
        </div>
        <div className='linkItemCont'>
          <Links />
        </div>
        <div className='additionalItem'>
          <Search />
        </div>
        <div className='cartItem'>
          <p className='cartText'>
            Cart (0)
          </p>
        </div>
      </div>
    </div>
  )
}
