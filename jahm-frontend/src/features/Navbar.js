import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './ Navigation.js'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Navlink to="/">
          <h1>Logo</h1>
        </Navlink>
        <Bars />
        <NavMenu>
          <Navlink to="/home" activeStyle>
            Home
          </Navlink>
          <Navlink to="/quiz" activeStyle>
            Quiz
          </Navlink>
          <Navlink to="/view past scores" activeStyle>
            View Past Scores
          </Navlink>
          <Navlink to="/logout" activeStyle>
            Logout
          </Navlink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/logout'>Logout</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar