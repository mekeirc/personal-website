import styled, { keyframes } from 'styled-components';
import LoadingSpinner from '../images/loadingspinner.png';

const Rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.img`
    animation-name: ${ Rotate };
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const Loading = () => (
    <div className="position-fixed bg-black w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center">
        <Spinner src={ LoadingSpinner } alt="Loading" />
    </div>
);

export default Loading;