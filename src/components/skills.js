import React from 'react';
import styled from 'styled-components';
import Heading from './heading';
import ProgressBar from './progressbar';
import { Section, MaxWidthContainer } from "../components/homepage";
import Badge from './badge';

const BorderDiv = styled.div`
    border-top: 1px solid ${props => props.theme.colors.greyBorder2};
`;

const Skills = () => (
    <BorderDiv className="container-fluid pt-4" id="skills">
        <Heading as="h2" color="black" className="text-center pt-4">Skills &amp; Tools</Heading>
        <div className="row">
            <div className="col-12 col-md-6 p-0">
                <Section
                    background="black"
                    className="pb-128 d-flex justify-content-start justify-content-md-end">
                        <div className="d-flex flex-column col-12 col-xl-10 col-xxl-6">
                            <Heading as="h2" color="sunburstOrange" className="pt-md-5 pb-64 align-self-start align-self-md-end">Design</Heading>
                            <ProgressBar value="95" label="Adobe Photoshop" reversed darker />
                            <ProgressBar value="75" label="Sketch, Figma" reversed darker />
                            <ProgressBar value="60" label="Wireframing" reversed darker />
                            <ProgressBar value="60" label="SVG Design + Animation" reversed darker />
                            <ProgressBar value="50" label="Adobe Premiere + After Effects" reversed darker />
                            <ProgressBar value="50" label="Adobe Illustrator + InDesign" reversed darker />
                        </div>
                </Section>
            </div>
            <div className="col-12 col-md-6 p-0">
                <Section background="white"
                    className="pb-128">
                        <div className="d-flex flex-column col-12 col-xl-10 col-xxl-6">
                            <Heading as="h2" color="burntOrange" className="pt-md-5 pb-64">Dev</Heading>
                            <ProgressBar value="95" label="HTML" />
                            <ProgressBar value="95" label="CSS / SCSS / SASS" />
                            <ProgressBar value="70" label="ReactJS + ES6 Javascript" />
                            <ProgressBar value="60" label="REST API" />
                            <ProgressBar value="60" label="git + npm" />
                            <ProgressBar value="60" label="React Redux" />
                        </div>
                </Section>
            </div>
        </div>
        <Section background="skillCloudGrey" className="row" fullWidth>
            <MaxWidthContainer>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <Heading as="h4" color="white" className="mb-4">Skill Cloud</Heading>
                    <div className="w-100 d-flex flex-wrap align-items-start">
                        <div className="col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-end pe-2 flex-wrap align-items-start">
                            <Badge text="UI Design" className="me-2" />
                            <Badge text="UX Design" className="me-2" />
                            <Badge text="Wireframing" className="me-2" />
                            <Badge text="Web Design" className="me-2" />
                            <Badge text="Digital Design" className="me-2" />
                            <Badge text="Responsive Design" className="me-2" />
                            <Badge text="Prototyping" className="me-2" />
                            <Badge text="SVG Illustration" className="me-2" />
                            <Badge text="Tailwind CSS" className="me-2" />
                            <Badge text="Sketch / Figma" className="me-2" />
                        </div>
                        <div className="col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-start ps-2 flex-wrap align-items-start">
                            <Badge text="ReactJS" borderColor="white" className="ms-2" />
                            <Badge text="git" borderColor="white" className="ms-2" />
                            <Badge text="HTML" borderColor="white" className="ms-2" />
                            <Badge text="CSS / SCSS / SASS" borderColor="white" className="ms-2" />
                            <Badge text="ES6 Javascript" borderColor="white" className="ms-2" />
                            <Badge text="React Redux" borderColor="white" className="ms-2" />
                            <Badge text="REST" borderColor="white" className="ms-2" />
                            <Badge text="npm" borderColor="white" className="ms-2" />
                            <Badge text="JSON" borderColor="white" className="ms-2" />
                            <Badge text="JIRA / VSTS" borderColor="white" className="ms-2" />
                            <Badge text="Agile" borderColor="white" className="ms-2" />
                            <Badge text="Docker" borderColor="white" className="ms-2" />
                            <Badge text="CI / CD" borderColor="white" className="ms-2" />
                            <Badge text="Bootstrap" borderColor="white" className="ms-2" />
                        </div>
                    </div>
                </div>
            </MaxWidthContainer>
        </Section>
    </BorderDiv>
);

export default Skills;