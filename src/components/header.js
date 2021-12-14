import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import MenuClosed from '../images/menu-closed.svg';
import MenuOpen from '../images/menu-open.svg';
import PersonalLogo from '../images/personal-logo.svg';

const NavItem = styled.a`
    color: ${props => props.theme.colors.darkGrey};
    padding: 0 64px 0 0;
    font-size: 17px;
    text-decoration: none;

    &:first-of-type { padding: 0 64px 0 64px; }
    &:last-of-type { padding: 0 64px 0 0; }
    &:hover { color: #fff; }
`;

const MobileMenu = styled.div(({ isOpen, theme }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    background: ${theme.colors.black};
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 32px;

    @supports not (-webkit-touch-callout: none) {
        height: calc(100vh - 55px);
    }
`);

const MobileLink = styled.a(({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 32px;
    font-family: 'Cerebri-Sans-Bold';
    text-decoration: none;

    @media screen and (min-width: ${theme.breakPoints.md}) {
        font-size: 50px;
    }

    &:focus, &:hover { color: ${theme.colors.sunburstOrange}; }
`);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = useCallback(
        () => setIsOpen(!isOpen),
        [isOpen, setIsOpen],
    );

    return (
        <React.Fragment>
            <MobileMenu id="mobile-menu" className="d-lg-none flex-column" isOpen={ isOpen }>
                <a className="d-lg-none align-self-end" onClick={ toggleMobileMenu }>
                    <img src={ MenuOpen } alt="Click to open mobile menu" />
                </a>
                <div className="d-flex flex-column justify-content-center h-100">
                    <MobileLink href="#about" alt="link1" onClick={ toggleMobileMenu }>
                        About
                    </MobileLink>
                    <MobileLink href="#hobbies" alt="link1" onClick={ toggleMobileMenu }>
                       Interests
                    </MobileLink>
                    <MobileLink href="#skills" alt="link1" onClick={ toggleMobileMenu }>
                        Skills &amp; Tools
                    </MobileLink>
                    <MobileLink href="#experience" alt="link1" onClick={ toggleMobileMenu }>
                        Experience
                    </MobileLink>
                    <MobileLink href="#portfolio" alt="link1" onClick={ toggleMobileMenu }>
                        Portfolio
                    </MobileLink>
                </div>
            </MobileMenu>
            <div className="d-flex justify-content-between align-items-start">
                <img src={ PersonalLogo } alt="personal logo" />
                {/* Mobile Navigation */}
                <a className="d-lg-none" onClick={ toggleMobileMenu }>
                    <img src={ MenuClosed } alt="Click to open mobile menu" />
                </a>
                {/* Desktop Navigation */}
                <div className="d-none d-lg-block">
                    <NavItem href="#about" alt="nav item">About</NavItem>
                    <NavItem href="#skills" alt="nav item">Skills</NavItem>
                    <NavItem href="#experience" alt="nav item">Experience</NavItem>
                    <NavItem href="#portfolio" alt="nav item">Portfolio &amp; Demos</NavItem>
                </div>
            </div>
        </React.Fragment>
    );
}   

export default Header;