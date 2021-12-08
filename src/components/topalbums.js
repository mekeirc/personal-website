import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from './paragraph';
import { Section } from './homepage';
import Heading from './heading';
import { apiKey, apiUser, apiFormat, extendedApi, apiLimit } from '../constants';
import fallbackImage from '../images/fallbackimage.png';
import { MaxWidthContainer } from './homepage';

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

const Button = styled.button(({ theme }) => css`
    background: ${theme.colors.burntOrange};
    border: 0;
    padding: 10px;
    color: ${theme.colors.white};
    font-size: 20px;
    border-radius: 4px;
    width: 250px;
`);

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
                    <div className="d-flex justify-content-between align-items-baseline">
                        <Heading as="h3" color="burntOrange">Top Albums</Heading>
                        <LinkButton onClick={ showAll } className="d-none d-md-inline">Show {isToggled ? 'Less' : 'More'}</LinkButton>
                    </div>
                    <MobileView className="row" isToggled={ isToggled }>
                        {topAlbums.map((ta, index) => (
                            <div className="col-7 col-sm-5 col-md-3 col-xl-2 mb-5" key={ index }>
                                <div className="d-flex flex-column">
                                    <picture>
                                        <source srcSet={ta.image[3]['#text']} type="image/jpg" />
                                        <img src={ fallbackImage } alt="fall back jpg called" className="w-100 rounded" />
                                    </picture>
                                    <Paragraph color="black" className="mt-3 mb-2">{ta.name}</Paragraph>
                                    <Paragraph color="burntOrange" className="mb-2 clipped">{ta.artist.name}</Paragraph>
                                    <Paragraph className="mb-0">{ta.album}</Paragraph>
                                </div>
                            </div>
                        ))}
                        </MobileView>
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