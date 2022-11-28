// Core
import React from "react";
import styled, { css, keyframes } from "styled-components";

// Components
import Heading from "./heading";
import Paragraph from "./paragraph";
import Header from "./header";

export const Section = styled.section(({ theme, background, bordered, lessPadding, striped }) => css`
    background: ${theme.colors[background]};
    font-family: 'Cerebri-Sans';

    padding: 32px;
    @media screen and (min-width: ${theme.breakPoints.md}) {
        padding: ${lessPadding ? '32px 64px' : '64px'};
    }

    ${bordered && `
        border-top: ${`1px solid ${theme.colors.greyBorder2}`};
    `}

    ${striped && `
        &:nth-child(even) {
            background: ${theme.colors.white};
            border-top: ${`1px solid ${theme.colors.greyBorder2}`};
            border-bottom: ${`1px solid ${theme.colors.greyBorder2}`};
        }

        &:nth-child(odd) {
            background: ${theme.colors.lightGrey};
        }
    `}
`);

export const MaxWidthContainer = styled.div(({ theme }) => css`
    width: 100%;
    @media screen and (min-width: ${theme.breakPoints.xxl}){
        max-width: 90%;
        margin: auto;
    }
    @media screen and (min-width: ${theme.breakPoints.fhd}){
        max-width: 80%;
    }
    @media screen and (min-width: ${theme.breakPoints.qhd}){
        max-width: 70%;
    }
    @media screen and (min-width: ${theme.breakPoints.uhd}){
        max-width: 60%;
    }
`);

const Bob = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 10px);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const HeroBase = styled.div`
    min-height: 80vh;

    @media screen and (min-width: ${props => props.theme.breakPoints.md}){
        min-height: 88vh;
    }

    svg {
        animation: ${Bob} 2.5s ease-in-out infinite;
    }
`;

export const Hero = () => (
    <Section
        background="black"
        className="d-flex align-items-center
        justify-items-center flex-column">
        <div className="w-100">
            <Header />
            <HeroBase className="d-flex justify-content-center align-items-center flex-column position-relative">
                <div>
                    <Heading as="h1" color="sunburstOrange">Hi, I'm Keir Covington</Heading>
                    <Heading as="h3" color="white"> Design &amp; Development Contractor</Heading>
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
            </HeroBase>
        </div>
    </Section>
);