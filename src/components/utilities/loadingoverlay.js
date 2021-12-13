import styled, { keyframes } from 'styled-components';
import LoadingSpinner from '../../images/loadingspinneronwhite.png';

const Rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.img`
    animation-name: ${ Rotate };
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 64px;
    height: 64px;
`;

const Loading = () => <Spinner src={ LoadingSpinner } alt="Loading" />;

export default Loading;