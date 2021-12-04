import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from './paragraph';
import { Section } from './layout';
import Heading from './heading';
import { apiKey, apiUser, apiFormat, extendedApi } from '../constants';

const NowPlayingWidget = styled.div(({ theme }) => css`
    background: ${theme.colors.black};
    padding: 32px;
        img {
            width: 100px;
            height: 100px;
            margin-right: 16px;
            border-radius: 15%;
        }
        span {
            color: #fff;
        };
`);

const MobileView = styled.div(({ theme }) => css`
    display: flex;
    overflow-x: scroll;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;

    @media screen and (min-width: ${theme.breakPoints.md}){
        ::-webkit-scrollbar {
            display: none;
        }
    }

    .clipped {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`);

const RecentTracks = () => {
    const [recentTracks, setRecentTracks] = useState([]);
    useEffect(() => {
        fetch(`
                https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
                &user=${apiUser}
                &api_key=${apiKey}
                &format=${apiFormat}
                &extended=${extendedApi}
                &limit=16
            `)
          .then(res => res.json())
          .then(response => {
                console.log(response);
                setRecentTracks(response.recenttracks.track)
          })
          .catch(error => console.log(error));
      }, []);

    console.log(recentTracks, 'recent tracks');

    const findPlayingTrack = recentTracks.find(track => track['@attr']?.nowplaying);
    const NowPlaying = {
        track: findPlayingTrack?.name,
        album: findPlayingTrack?.album['#text'],
        artist: findPlayingTrack?.artist.name,
        art: findPlayingTrack?.image[3]['#text'],
    }

    return (
        <React.Fragment>
            {NowPlaying.track && (
                <NowPlayingWidget className='d-flex align-items-center w-100 justify-content-center flex-column'>
                    <Paragraph color="sunburstOrange">Listening Now</Paragraph>
                    <div className="d-flex align-items-center">
                    <img src={NowPlaying.art} alt="Now Playing Art" className="rounded" />
                    <div className="d-flex flex-column">
                        <span>{NowPlaying.track}</span>
                        <span>{NowPlaying.artist}</span>
                        <span>{NowPlaying.album}</span>
                    </div>
                    </div>
                </NowPlayingWidget>
            )}
            <Section className="d-flex flex-column pb-0">
            <Heading as="h3">Recently Played Tracks</Heading>
            <MobileView className="row">
                {recentTracks.map((rt, index) => (
                    <div className="col-11 col-sm-5 col-md-3 col-xl-2 mb-5" key={ index }>
                        <div className="d-flex flex-column">
                            <img src={rt.image[3]['#text']} alt="Album Cover" className="rounded" />
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