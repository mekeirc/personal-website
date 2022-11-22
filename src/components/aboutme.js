
// Core
import React from 'react';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Images
import GitLogo from '../images/gitlogo.svg';
import { MaxWidthContainer, Section } from '../pages/homepage';

const AboutMe = () => (
    <Section id="about">
        <MaxWidthContainer>
            <Heading as="h2" color="burntOrange">About Me</Heading>
            <Paragraph color="black">
                Hi there, I'm Keir Covington. I'm a contractor specialising in UX/UI Design &amp; Frontend Development, as well as everything in between.
                Hire one person on contract and get 3 job roles! I love designing and building lean, scalable websites using react.
            </Paragraph>
            <Paragraph color="black">
                Check out my GitHub profile for this project and many others!
            </Paragraph>
            <a
                href="https://github.com/mekeirc/personal-website/tree/master/src"
                alt="Check out my GitHub profile"
                className="text-decoration-none"
                target="_blank"
            >
                <img src={ GitLogo } alt="github repo" className="mt-3" />
            </a>
        </MaxWidthContainer>
    </Section>
);

export default AboutMe;