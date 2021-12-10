
// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';
import { Section } from '../pages/homepage';

// Images
import GitLogo from '../images/gitlogo.svg';
import ParcelLogo from '../images/parcellogo.svg';
import BootstrapLogo from '../images/bootstraplogo.svg';
import TwitterLogo from '../images/twitterlogo.svg';
import LinkedInLogo from '../images/linkedinlogo.svg';


const Code = styled.code(({ theme }) => css`
    background: ${theme.colors.lightGrey};
    border: 1px solid ${theme.colors.greyBorder};
    padding: 2px;
    border-radius: 4px;
    margin: 0 2px;
    color: ${theme.colors.burntOrange};
`);

const FooterImg = styled.img`
    height: 54px;
    max-height: 54px;
`;

const SocialImg = styled.img`
    height: 40px;
    max-height: 40px;
`;

const MadeBy = styled.div(({ theme }) => css`
    background: ${theme.colors.burntOrange};
    color: ${theme.colors.white};
`);

const Footer = () => (
    <React.Fragment>
        <Section background="lightGrey" bordered lessPadding>
            <div className="row justify-content-center">
                <div className="col-4 col-md-2 col-xxl-1 text-center">
                    <a
                        href="https://www.linkedin.com/in/keir-covington-30783965/"
                        alt="LinkedIn"
                        className="text-decoration-none"
                        target="_blank"
                    >
                        <SocialImg src={ LinkedInLogo } alt="Git Logo" />
                    </a>
                </div>
                <div className="col-4 col-md-2 col-xxl-1 text-center">
                    <a
                        href="https://twitter.com/mekeirc"
                        alt="Twitter"
                        className="text-decoration-none"
                        target="_blank"
                    >
                        <SocialImg src={ TwitterLogo } alt="Parcel Logo" />
                    </a>
                </div>
            </div>
        </Section>
        <Section background="white">
            <div className="row justify-content-center">
                <div className="col-12 col-md-2 col-xxl-2 text-center mb-5 mb-md-0">
                    <a
                        href="https://github.com/mekeirc/personal-website/tree/master/src"
                        alt="See project on git"
                        className="text-decoration-none"
                        target="_blank"
                    >
                        <FooterImg src={ GitLogo } alt="Git Logo" className="mb-3" />
                        <Paragraph color="black" subtext className="mb-0">View source code!</Paragraph>
                    </a>
                </div>
                <div className="col-12 col-md-4 col-xxl-2 text-center mb-5 mb-md-0">
                    <a
                        href="https://parceljs.org/"
                        alt="Built with ParcelJS"
                        className="text-decoration-none"
                        target="_blank"
                    >
                        <FooterImg src={ ParcelLogo } alt="Parcel Logo" className="mb-3" />
                        <Paragraph color="black" subtext className="mb-0">Built without <Code>create-react-app</Code></Paragraph>
                    </a>
                </div>
                <div className="col-12 col-md-3 col-xxl-2 text-center">
                    <a
                        href="https://getbootstrap.com/"
                        alt="Built with Bootstrap"
                        className="text-decoration-none"
                        target="_blank"
                    >
                        <FooterImg src={ BootstrapLogo } alt="Parcel Logo" className="mb-3" />
                        <Paragraph color="black" subtext className="mb-0">Built with Bootstrap</Paragraph>
                    </a>
                </div>
            </div>
        </Section>
        <MadeBy className="text-center py-1">
            Made with <span className="ps-1 pe-2">🤍</span> in Nottingham &bull; &copy; Keir Covington 2021
        </MadeBy>
    </React.Fragment>
);

export default Footer;