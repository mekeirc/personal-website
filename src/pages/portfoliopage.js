import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import Heading from '../components/heading';
import Paragraph from '../components/paragraph';
import { Section } from '../pages/homepage';
import { MaxWidthContainer } from '../pages/homepage';
import { queryStrings } from '../constants';
import Badge from '../components/badge';
import { HellfireGFXContent, RightindemContent } from '../constants/portfolioObjects';
import Button from './../components/Button';
import NavBar from '../components/NavBar';

const PortfolioPage = () => {
    if (!window.location.href.includes('localhost')) {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'instant',
        });
    }

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    return (
    <React.Fragment>
        {params.source !== undefined && (
            <NavBar params={ params } />
        )}
        <Section>
            <MaxWidthContainer>
                {params.source === queryStrings.HELLFIRE_GFX && (
                    <div className="row">
                        {HellfireGFXContent.map(( images ) => (
                            <div className="col-11" key={images.title}>
                                <Heading as="h3" color="black" className="mb-3">{images.title}</Heading>
                                {images.description && (
                                    <Paragraph>{images.description}</Paragraph>
                                )}
                                <div className="d-flex mb-3 flex-wrap">
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
                {params.source === queryStrings.RIGHTINDEM && (
                    <React.Fragment>
                    <div className="row">
                        {RightindemContent.map(( images ) => (
                            <div className="col-11" key={images.title}>
                                {images.title && <Heading as="h3" color="black" className="mb-3">{images.title}</Heading>}
                                {images.description && (
                                    <Paragraph>{images.description}</Paragraph>
                                )}
                                {images.tags && (
                                    <div className="d-flex mb-3 flex-wrap">
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
                                )}
                                <img src={images.image} alt="Image" className="img-fluid pb-64" />
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-11">
                            <Button
                                href="https://mekeirc.github.io/ri_design"
                                alt="ri_design"
                                className="mb-5 py-3 py-md-2 px-4"
                            >
                                Visit the project site
                            </Button>
                        </div>
                    </div>
                    <div className="row mb-32">
                        <div className="col-11">
                        <Heading color="black" as="h4" className="mb-4">Loading Spinner Demo</Heading>
                            <iframe height="300" style={{ width: '100%' }} scrolling="no" title="Pure SVG Loading Spinner (CSS)" src="https://codepen.io/mekeirc/embed/bLrOMK?default-tab=html%2Cresult" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen="true">
                                See the Pen <a href="https://codepen.io/mekeirc/pen/bLrOMK">
                                Pure SVG Loading Spinner (CSS)</a> by mekeirc (<a href="https://codepen.io/mekeirc">@mekeirc</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </div>
                        <div className="col-11">
                        <Heading color="black" as="h4" className="mb-4 mt-4">SVG Gradient Animation Demo</Heading>
                            <iframe height="500" style={{ width: '100%' }} scrolling="no" title="Pure SVG Loading Spinner (CSS)" src="https://codepen.io/mekeirc/embed/wyjYgG?default-tab=html%2Cresult" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen="true">
                                See the Pen <a href="https://codepen.io/mekeirc/pen/bLrOMK">
                                Pure SVG Loading Spinner (CSS)</a> by mekeirc (<a href="https://codepen.io/mekeirc">@mekeirc</a>)
                                on <a href="https://codepen.io">CodePen</a>.
                            </iframe>
                        </div>
                    </div>
                    </React.Fragment>
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