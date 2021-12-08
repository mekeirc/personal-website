import React from 'react';
import styled, { css } from 'styled-components';
import Heading from './heading';
import Paragraph from './paragraph';
import Header from './header';
import Hobbies from './hobbies';
import AboutMe from './aboutme';
import Skills from './skills';
import RecentTracks from './recenttracks';
import TopAlbums from './topalbums';
import Experience from './experience';
import Portfolio from './portfolio';
import Footer from './footer';

export const Section = styled.section(({ theme, background, bordered, lessPadding }) => css`
    background: ${theme.colors[background]};
    font-family: 'Cerebri Sans';

    padding: 32px;
    @media screen and (min-width: ${theme.breakPoints.md}) {
        padding: ${lessPadding ? '32px 64px' : '64px'};
    }

    border-top: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};
    border-bottom: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};

    .pt-32 { padding-top: 32px; }
    .pb-32 { padding-bottom: 32px; }
    .pt-64 { padding-top: 64px; }
    .pb-64 { padding-bottom: 64px; }
    .pt-128, &.pt-128 { padding-top: 128px; }
    .pb-128, &.pb-128 { padding-bottom: 128px; }

    .mt-32, &.mt-32 { margin-top: 32px; }
    .mb-32, &.mb-32 { margin-bottom: 32px; }
    .mt-64, &.mt-64 { margin-top: 64px; }
    .mb-64, &.mb-64 { margin-bottom: 64px; }
    .mt-128, &.mt-128 { margin-top: 128px; }
    .mb-128, &.mb-128 { margin-bottom: 128px; }
`);

export const MaxWidthContainer = styled.div(({ theme }) => css`
    @media screen and (min-width: ${theme.breakPoints.xxl}){
        max-width: 80%;
        margin: auto;
    }
`);

const Layout = () => (
    <React.Fragment>
        <Section
            background="black"
            className="d-flex align-items-center
            justify-items-center flex-column">
            <div className="w-100">
                <Header />
                <div className="d-flex justify-content-center flex-column position-relative" style={{ minHeight: '88vh' }}>
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
                </div>
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