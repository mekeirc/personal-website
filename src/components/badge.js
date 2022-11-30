import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Base = styled.div(({ theme, color, borderColor, small, textColor }) => css`
    border-radius: 25px;
    background: ${ theme.colors[color] };
    ${!small && `border: 2px solid ${ theme.colors[borderColor] }`};
    // padding: ${ small ? '0 8px' : '0 16px' };
    color: ${ theme.colors[textColor] };
    font-size: ${ small ? '12px' : '18px' };
    ${small && `text-transform: uppercase`};
    margin-bottom: 8px;
`);

const Badge = ({ text, textColor, color, borderColor, small, className }) => (
    <Base
        className={ className }
        color={ color } 
        textColor={ textColor }
        borderColor={ borderColor }
        small={ small }
    >
        { text }
    </Base>
);

Badge.propTypes = {
    text: PropTypes.string.isRequired,
    borderColor: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
}

Badge.defaultProps = {
    borderColor: 'sunburstOrange',
    color: 'black',
    textColor: 'white',
}

export default Badge;