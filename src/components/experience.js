
// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';
import { Section } from './layout';

const ExperienceSection = styled.div(({ theme, background }) => css`
    background: ${theme.colors[background]};
    font-family: 'Cerebri Sans';
`);

const Experience = () => (
    <React.Fragment>
        <Section className="pb-0">
            <Heading as="h2" color="burntOrange">Experience</Heading>
        </Section>
        <Section>
            <div className="d-flex pb-3">
                <div className="col-3">
                    <Paragraph color="burntOrange" className="mb-0">Role</Paragraph>
                    <Heading as="h4" color="burntOrange">Frontend Developer</Heading>
                </div>
                <div className="col-3">
                    <Paragraph color="black" className="mb-0">Company</Paragraph>
                    <Heading as="h4" color="black">Clicktech Ltd / Adzooma</Heading>
                </div>
                <div className="col-3">
                    <Paragraph className="mb-0">Duration</Paragraph>
                    <Heading as="h4" color="darkGrey">May 2019 - Oct 2021</Heading>
                </div>
            </div>
            <Paragraph color="black">Hi there, I’m Keir. I’m a graphic designer with a technical skillset, I love web design and development and have been working with both disciplines from the age of 16. I am completely self taught in web development with 6 years of working experience.</Paragraph>
            <Paragraph color="black">I started using ReactJS in conjunction with styled components to design and build a component library for the development team to use. After getting familiar with tools such as git, npm, </Paragraph>
        </Section>
        <Section background="lightGrey" bordered>
            <Paragraph color="black">Hi there, I’m Keir. I’m a graphic designer with a technical skillset, I love web design and development and have been working with both disciplines from the age of 16. I am completely self taught in web development with 6 years of working experience.</Paragraph>
            <Paragraph color="black">I started using ReactJS in conjunction with styled components to design and build a component library for the development team to use. After getting familiar with tools such as git, npm, </Paragraph>
        </Section>
        <Section>
            <Paragraph color="black">Hi there, I’m Keir. I’m a graphic designer with a technical skillset, I love web design and development and have been working with both disciplines from the age of 16. I am completely self taught in web development with 6 years of working experience.</Paragraph>
            <Paragraph color="black">I started using ReactJS in conjunction with styled components to design and build a component library for the development team to use. After getting familiar with tools such as git, npm, </Paragraph>
        </Section>
    </React.Fragment>
);

export default Experience;