import styled, { css } from 'styled-components';

const MobileView = styled.div(({ isToggled }) => css`
    display: flex;
    overflow-x: scroll;
    flex-wrap: ${isToggled ? 'wrap' : 'nowrap'};
    -webkit-overflow-scrolling: touch;
    
    ::-webkit-scrollbar {
        display: none;
    }
`);

export const NoToggleMobileView = styled.div(({ isToggled }) => css`
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    
    ::-webkit-scrollbar {
        display: none;
    }
`);

export default MobileView;