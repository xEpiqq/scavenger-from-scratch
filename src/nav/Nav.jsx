import React from 'react'
import './nav.scss'
import {Link} from 'react-router-dom'
import {crow_logo} from '../images'
function Nav() {
  return (
    <div className='navbar'>
        <div className='nav_left'>
        <img src={crow_logo} />
        </div>
        <div className='nav_mid'>
        <Link className='nav_link' to=''>Product</Link>
        <Link className='nav_link' to=''>Pricing</Link>
        <Link className='nav_link' to=''>Blog</Link>
        <Link className='nav_link' to=''>Resources</Link>
        <Link className='nav_link' to=''>About</Link>
        </div>
        <div className='nav_right'>
        <Link className='nav_link' to=''>Log In</Link>
        <Link className='nav_link' to=''><button className='free_trial'>Free Trial</button></Link>
        <Link className='nav_link' to=''><button className='see_demo'>See Demo</button></Link>
        </div>
    </div>
  )
}

export default Nav