import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p(({ theme, subtext, color, capHeight }) => css`
    color: ${theme.colors[color]};
    font-size: 18px;

    ${capHeight ? `
        max-height: 30px;
        overflow: hidden;
    ` : ''}

    @media screen and (min-width: ${theme.breakPoints.md}) {
        font-size: ${subtext ? '16px' : '20px'}
    }
`);

Paragraph.propTypes = {
    color: PropTypes.string,
}

Paragraph.defaultProps = {
    color: 'darkGrey',
}

export default Paragraph;

