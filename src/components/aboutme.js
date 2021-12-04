
// Core
import React from 'react';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

const AboutMe = () => (
    <React.Fragment>
        <Heading as="h2" color="burntOrange">About Me</Heading>
        <Paragraph color="black">Hi there, I’m Keir. I’m a graphic designer with a technical skillset, I love web design and development and have been working with both disciplines from the age of 16. I am completely self taught in web development with 6 years of working experience.</Paragraph>
        <Paragraph color="black">I started using ReactJS in conjunction with styled components to design and build a component library for the development team to use. After getting familiar with tools such as git, npm, </Paragraph>
    </React.Fragment>
);

export default AboutMe;