import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from './layout';

const apiKey = '1fd8a4d0268ad4a137ba9bba3600ce38';
const apiUser = 'WiseSan';
const apiFormat = 'json';
const extendedApi = true;

const NowPlayingWidget = styled.div`
    background: rgba(0,0,0,0.3);
        img {
            width: 100px;
            height: 100px;
            margin-right: 16px;
        }
        span {
            color: #fff;
        };
`;

const getLatestTracks = (
    fetch(`
            https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks
            &user=${apiUser}
            &api_key=${apiKey}
            &format=${apiFormat}
            &extended=${extendedApi}
        `)
        .then(res => res.json())
        .then(response => {
            console.log(response);
        })
);

const MusicGrid = () => {
    const [recentTracks, setRecentTracks] = useState([]);
    useEffect(() => {
        getLatestTracks()
      }, [getLatestTracks])

    console.log(recentTracks, 'recent tracks');

    return (
        <Section background="black">
            <div>Penis</div>
        </Section>
    )
};

MusicGrid.propTypes = {
    recentTracks: PropTypes.arrayOf(PropTypes.object),
}

MusicGrid.defaultProps = {
    recentTracks: [],
    NowPlaying: {},
}

export default MusicGrid;