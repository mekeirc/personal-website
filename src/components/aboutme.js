
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
                    Hi there, I'm Keir Covington. I love designing and developing software! I specialise in UX/UI Design &amp; Frontend Development, as well as everything in between.
                    Hire one person and get 3 job roles! I love designing and building lean, reusable components using rest apis and complex state management!
                </Paragraph>
            </MaxWidthContainer>
        </Section>
    </BorderedSection>
);

export default AboutMe;