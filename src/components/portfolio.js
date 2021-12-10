import React from 'react';
import styled, { css } from 'styled-components';
import Heading from './heading';
import { Section } from '../pages/homepage';
import Badge from './badge';
import { UncontrolledCollapse } from 'reactstrap';
import { Link } from "react-router-dom";
import Skills from './skills';
import { MaxWidthContainer } from '../pages/homepage';

const ImageContainer = styled.div(({ theme, bgColor }) => css`
    background: ${theme.colors[bgColor]};
    min-height: 250px;
    min-width: 250px;
`);

const Portfolio = () => (
    <div className="container-fluid" id="portfolio">
        <Section background="black" className="row">
            <MaxWidthContainer>
                <Heading as="h2" color="white" className="text-center">Portfolio &amp; Demos</Heading>
                <div className="row w-100">
                    <div className="col" id="toggle1">
                        <ImageContainer className="d-flex bg-dark align-items-center justify-content-center">
                            <img src="" alt="image" className="img-fluid rounded" />
                        </ImageContainer>
                        <Heading as="h4" color="white" className="mt-3">Adzooma</Heading>
                    </div>
                    <div className="col">
                        <ImageContainer className="d-flex bg-dark align-items-center justify-content-center">
                            <img src="" alt="image" className="img-fluid rounded" />
                        </ImageContainer>
                        <Heading as="h4" color="white" className="mt-3">Rightindem</Heading>
                    </div>
                    <div className="col">
                        <ImageContainer className="d-flex bg-dark align-items-center justify-content-center">
                            <img src="" alt="image" className="img-fluid rounded" />
                        </ImageContainer>
                        <Heading as="h4" color="white" className="mt-3">Nottingham Rocksoc</Heading>
                    </div>
                    <div className="col">
                        <ImageContainer className="d-flex bg-dark align-items-center justify-content-center">
                            <img src="" alt="image" className="img-fluid rounded" />
                        </ImageContainer>
                        <Heading as="h4" color="white" className="mt-3">Stereocandy</Heading>
                    </div>
                    <div className="col">
                        <ImageContainer className="d-flex bg-dark align-items-center justify-content-center">
                            <img src="" alt="image" className="img-fluid rounded" />
                        </ImageContainer>
                        <Heading as="h4" color="white" className="mt-3">HellfireGFX</Heading>
                    </div>
                </div>
            </MaxWidthContainer>
        </Section>
    </div>
);

export default Portfolio;