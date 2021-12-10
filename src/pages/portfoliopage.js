import React from 'react';
import styled, { css } from 'styled-components';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import Header from '../components/header';
import { Section } from '../pages/homepage';
import { MaxWidthContainer } from '../pages/homepage';

const PortfolioPage = () => (
    <React.Fragment>
        <Section
            className="d-flex align-items-center
            justify-items-center flex-column">
                <MaxWidthContainer>
                    <div className="row">
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                    </div>
                </MaxWidthContainer>
        </Section>
    </React.Fragment> 
);
 
export default PortfolioPage;