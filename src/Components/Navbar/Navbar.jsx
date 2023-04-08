import React from 'react'
import './Navbar.css'
import {TiShoppingCart} from 'react-icons/ti'
import logo from '../../assets/svgs/logo.svg'
import profile from '../../assets/images/image-avatar.png'

function Navbar() {
  return (
    <div className='container'>
        <div className="left">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>

            <li> <small>Collection  </small> </li>
            <li> <small> Men </small> </li>
            <li> <small>Women </small> </li>
            <li> <small> About</small> </li>
            <li> <small> Contact</small> </li>

            </ul>
        </div>
        <div className="right">
            <div className="icon">
                <TiShoppingCart size={30}/>
            </div>
            <div className="profile">
                <img src={profile} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Navbar