import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './styles.scss'

const Header = ({ location }) => {
  const showBackButton = location.pathname !== '/'

  return (
    <div className='navbar-container'>
      <nav id='navbar' className='navbar fixed-top'>
        <div className='container'>
          <div className='row' style={{ flex: 1 }}>
            <div className='col-2 d-flex align-items-center'>
              {showBackButton && (
                <Link to='/'><i class="fas fa-chevron-left"></i></Link>
              )}
            </div>
            <div className='col-8 text-center'>
              <Link to='/'>
                <img src='/public/logo.png' width='30' height='30' alt='The Fork Logo' />
              </Link>
            </div>
            <div className='col-2'></div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)
