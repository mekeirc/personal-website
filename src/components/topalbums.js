import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from './paragraph';
import { Section } from '../pages/homepage';
import Heading from './heading';
import { apiKey, apiUser, apiFormat, extendedApi, apiLimit } from '../constants';
import fallbackImage from '../images/fallbackimage.png';
import { MaxWidthContainer } from '../pages/homepage';
import MobileView from './utilities/mobileview';
import Loading from './utilities/loadingoverlay';

const ApiLogo = () => (
    <svg width="99px" height="25px" viewBox="0 0 99 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="ms-3">
        <g id="HiFi" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop-HD-Copy" transform="translate(-1017.000000, -2562.000000)" fill="#D51007" fill-rule="nonzero">
                <g id="Group" transform="translate(1017.000000, 2562.000000)">
                    <path d="M17.6589297,18.4570603 L16.7277818,15.9245649 C16.7277818,15.9245649 15.2146943,17.6130439 12.945676,17.6130439 C10.9379231,17.6130439 9.51244416,15.8663492 9.51244416,13.07166 C9.51244416,9.49105853 11.3161114,8.21020113 13.091133,8.21020113 C15.6512883,8.21020113 16.4658477,9.86946072 17.1642644,11.9946691 L18.0954123,14.9057898 C19.0262259,17.7293638 20.7719332,20 25.8051924,20 C29.4131956,20 31.8569852,18.8939013 31.8569852,15.9828922 C31.8569852,13.6249324 30.5184461,12.4021792 28.0162508,11.8199104 L26.1542893,11.4124004 C24.8742674,11.1213218 24.4960791,10.5972688 24.4960791,9.72392142 C24.4960791,8.73414263 25.2814356,8.15187389 26.5617919,8.15187389 C27.9582909,8.15187389 28.7146675,8.67592691 28.8311446,9.92767645 L31.7405082,9.57827059 C31.5077769,6.95834007 29.7039982,5.8812377 26.7363403,5.8812377 C24.1180023,5.8812377 21.5576241,6.87101649 21.5576241,10.0441079 C21.5576241,12.0236655 22.517752,13.2755265 24.9323387,13.8576838 L26.9110002,14.323298 C28.3947735,14.6727039 28.8892159,15.2839689 28.8892159,16.1283199 C28.8892159,17.2051993 27.8419253,17.6419287 25.8634867,17.6419287 C22.9249202,17.6419287 21.7031926,16.0991006 21.0047759,13.9738921 L20.044648,11.0629945 C18.8229204,7.27852654 16.8733503,5.8812377 13.0037474,5.8812377 C8.72697618,5.8812377 6.45751207,8.5884918 6.45751207,13.1879799 C6.45751207,17.6129324 8.72697618,20 12.8003304,20 C16.0875479,20 17.6589297,18.4570603 17.6589297,18.4570603 L17.6589297,18.4570603 Z M5.20814204,17.0887678 C4.91722797,17.1762029 4.62620244,17.2344187 4.24801415,17.2344187 C3.54970893,17.2344187 3.05504355,16.9143437 3.05504355,16.0698812 L3.05504355,0.203755026 L0,0.203755026 L0,16.7976892 C0,18.9810018 1.51308754,19.8837916 3.28777481,19.8837916 C3.86971441,19.8837916 4.42256259,19.796245 5.12086782,19.6218209 L5.20814204,17.0887678 Z M42.0110008,16.6230421 C41.2545128,17.1473181 40.6145018,17.4094004 39.7416482,17.4094004 C38.6359518,17.4094004 38.0250322,16.8271316 38.0250322,15.4006234 L38.0250322,8.5880457 L42.0402037,8.5880457 L42.0402037,6.20108959 L38.0540122,6.20108959 L38.0540122,2.96933637 L34.9699887,3.34785009 L34.9699887,6.20097807 L33.02053,6.20097807 L33.02053,8.58793418 L34.9699887,8.58793418 L34.9699887,16.0406618 C34.9699887,18.7194772 36.5119447,19.999777 39.0142515,19.999777 C40.3817706,19.999777 41.6037211,19.7381408 42.5639605,19.1850914 L42.0110008,16.6230421 Z M44.6645607,17.670925 C44.6645607,18.8647934 45.5957086,19.8253528 46.7885677,19.8253528 C48.0398326,19.8253528 48.9707576,18.8647934 48.9707576,17.670925 C48.9707576,16.4482834 48.0397211,15.5170549 46.7885677,15.5170549 C45.5957086,15.5170549 44.6645607,16.4482834 44.6645607,17.670925 Z M52.1334728,8.5880457 L52.1334728,19.6507057 L55.1885164,19.6507057 L55.1885164,8.5880457 L58.6218597,8.5880457 L58.6218597,6.20108959 L55.1885164,6.20108959 L55.1885164,4.97822487 C55.1885164,3.14431811 55.9742073,2.56204937 57.2543406,2.56204937 C58.1562857,2.56204937 58.7673167,2.76558135 59.4656219,3.14431811 L59.9601759,0.582157216 C59.1456165,0.203755026 58.1853771,0 57.0216094,0 C54.4610083,0 52.1334728,1.22264168 52.1334728,4.8616819 L52.1334728,6.20108959 L50.1841256,6.20108959 L50.1841256,8.5880457 L52.1334728,8.5880457 L52.1334728,8.5880457 Z M70.7951087,8.85035102 C70.4459003,6.66692689 69.0203099,5.88056855 67.1581255,5.88056855 C65.2960526,5.88056855 63.6959137,6.72491956 62.9973856,8.79180073 L62.6191973,6.20108959 L60.1460934,6.20108959 L60.1460934,19.6507057 L63.2011369,19.6507057 L63.2011369,12.0526618 C63.2011369,9.46139305 64.5395645,8.47161426 65.9652664,8.47161426 C67.4490396,8.47161426 68.0601821,9.46139305 68.0601821,11.0625484 L68.0601821,19.6507057 L71.0860227,19.6507057 L71.0860227,12.0234424 C71.0860227,9.46128153 72.4535418,8.47150274 73.8793551,8.47150274 C75.3341484,8.47150274 75.9449564,9.46128153 75.9449564,11.0624369 L75.9449564,19.6504826 L79,19.6504826 L79,9.98578064 C79,7.10365633 77.3124755,5.88056855 75.0721028,5.88056855 C73.1811613,5.88056855 71.4934139,6.72491956 70.7951087,8.85035102 L70.7951087,8.85035102 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </svg>
);

