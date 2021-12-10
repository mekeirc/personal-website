import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Header from '../components/header';
import Hobbies from '../components/hobbies';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import RecentTracks from '../components/recenttracks';
import TopAlbums from '../components/topalbums';
import Experience from '../components/experience';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';

export const Section = styled.section(({ theme, background, bordered, lessPadding }) => css`
    background: ${theme.colors[background]};
    font-family: 'Cerebri-Sans';

    padding: 32px;
    @media screen and (min-width: ${theme.breakPoints.md}) {
        padding: ${lessPadding ? '32px 64px' : '64px'};
    }

    border-top: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};
    border-bottom: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};
`);

export const MaxWidthContainer = styled.div(({ theme }) => css`
    width: 100%;
    @media screen and (min-width: ${theme.breakPoints.xxl}){
        max-width: 80%;
        margin: auto;
    }

    @media screen and (min-width: ${theme.breakPoints.xxxl}){
        max-width: 60%;
    }
`);

const Hero = styled.div`
    min-height: 80vh;

    @media screen and (min-width: ${props => props.theme.breakPoints.md}){
        min-height: 88vh;
    }
`;

const Layout = () => (
    <React.Fragment>
        <Section
            background="black"
            className="d-flex align-items-center
            justify-items-center flex-column">
            <div className="w-100">
                <Header />
                <Hero className="d-flex justify-content-center flex-column position-relative">
                    <div>
                        <Heading as="h1" color="sunburstOrange">Hi, I'm Keir Covington</Heading>
                        <Heading as="h3" color="white">Graphic Designer + Frontend Developer Hybrid</Heading>
                        <Paragraph>I help create cohesion between Design, Development &amp; User Experience</Paragraph>
                        <Paragraph subtext>Based in Nottingham, UK</Paragraph>
                    </div>
                    <div className="position-absolute text-center bottom-0 w-100">
                        <a href="#about">
                            <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="HiFi" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Desktop-HD-Copy" transform="translate(-706.000000, -921.000000)">
                                        <g id="Group-11" transform="translate(706.000000, 921.000000)">
                                            <rect id="Rectangle" x="0" y="0" width="28" height="28"></rect>
                                            <polyline id="Path-2" stroke="#FFBC00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="2 8 14 20 26 8"></polyline>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </Hero>
            </div>
        </Section>
        <MaxWidthContainer>
            <Section background="white" id="about">
                <AboutMe />
                <Hobbies />
            </Section>
        </MaxWidthContainer>
        <RecentTracks />
        <TopAlbums />
        <Skills />
        <Experience />
        <Portfolio />
        <Footer />
    </React.Fragment> 
);
 
export default Layout;