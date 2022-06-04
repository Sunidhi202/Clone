import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Nav>
        <Logo src= "/images/logo.png" />
        <NavMenu>

        </NavMenu>
        <Login>Login</Login>
        
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 75px;
    background: white;
    border: 1px solid rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    padding: 1px 50px;
    overflow-x: hidden;

`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
`

const Logo = styled.img`
    width: 80px;
    height: 50px;
`
const Login = styled.a`
    width:60px;
    
    background-color: #00FF00;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;
    font-size: 18px;
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 12px;
    margin-right: 50px;
    margin-bottom: 12px;
   &:hover {
       background: #006400;
   }

   `


