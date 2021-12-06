import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from './paragraph';
import { Section } from './layout';
import Heading from './heading';
import { apiKey, apiUser, apiFormat, extendedApi, apiLimit } from '../constants';
import fallbackImage from '../images/fallbackimage.png';

const MobileView = styled.div(({ isToggled }) => css`
    display: flex;
    overflow-x: scroll;
    flex-wrap: ${isToggled ? 'wrap' : 'nowrap'};
    -webkit-overflow-scrolling: touch;
    
    ::-webkit-scrollbar {
        display: none;
    }

    .clipped {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`);

const LinkButton = styled.a(({ theme }) => css`
    color: ${theme.colors.burntOrange};
    font-size: 20px;
    cursor: pointer;

    &:hover, &:active, &:focus {
        color: ${theme.colors.black};
    }
`);

const RecentTracks = () => {
    const [recentTracks, setRecentTracks] = useState([]);
    const [isToggled, setIsToggled] = useState(false);

    const showAll = useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
      );

    useEffect(() => {
        fetch(`
                https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                &user=${apiUser}
                &api_key=${apiKey}
                &format=${apiFormat}
                &extended=${extendedApi}
                &limit=${apiLimit}
            `)
          .then(res => res.json())
          .then(response => {
                console.log(response);
                setRecentTracks(response.recenttracks.track)
          })
          .catch(error => console.log(error));
      }, []);

    console.log(recentTracks, 'recent tracks');

    return (
        <React.Fragment>
            <Section className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-baseline">
                <Heading as="h3" color="burntOrange">Recent Tracks</Heading>
                <LinkButton onClick={ showAll } className="d-none d-md-inline">Show {isToggled ? 'Less' : 'More'}</LinkButton>
            </div>
            <MobileView className="row" isToggled={ isToggled }>
                {recentTracks.map((rt, index) => (
                    <div className="col-7 col-sm-5 col-md-3 col-xl-2 mb-5" key={ index }>
                        <div className="d-flex flex-column">
                            <picture>
                                <source srcSet={rt.image[3]['#text']} type="image/jpg" className="rounded w-100" />
                                <img src={ fallbackImage } alt="fall back jpg called" className="w-100" />
                            </picture>
                            <Paragraph color="black" className="mt-3 mb-2 clipped">{rt.name}</Paragraph>
                            <Paragraph color="burntOrange" className="mb-2 clipped">{rt.artist.name}</Paragraph>
                            <Paragraph className="mb-0 clipped">{rt.album['#text']}</Paragraph>
                        </div>
                    </div>
                ))}
                </MobileView>
            </Section>
        </React.Fragment>
    )
};

RecentTracks.propTypes = {
    recentTracks: PropTypes.arrayOf(PropTypes.object),
}

RecentTracks.defaultProps = {
    recentTracks: [],
    NowPlaying: {},
}

export default RecentTracks;