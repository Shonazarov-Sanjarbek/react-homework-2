import React from 'react'
import "./Header.scss"
import logo from "../../assets/img/logo.png"

const Header = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <ul className="header__collection">
                <li className="header__item">
                    <a href="#">
                        <span>
                            Discovery
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
