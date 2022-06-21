
// Core
import React from 'react';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Images
import GitLogo from '../images/gitlogo.svg';

const AboutMe = () => (
    <React.Fragment>
        <Heading as="h2" color="burntOrange">About Me</Heading>
        <Paragraph color="black">Hi there, I’m Keir Covington. I’m a contract UX/UI Designer, Graphic Designer &amp; Web Developer, as well as everything in between.</Paragraph>
        <Paragraph color="black">
            My real jam is building component-based UI that's lean, scalable and provides a great user experience.
        </Paragraph>
        <Paragraph color="black">
            Check out my GitHub profile for this project and many others!
        </Paragraph>
        <a
            href="https://github.com/mekeirc"
            alt="Check out my GitHub profile"
            className="text-decoration-none"
            target="_blank"
        >
            <img src={ GitLogo } alt="github repo" className="mt-3" />
        </a>
    </React.Fragment>
);

export default AboutMe;