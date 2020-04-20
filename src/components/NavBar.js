import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
 

export class NavBar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">
               <Link to="/"> 
               {/* <img src="{logo.png}" alt="store" className="navbar-brand" />  */}
               <span className="text-uppercase font-weight-bold" style={{fontSize:'35px' }}> ova</span>
               </Link>
                <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                       <Link to="/" className="nav-link">Products </Link>
                   </li>
               </ul>
               <Link to="/cart" className="ml-auto" >
                   <ButtonContainer>
                       <span className="mr-2">
                            <i className="fas fa-cart-plus"/>
                        </span>
                        my cart 
                    </ButtonContainer>
               </Link>
           </NavWrapper>
        )
    }
}

export default NavBar

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link
{
    color:var(--mainWhite);
    font-size:1.3em;  
    text-transform:capitalize; 
}
`
