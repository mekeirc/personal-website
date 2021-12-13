import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import { Section } from '../pages/homepage';
import { MaxWidthContainer } from '../pages/homepage';
import { queryStrings } from '../constants';
import Badge from '../components/badge';
import { HellfireGFXContent } from '../constants/portfolioObjects'

// Images
import backButton from '../images/backbutton.svg';
import Portfolio from '../components/portfolio';

const PortfolioPage = () => {
    window.scrollTo(0, 0);
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return (
    <React.Fragment>
        {params.source !== undefined && (
            <Section background="black" lessPadding>
                <Link to="/" className="text-decoration-none d-inline-flex align-items-center">
                    <img src={backButton} />
                    <Heading className="mb-0 ms-3">
                        {params.source === queryStrings.HELLFIRE_GFX && 'Hellfire GFX'}
                        {params.source === queryStrings.ADZOOMA && 'Adzooma'}
                    </Heading>
                </Link>
            </Section>
        )}
        <Section>
            <MaxWidthContainer>
                {params.source === queryStrings.ADZOOMA && (
                    <div className="row">
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                        <div className="col-12 col-md-4">1</div>
                    </div>
                )}
                {params.source === queryStrings.HELLFIRE_GFX && (
                    <div className="row">
                        {HellfireGFXContent.map(( images ) => (
                            <div className="col-12 col-md-12" key={images.title}>
                                <Heading as="h3" color="black" className="mb-3">{images.title}</Heading>
                                <div className="d-flex mb-3">
                                    {images.tags.map(( tag ) => (
                                        <Badge
                                            small
                                            className="me-2"
                                            color={ tag.color }
                                            text={ tag.text }
                                            key={ tag.text }
                                        />
                                    ))}
                                </div>
                                <img src={images.image} alt="Image" className="img-fluid pb-64" />
                            </div>
                        ))}
                    </div>
                )}
            </MaxWidthContainer>
        </Section>
        {params.source === undefined && (
            <div>Do something here</div>
        )}
    </React.Fragment>
    );
}

export default PortfolioPage;