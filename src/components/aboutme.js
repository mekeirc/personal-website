
// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Images
import { MaxWidthContainer, Section } from '../components/homepage';

const BorderedSection = styled.div(({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.greyBorder2};
`);

const AboutMe = () => (
    <BorderedSection>
        <Section id="about" background="white">
            <MaxWidthContainer>
                <Heading as="h2" color="burntOrange">About Me</Heading>
                <Paragraph color="black">
                    Hi there, I'm Keir Covington. I'm a full stack designer - someone who designs then builds solutions from wireframe to repo.
                    Originally from a graphic design background, I've been designing and building websites since 2008 and learned the hard way!
                    I have around a decade of professional design and development experience and can provide multi-role value to clients.
                </Paragraph>
                <Paragraph color="black">
                    My skills include: Print Design, UI/UX Design, Video Editing &amp; Production, SVG Animation and Web Development (HTML / CSS / Javascript), along with project analysis and management.
                    I'm highly analytical and have a keen attention to detail that many developers lack - hire 1 person and get 3+ job roles for the price of one!
                </Paragraph>
            </MaxWidthContainer>
        </Section>
    </BorderedSection>
);

export default AboutMe;