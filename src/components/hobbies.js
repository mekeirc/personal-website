// Core
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Heading from './heading';
import Paragraph from './paragraph';

// Assets
import GamingIcon from '../images/icons/Gaming.svg';
import FitnessIcon from '../images/icons/Fitness.svg';
import ElectronicsIcon from '../images/icons/Electronics.svg';
import MusicIcon from '../images/icons/Music.svg';
import FootballIcon from '../images/icons/Football.svg';
import CyclingIcon from '../images/icons/Cycling.svg';
import TravellingIcon from '../images/icons/Travelling.svg';
import CryptoIcon from '../images/icons/Crypto.svg';

const StyledLink = styled.a(({ theme }) => css`
    color: ${ theme.colors.burntOrange };
    &:hover { color: ${ theme.colors.black }; }
    &:visited { color: ${ theme.colors.burntOrange }; }
`);

const IconColumn = ({ icon, title, children }) => (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 pb-3">
        <div className="d-flex pt-0 pt-md-3 align-items-center">
            <img src={ icon } alt="icon" className="me-3" />
            <Heading as="h4" color="black" className="mb-0">{ title }</Heading>
        </div>
        <div>
            <Paragraph color="black" className="mt-3">{ children }</Paragraph>
        </div>
    </div>
);

const Hobbies = () => (
    <React.Fragment>
        <Heading as="h2" color="burntOrange" className="pt-128">Hobbies &amp; Interests</Heading>
        <div className="row pb-64" id="hobbies">
            <IconColumn icon={ GamingIcon } title="Gaming">
                I love games such as League of Legends, Halo, Call of Duty,
                Guitar Hero (now Clone Hero) and many others.
            </IconColumn>
            <IconColumn icon={ FitnessIcon } title="Fitness">
                I love weightlifting and have developed my own fitness
                plan, I love teaching others and the mental clarity after
                finishing a workout.
            </IconColumn>
            <IconColumn icon={ ElectronicsIcon } title="Electronics">
                I love building and fixing computers and keep up to date
                with the latest tech even if I have no intention to buy.
            </IconColumn>
            <IconColumn icon={ MusicIcon } title="Music">
                I love music so much, I decided to builds some album art
                components to demonstrate my music taste. The artwork below
                is pulled from the <StyledLink href="https://last.fm/api" target="_blank">last.fm</StyledLink> api.
            </IconColumn>
            <IconColumn icon={ FootballIcon } title="Football">
                I love watching and playing football, I'm a huge Arsenal FC fan and
                regularly travel to see them play home and away.
            </IconColumn>
            <IconColumn icon={ CyclingIcon } title="Cycling">
                I love long bike rides in the summer and regularly choose cycling
                over public transport. I love the leg strength and cardiovascular
                benefits.
            </IconColumn>
            <IconColumn icon={ TravellingIcon } title="Travelling">
                I've travelled to many different countries in my lifetime,
                I try to visit new countries every year if possible.
            </IconColumn>
            <IconColumn icon={ CryptoIcon } title="Crypto">
                I love Crypto and actively follow the market state,
                I started buying in 2013 and hold various different tokens
                including Litecoin, Polygon &amp; Cardano.
            </IconColumn>
        </div>
    </React.Fragment>
);

export default Hobbies;