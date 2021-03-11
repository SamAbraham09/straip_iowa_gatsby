import React, { Component } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact'
import { Link } from 'gatsby'
import CustomNavLink from './customLink'
import './navbar.css'
import logo from '../images/Logo_Image.ico'

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className="navigation">
        <img
          src={logo}
          style={{ height: 60, listStyleType: 'none', float: 'left',marginTop: 10 }}
        />
        <ul className="menu" style={{ listStyleType: 'none', float: 'right',height: 80,paddingLeft: 40 }}>
          <li className="menu__item">
            <a href="#" className="menu__link">
              <span className="menu__title">
                <span className="menu__first-word" data-hover="Ho">
                  Ho
                </span>
                <span className="menu__second-word" data-hover="me">
                  me
                </span>
              </span>
            </a>
          </li>
          <li className="menu__item dropdown1">
            <a href="#" className="menu__link">
              <span className="menu__title">
                <span className="menu__first-word" data-hover="Comm">
                  Comm
                </span>
                <span className="menu__second-word" data-hover="unity +">
                  unity +
                </span>
              </span>
            </a>
            <div className="dropdown-content1" style={{ marginTop: -30 }}>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Bulletin">
                    Bulletin
                  </span>
                  <span className="menu__second-word" data-hover="Archive">
                    Archive
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Cred">
                    Cred
                  </span>
                  <span className="menu__second-word" data-hover="entials">
                    entials
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Educ">
                    Educ
                  </span>
                  <span className="menu__second-word" data-hover="ation">
                    ation
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Face">
                    Face
                  </span>
                  <span className="menu__second-word" data-hover="book">
                    book
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Post a">
                    Post a
                  </span>
                  <span className="menu__second-word" data-hover="&nbsp;Job">
                    &nbsp;Job
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title">
                  <span className="menu__first-word" data-hover="Reso">
                    Reso
                  </span>
                  <span className="menu__second-word" data-hover="urces">
                    urces
                  </span>
                </span>
              </a>
            </div>
          </li>
          <li className="menu__item dropdown">
            <a href="#" className="menu__link">
              <span className="menu__title dropbtn">
                <span className="menu__first-word" data-hover="Inter">
                  Inter
                </span>
                <span className="menu__second-word" data-hover="preters +">
                  preters +
                </span>
              </span>
            </a>
            <div className="dropdown-content" style={{ marginTop: 0 }}>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Fall">
                    Fall
                  </span>
                  <span className="menu__second-word" data-hover="Conference">
                    Conference
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="CEU">
                    CEU
                  </span>
                  <span className="menu__second-word" data-hover="Events">
                    Events
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Book">
                    Book
                  </span>
                  <span className="menu__second-word" data-hover="Club">
                    Club
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="CMP">
                    CMP
                  </span>
                  <span className="menu__second-word" data-hover="Sponsor">
                    Sponsor
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Iowa">
                    Iowa
                  </span>
                  <span className="menu__second-word" data-hover="License">
                    License
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Join">
                    Join
                  </span>
                  <span className="menu__second-word" data-hover="and Renew">
                    and Renew
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Legal">
                    Legal
                  </span>
                  <span className="menu__second-word" data-hover="Resources">
                    Resources
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Merch">
                    Merch
                  </span>
                  <span className="menu__second-word" data-hover="andise">
                    andise
                  </span>
                </span>
              </a>
            </div>
          </li>
          <li className="menu__item dropdown">
            <a href="#" className="menu__link">
              <span className="menu__title dropbtn">
                <span className="menu__first-word" data-hover="Mem">
                  Mem
                </span>
                <span className="menu__second-word" data-hover="bers +">
                  bers +
                </span>
              </span>
            </a>
            <div className="dropdown-content">
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Employ">
                    Employ
                  </span>
                  <span className="menu__second-word" data-hover="ment+">
                    ment
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="In">
                    In
                  </span>
                  <span className="menu__second-word" data-hover="Memoriam">
                    Memoriam
                  </span>
                </span>
              </a>
              <a href="#" className="menu__link">
                <span className="menu__title dropbtn">
                  <span className="menu__first-word" data-hover="Manage">
                    Manage
                  </span>
                  <span className="menu__second-word" data-hover="Account">
                    Account
                  </span>
                </span>
              </a>
            </div>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              <span className="menu__title">
                <span className="menu__first-word" data-hover="Cale">
                  Cale
                </span>
                <span className="menu__second-word" data-hover="ndar">
                  ndar
                </span>
              </span>
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              <span className="menu__title">
                <span className="menu__first-word" data-hover="Log">
                  Log
                </span>
                <span className="menu__second-word" data-hover="out">
                  out
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavbarPage
