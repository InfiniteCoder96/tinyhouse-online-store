import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../icons8-baratheon-house-48.png';
import {ButtonContainer} from './Button';
import styled from "styled-components";

class Navbar extends Component {
    render() {
        return (
            <NavWarapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/">
                    <img src={logo} alt="tinyhouse" className="navbar-brand" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            tinyhouse
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/create" className="nav-link">
                            Create
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/index" className="nav-link">
                            Index
                        </Link>
                    </li>
                </ul>
                </div>

                <Link to="/cart" className="ml-auto" >
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus"/> My Cart
                        </span>
                    </ButtonContainer>
                </Link>

            </NavWarapper>
        );
    }
}

const NavWarapper = styled.nav`
    background:var(--mainDark);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;

export default Navbar;