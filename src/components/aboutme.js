
// Core
import React from 'react';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Images
import GitLogo from '../images/gitlogo.png';
import { MaxWidthContainer, Section } from '../components/homepage';

const DownloadIcon = () => (
    <svg width="21px" height="26px" viewBox="0 0 21 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="HiFi" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Artboard" transform="translate(-8.000000, -5.000000)">
                <polygon id="Path-5" fill="#FF7A00" points="8 14 19 25 29 14 23 14 23 5 14 5 14 14"></polygon>
                <rect id="Rectangle" fill="#FFBC00" x="8" y="28" width="21" height="3"></rect>
            </g>
        </g>
    </svg>
);

const AboutMe = () => (
    <Section id="about" background="white">
        <MaxWidthContainer>
            <Heading as="h2" color="burntOrange">About Me</Heading>
            <Paragraph color="black">
                Hi there, I'm Keir Covington. I'm a contractor specialising in UX/UI Design &amp; Frontend Development, as well as everything in between.
                Hire one person on contract and get 3 job roles! I love designing and building lean, scalable websites using react.
            </Paragraph>
            <Paragraph color="black">
                Some useful links:
            </Paragraph>
            <div className="d-flex align-items-center">
                <a
                    href="https://github.com/mekeirc"
                    alt="Check out my GitHub profile"
                    className="text-decoration-none"
                    target="_blank"
                >
                    <div className="d-flex align-items-center">
                        <img src={ GitLogo } alt="github repo" />
                        <Paragraph color="black" className="ms-2 mb-0">Github Profile</Paragraph>
                    </div>
                </a>
                <a
                    href="https://me.keirc.co.uk/cv/CV_2023-01-24.pdf"
                    alt="Check out my GitHub profile"
                    className="text-decoration-none"
                    target="_blank"
                >
                    <div className="d-flex ms-5">
                        <DownloadIcon />
                        <Paragraph color="black" className="ms-2 mb-0">Download my CV</Paragraph>
                    </div>
                </a>
            </div>
        </MaxWidthContainer>
    </Section>
);

export default AboutMe;