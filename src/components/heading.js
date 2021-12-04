import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledH1 = styled.h1(({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 32px;

    @media screen and (min-width: ${theme.breakPoints.md}) {
        font-size: 50px;
    }
`);

const StyledH2 = styled.h2(({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 32px;

    @media screen and (min-width: ${theme.breakPoints.md}) {
        font-size: 32px;
    }
`);

const StyledH3 = styled.h3(({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 32px;

    @media screen and (min-width: ${theme.breakPoints.md}) {
        font-size: 26px;
    }
`);

const StyledH4 = styled.h4(({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: 20px;
    font-weight: bold;
`);

export const Heading = ({ children, as, color, className }) => {
    if (as === "h1") return <StyledH1 color={ color } className={ className }>{ children }</StyledH1>;
    if (as === "h2") return <StyledH2 color={ color } className={ className }>{ children }</StyledH2>;
    if (as === "h3") return <StyledH3 color={ color } className={ className }>{ children }</StyledH3>;
    if (as === "h4") return <StyledH4 color={ color } className={ className }>{ children }</StyledH4>;
    return <StyledH1 color={ color } className={ className }>{ children }</StyledH1>;
}

Heading.propTypes = {
    as: PropTypes.string,
    color: PropTypes.string,
}

Heading.defaultProps = {
    as: 'h2',
    color: 'sunburstOrange',
}

export default Heading;

