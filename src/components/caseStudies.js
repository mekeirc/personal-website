import React from 'react';
import styled from 'styled-components';
import Heading from './heading';
import { Section } from "./homepage";
import { MaxWidthContainer } from "./homepage";
import Paragraph from './paragraph';
import { NoToggleMobileView } from './utilities/mobileview';
import LumosCaseStudyScreenshot1 from '../images/case-studies/case-study-lumos-screenshot1.png';
import LumosCaseStudyScreenshot2 from '../images/case-studies/case-study-lumos-screenshot2.png';
import LumosCaseStudyScreenshot3 from '../images/case-studies/case-study-lumos-screenshot3.png';
import LumosCaseStudyScreenshot4 from '../images/case-studies/case-study-lumos-screenshot4.png';

const CaseStudies = () => (
    <div className="container-fluid" id="portfolio">
        <Section background="black" className="row">
            <MaxWidthContainer className="p-0">
                <Heading as="h2" color="white" className="text-center">Case Studies</Heading>
                <NoToggleMobileView className="row justify-content-md-center p-0">
                    <div>Case Studies Here</div>
                </NoToggleMobileView>
            </MaxWidthContainer>
        </Section>
    </div>
);

const ShowcaseImage = styled.img`
    width: 100%;
    padding-bottom: 32px;
`;

export default CaseStudies;

export const LumosCaseStudy = () => (
    <div className="container-fluid" id="portfolio">
        <Section background="white" className="row">
            <MaxWidthContainer>
                <Heading as="h1" color="burntOrange" className="text-center">Case Studies - Lumos Exchange</Heading>
                <Paragraph color='black'>In January 2022 I started contracting and started work on my first project - a crypto exchange. In this case study, I'll be going over some of the features required in development. </Paragraph>
                <Heading as="h4" color="black" className="mt-5">Login / Register</Heading>
                <ShowcaseImage src={ LumosCaseStudyScreenshot1 } alt="Sign Up" />
                <Paragraph color='black'>The exhange required sign up / sign in features. To achieve this, I used axios to hit login/register endpoints and store a JWT token in localStorage. For registering the forms needed frontend validation to prevent the user from adding spaces and other special characters, along with setting booleans in those endpoints for agreeing with terms, accepting newsletters etc.</Paragraph>
                <ShowcaseImage src={ LumosCaseStudyScreenshot2 } alt="Login" />
                <Heading as="h4" color="black" className="mt-5">Listings</Heading>
                <Paragraph color='black'>One of the main features of the exchange is to display buy/sell listings created by users, along with filtering listings. Listings created by a user go to a dedicated account tab where they can remove or update said listing.</Paragraph>
                <ShowcaseImage src={ LumosCaseStudyScreenshot4 } alt="Connect Wallet" />
                <ShowcaseImage src={ LumosCaseStudyScreenshot3 } alt="Connect Wallet" />
            </MaxWidthContainer>
        </Section>
    </div>
);