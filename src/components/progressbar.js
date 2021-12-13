import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from './paragraph';
import React from 'react';

const BarRadius = '25px';

const Base = styled.div(({ theme, darker, reversed }) => css`
    background: ${darker ? theme.colors.barBgdarker : theme.colors.barBgOnLight};
    height: 6px;
    border-radius: ${ BarRadius };
    flex-direction: row;

    @media screen and (min-width: ${theme.breakPoints.md}) {
        flex-direction: ${ reversed ? 'row-reverse' : 'row' }; 
    }
`);

const Bar = styled.div(({ theme, darker, value }) => css`
    background: ${darker ? theme.colors.sunburstOrange : theme.colors.burntOrange};
    width: ${ value }%;
    height: 100%;
    border-radius: ${ BarRadius };
`);

const ProgressBar = ({ label, darker, value, reversed }) => (
    <div className={`pb-32 d-flex flex-column ${ reversed ? 'align-items-md-end' : 'align-items-start'}`}>
        <Paragraph color={ darker ? 'white' : 'barBgdarker'}> { label }</Paragraph>
        <Base darker={ darker } reversed={ reversed } className="w-100 d-flex">
            <Bar darker={ darker } value={ value } />
        </Base>
    </div>
);

ProgressBar.propTypes = {
    darker: PropTypes.bool,
    reversed: PropTypes.bool,
}

ProgressBar.defaultProps = {
    darker: false,
    reversed: false,
}

export default ProgressBar;
