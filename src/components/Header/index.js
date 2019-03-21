import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Header = () => (
  <div className='navbar-container'>
    <nav id='navbar' className='navbar fixed-top'>
      <div className='mr-auto ml-auto'>
        <Link className='navbar-brand' to='/'>
          <img src='/public/logo.png' width='30' height='30' className='d-inline-block align-top' alt='The Fork Logo' />
        </Link>
      </div>
    </nav>
  </div>
)

export default Header
