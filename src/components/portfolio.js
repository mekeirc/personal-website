import React from 'react';
import Heading from './heading';
import { Section } from '../pages/homepage';
import { Link } from "react-router-dom";
import { MaxWidthContainer } from '../pages/homepage';
import { queryStrings } from '../constants';
import MobileView from './utilities/mobileview';

// images
import HellfireSquare from '../images/portfolio-hellfiregfx.jpg';
import RightindemSquare from '../images/portfolio-rightindem.png';
import BuyingButlerSquare from '../images/portfolio-buyingbutler.png';

const Portfolio = () => (
    <div className="container-fluid" id="portfolio">
        <Section background="black" className="row">
            <MaxWidthContainer>
                <Heading as="h2" color="white" className="text-center">Portfolio &amp; Demos</Heading>
                <MobileView className="row">
                    <div className="col-11 col-sm-6 col-lg-4">
                        <Link to={`/portfolio?source=${queryStrings.HELLFIRE_GFX}`} className="text-decoration-none">
                            <Heading as="h4" color="white" className="mt-3">HellfireGFX</Heading>
                            <div className="d-flex bg-dark align-items-center justify-content-center">
                                <img src={ HellfireSquare } alt="image" className="img-fluid rounded w-100" />
                            </div>
                        </Link>
                    </div>
                    <div className="col-11 col-sm-6 col-lg-4">
                        <Link to={`/portfolio?source=${queryStrings.RIGHTINDEM}`} className="text-decoration-none">
                            <Heading as="h4" color="white" className="mt-3">Rightindem</Heading>
                            <div className="d-flex bg-dark align-items-center justify-content-center">
                                <img src={ RightindemSquare } alt="image" className="img-fluid rounded w-100" />
                            </div>
                        </Link>
                    </div>
                </MobileView>
            </MaxWidthContainer>
        </Section>
    </div>
);

export default Portfolio;