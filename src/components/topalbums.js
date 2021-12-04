import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from './paragraph';
import { Section } from './layout';
import Heading from './heading';
import { apiKey, apiUser, apiFormat, extendedApi } from '../constants';

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

const TopAlbums = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    useEffect(() => {
        fetch(`
                https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums
                &user=${apiUser}
                &api_key=${apiKey}
                &format=${apiFormat}
                &extended=${extendedApi}
                &limit=16
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
            <Heading as="h3">Top Albums</Heading>
            <MobileView className="row">
                {topAlbums.map((ta, index) => (
                    <div className="col-11 col-sm-5 col-md-3 col-xl-2 mb-5" key={ index }>
                        <div className="d-flex flex-column">
                            <img src={ta.image[3]['#text']} alt="Album Cover" className="rounded" />
                            <Paragraph color="black" className="mt-3 mb-2">{ta.name}</Paragraph>
                            <Paragraph color="burntOrange" className="mb-2 clipped">{ta.artist.name}</Paragraph>
                            <Paragraph className="mb-0">{ta.album}</Paragraph>
                        </div>
                    </div>
                ))}
                </MobileView>
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