
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
        <Paragraph color="black">Hi there, I’m Keir Covington. I’m a Graphic Designer &amp; Web Developer, and everything in between.</Paragraph>
        <Paragraph color="black">
            I mainly use Sketch to wireframe and design projects and React, 
            ES6 Javascript, SCSS &amp; HTML to build them, along with tools such
            as create-react-app, parceljs, npm, git and many others.
        </Paragraph>
        <Paragraph color="black">
            If you're here for source code, check out my git repo for this project below:
        </Paragraph>
        <a
            href="https://github.com/mekeirc/personal-website/tree/master/src"
            alt="See project on git"
            className="text-decoration-none"
            target="_blank"
        >
            <img src={ GitLogo } alt="github repo" className="mt-3" />
        </a>

    </React.Fragment>
);

export default AboutMe;