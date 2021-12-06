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

export const Section = styled.section(({ theme, background, bordered }) => css`
    background: ${theme.colors[background]};
    font-family: 'Cerebri Sans';

    border-top: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};
    border-bottom: ${bordered ? `1px solid ${theme.colors.greyBorder}` : '0'};

    padding: 32px;
    @media screen and (min-width: ${theme.breakPoints.md}) {
        padding: 64px;
    }

    .pt-32 { padding-top: 32px; }
    .pb-32 { padding-bottom: 32px; }
    .pt-64 { padding-top: 64px; }
    .pb-64 { padding-bottom: 64px; }
    .pt-128, &.pt-128 { padding-top: 128px; }
    .pb-128, &.pb-128 { padding-bottom: 128px; }
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
        <Section background="white" id="about">
            <AboutMe />
            <Hobbies />
        </Section>
        <RecentTracks />
        <TopAlbums />
        <Skills />
        <Experience />
    </React.Fragment> 
);
 
export default Layout;