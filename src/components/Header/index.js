import React from 'react'
import './styles.scss'

const Header = () => (
  <nav id='navbar' className='navbar fixed-top'>
    <div className='mr-auto ml-auto'>
      <a className='navbar-brand' href='#'>
        <img src='public/logo.png' width='30' height='30' className='d-inline-block align-top' alt='The Fork Logo' />
      </a>
    </div>
  </nav>
)

export default Header
