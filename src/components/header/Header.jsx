import React from 'react'
import "./Header.scss"
import logo from "../../assets/img/logo.png"
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoSidebarExpand } from "react-icons/go";

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
                <li className="header__item">
                    <a href="#">
                        <span>
                            About
                        </span>
                    </a>
                </li>
                <li className="header__item">
                    <a href="#">
                        <span>
                            Contact us
                        </span>
                    </a>
                </li>
            </ul>
            <div className="header__icons">
                <div className="header__icon">
                    <FaRegUser />
                </div>
                <div className="header__icon">
                    <PiShoppingCartLight />
                </div>
            </div>
            <div className="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="header__sidebar">
                <GoSidebarExpand />
                <ul className="header__sidebar__collection">
                    <li className="header__item">
                        <a href="#">
                            <span>
                                Discovery
                            </span>
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#">
                            <span>
                                About
                            </span>
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#">
                            <span>
                                Contact us
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
