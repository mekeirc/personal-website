import React from 'react';
import Heading from './heading';
import ProgressBar from './progressbar';
import { Section } from './layout';
import Badge from './badge';

const Skills = () => (
    <div className="container-fluid">
        <Heading as="h2" color="black" className="text-center">Skills &amp; Tools</Heading>
        <div className="row">
            <div className="col-12 col-md-6 p-0">
                <Section
                    background="black"
                    id="skills"
                    className="d-flex align-items-md-end flex-column 
                    align-items-center align-items-md-start pb-128">
                        <Heading as="h2" color="sunburstOrange" className="pt-64 pb-64">Design</Heading>
                        <ProgressBar value="95" label="Adobe Photoshop" reversed darker />
                        <ProgressBar value="75" label="Bohemian Sketch" reversed darker />
                        <ProgressBar value="60" label="Wireframing" reversed darker />
                        <ProgressBar value="60" label="SVG Design + Animation" reversed darker />
                        <ProgressBar value="50" label="Adobe Premiere + After Effects" reversed darker />
                        <ProgressBar value="50" label="Adobe Illustrator + InDesign" reversed darker />
                </Section>
            </div>
            <div className="col-12 col-md-6 p-0">
                <Section background="white" id="skills"
                    className="d-flex flex-column align-items-center align-items-md-start pb-128">
                        <Heading as="h2" color="burntOrange" className="pt-64 pb-64">Dev</Heading>
                        <ProgressBar value="95" label="HTML" />
                        <ProgressBar value="95" label="CSS / SCSS / SASS" />
                        <ProgressBar value="70" label="ReactJS + ES6 Javascript" />
                        <ProgressBar value="60" label="RESTful Development" />
                        <ProgressBar value="60" label="git + npm" />
                        <ProgressBar value="60" label="React Redux" />
                </Section>
            </div>
        </div>
        <Section background="almostBlack" className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
                <Heading as="h4" color="white">Skill Cloud</Heading>
                <div className="w-100 d-flex flex-wrap">
                    <div className="col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-end pe-2 flex-wrap align-items-start">
                        <Badge text="UI Design" className="me-2" />
                        <Badge text="UX Design" className="me-2" />
                        <Badge text="Wireframing" className="me-2" />
                        <Badge text="Web Design" className="me-2" />
                        <Badge text="Digital Design" className="me-2" />
                        <Badge text="Responsive Design" className="me-2" />
                        <Badge text="Prototyping" className="me-2" />
                        <Badge text="SVG Illustration" className="me-2" />
                    </div>
                    <div className="col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-start ps-2 flex-wrap align-items-start">
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                        <Badge text="UI Design" borderColor="white" className="ms-2" />
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

export default Skills;