const LinkButton = styled.a(({ theme }) => css`
    color: ${theme.colors.burntOrange};
    font-size: 20px;
    cursor: pointer;

    &:hover, &:active, &:focus {
        color: ${theme.colors.black};
    }
`);

const TopAlbums = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const [isToggled, setIsToggled] = useState(false);

    const showAll = useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
      );

    useEffect(() => {
        fetch(`
                https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums
                &user=${apiUser}
                &api_key=${apiKey}
                &format=${apiFormat}
                &extended=${extendedApi}
                &limit=${apiLimit}
            `)
          .then(res => res.json())
          .then(response => {
                console.log(response, 'top albums');
                setTopAlbums(response.topalbums.album)
          })
          .catch(error => console.log(error));
      }, []);

    console.log(topAlbums, 'top albums');

    return (
        <React.Fragment>
            <Section className="d-flex flex-column pt-0">
                <MaxWidthContainer>
                    <div className="d-flex justify-content-between align-items-baseline mb-4">
                        <div className="d-flex align-items-center">
                            <Heading as="h3" color="burntOrange" className="mb-0">Top Albums</Heading>
                            <a href="https://www.last.fm/user/WiseSan" target="_blank">
                                <ApiLogo />
                            </a>
                        </div>
                        <LinkButton onClick={ showAll } className="d-none d-md-inline">Show {isToggled ? 'Less' : 'More'}</LinkButton>
                    </div>
                    {topAlbums.length === 0 ? (
                        <div className="d-flex col-12 justify-content-center align-items-center" style={{ minHeight: '410px' }}>
                            <Loading />
                        </div>
                    ) : (
                    <MobileView className="row" isToggled={ isToggled }>
                        {topAlbums.map((ta, index) => (
                            <div className={`col-8 col-sm-5 col-md-3 col-xl-3 col-xxl-2 ${isToggled && 'mb-md-5'}`} key={ index }>
                                <a href={ta.url} style={{ textDecoration: 'none'}} target="_blank" title={`${ta.name} - ${ta.artist.name}`}>
                                    <div className="d-flex flex-column">
                                        <picture>
                                            <source srcSet={ta.image[3]['#text']} type="image/jpg" />
                                            <img src={ fallbackImage } alt="fall back jpg called" className="w-100 rounded" />
                                        </picture>
                                        <Paragraph color="black" className="mt-3 mb-2" capHeight>{ta.name}</Paragraph>
                                        <Paragraph color="burntOrange" className="mb-2 clipped" capHeight>{ta.artist.name}</Paragraph>
                                    </div>
                                </a>
                            </div>
                        ))}
                        </MobileView>
                    )}
                </MaxWidthContainer>
            </Section>
        </React.Fragment>
    )
};

TopAlbums.propTypes = {
    topAlbums: PropTypes.arrayOf(PropTypes.object),
}

TopAlbums.defaultProps = {
    topAlbums: [],
    NowPlaying: {},
}

export default TopAlbums;