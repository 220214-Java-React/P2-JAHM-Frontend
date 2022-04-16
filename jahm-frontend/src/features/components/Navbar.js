import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navigation.js'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/quiz" activeStyle>
            Quiz
          </NavLink>
          <NavLink to="/history" activeStyle>
            History
          </NavLink>
          <NavLink to="/logout" activeStyle>
            Logout
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/logout'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar