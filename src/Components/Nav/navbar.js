import React from 'react'
import "./navbar.css"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navElements'
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={require('../../images/logo.png')} style={{ height: "66px", width: "100px", paddingLeft: "4em" }} alt="" />
                </NavLink>
                <Bars />
                <NavMenu className='navMenu'>
                    <NavLink to="/about" className="content" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" className="content" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" className="content" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/sign-up" className="content" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavBtnLink to="sign-in" >Sign In</NavBtnLink>
                </NavMenu>
                {/* <NavBtn style={{ paddingRight: "4rem" }}>
                    <NavBtnLink to="sign-in" >Sign In</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>

    )
}
