
// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';
import { Section } from '../pages/homepage';
import Badge from './badge';
import { MaxWidthContainer } from '../pages/homepage';

const Work = ({ role, company, duration }) => (
    <div className="pb-3 row">
        <div className="col-12 col-md-3 pb-2 pb-md-0">
            <Paragraph subtext color="burntOrange" className="mb-0">Role</Paragraph>
            <Heading as="h4" color="burntOrange">{ role }</Heading>
        </div>
        <div className="col-12 col-md-3 pb-2 pb-md-0">
            <Paragraph subtext color="black" className="mb-0">Company</Paragraph>
            <Heading as="h4" color="black">{ company }</Heading>
        </div>
        <div className="col-12 col-md-3 pb-2 pb-md-0">
            <Paragraph subtext className="mb-0">Duration</Paragraph>
            <Paragraph>{ duration }</Paragraph>
        </div>
    </div>
);

const Experience = () => (
    <React.Fragment>
        <Section className="pb-0" id="experience">
            <MaxWidthContainer>
                <Heading as="h2" color="burntOrange">Experience</Heading>
            </MaxWidthContainer>
        </Section>
        <Section lessPadding>
            <MaxWidthContainer>
                <Work
                    role="Frontend Developer"
                    company="Clicktech / Adzooma"
                    duration="May 2019 - Oct 2021"
                />
                <Paragraph color="black" className="pb-2">
                    In May 2019 I joined Nottingham-based company Clicktech Solutions (Adzooma) as a mid level developer. Whilst working here I have massively improved my development skills and gained invaluable experience with production web app development.
                    Here I learned ES6 Javascript, REST, React Redux as well as charting libraries such as HiCharts. I was utilised for wireframing and designing new features and widgets, development of microsites (gatsby) and development and review of production code and standards.
                </Paragraph>
                <div className="d-flex align-items-baseline flex-wrap">
                    <Badge small text="ReactJS" color="black" className="me-2" />
                    <Badge small text="ES6 Javascript" color="black" className="me-2" />
                    <Badge small text="HTML" color="black" className="me-2" />
                    <Badge small text="Agile" color="black" className="me-2" />
                    <Badge small text="git" color="black" className="me-2" />
                    <Badge small text="npm" color="black" className="me-2" />
                    <Badge small text="CSS / SCSS / SASS" color="black" className="me-2" />
                    <Badge small text="Styled Components" color="black" className="me-2" />
                    <Badge small text="Wireframing" color="burntOrange" className="me-2" />
                    <Badge small text="HiFi Design" color="burntOrange" className="me-2" />
                </div>
            </MaxWidthContainer>
        </Section>
        <Section background="lightGrey" bordered lessPadding>
            <MaxWidthContainer>
                <Work
                    role="IT Engineer"
                    company="Rightindem Ltd"
                    duration="Apr 2018 - Apr 2019"
                />
                <Paragraph color="black" className="pb-2">
                    After a significant downsize in the company I looked at other roles where I could provide value. 
                    In this role I managed internal infrastructure, handled equipment maintainence and repair, provided 
                    hardware &amp; software support for developer machines, 
                </Paragraph>
                <div className="d-flex align-items-baseline flex-wrap">
                    <Badge small text="Infrastructure" color="black" className="me-2" />
                    <Badge small text="Hardware Repair" color="black" className="me-2" />
                    <Badge small text="Microsoft Azure" color="black" className="me-2" />
                </div>
            </MaxWidthContainer>
        </Section>
        <Section lessPadding className="mb-64">
            <MaxWidthContainer>
                <Work
                    role="Junior Designer &amp; Developer / Junior Graphic Designer"
                    company="Buying Butler Ltd / Rightindem Ltd"
                    duration="Nov 2014 - Apr 2018"
                />
                <Paragraph color="black" className="pb-2">
                    In November 2014 after an initial placement and internship I joined Nottingham-based tech startup Buying Butler as a
                    Junior Designer &amp; Developer, where I helped design and develop their first product iteration, provided graphic design
                    for business and sales deck purposes, started using wireframing tools and Bohemian Sketch for web design.
                </Paragraph>
                <div className="d-flex align-items-baseline flex-wrap">
                    <Badge small text="HTML" color="black" className="me-2" />
                    <Badge small text="CSS" color="black" className="me-2" />
                    <Badge small text="Wireframing" color="burntOrange" className="me-2" />
                    <Badge small text="HiFi Design" color="burntOrange" className="me-2" />
                </div>
            </MaxWidthContainer>
        </Section>
    </React.Fragment>
);

export default Experience;