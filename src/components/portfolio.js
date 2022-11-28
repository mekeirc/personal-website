import React from 'react';
import Heading from './heading';
import { Section } from "../components/homepage";
import { Link } from "react-router-dom";
import { MaxWidthContainer } from "../components/homepage";
import { queryStrings } from '../constants';
import { NoToggleMobileView } from './utilities/mobileview';

// images
import HellfireSquare from '../images/portfolio-hellfiregfx.jpg';
import RightindemSquare from '../images/portfolio-rightindem.png';
import BuyingButlerSquare from '../images/portfolio-buyingbutler.png';
import AdzoomaSquare from '../images/portfolio-adzooma.png';

const Square = ({ query, title, image }) => (
    <div className="col-11 col-sm-6 col-lg-4 col-xl-4 col-xxl-3">
        <Link to={`/portfolio?source=${query}`} className="text-decoration-none">
            <Heading as="h4" color="white" className="mt-3 mb-3">{ title }</Heading>
            <div className="d-flex bg-dark align-items-center justify-content-center">
                <img src={ image } alt="image" className="img-fluid rounded w-100" />
            </div>
        </Link>
    </div>
);

const Portfolio = () => (
    <div className="container-fluid" id="portfolio">
        <Section background="black" className="row">
            <MaxWidthContainer>
                <Heading as="h2" color="white" className="text-center">Portfolio &amp; Demos</Heading>
                <NoToggleMobileView className="row justify-content-md-center">
                    {/*
                    <Square
                        query={ queryStrings.ADZOOMA }
                        title="Adzooma"
                        image={ AdzoomaSquare }
                    />
                    */}
                    <Square
                        query={ queryStrings.RIGHTINDEM }
                        title="Rightindem"
                        image={ RightindemSquare }
                    />
                    <Square
                        query={ queryStrings.HELLFIRE_GFX }
                        title="Hellfire GFX"
                        image={ HellfireSquare }
                    />
                    {/*
                    <Square
                        query={ queryStrings.BUYING_BUTLER }
                        title="Buying Butler"
                        image={ BuyingButlerSquare }
                    />
                    */}
                </NoToggleMobileView>
            </MaxWidthContainer>
        </Section>
    </div>
);

export default Portfolio;