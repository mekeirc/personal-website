// Core
import React from 'react';

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

const IconColumn = ({ icon, title, children }) => (
    <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex pt-64 align-items-center">
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
        <Heading as="h2" color="burntOrange" className="pt-64">Hobbies &amp; Interests</Heading>
        <Paragraph color="black">Gaming, Weightlifting & Fitness, Electronics, Music, Football, Cycling, Travelling, Photography & Cryptocurrency.</Paragraph>
        <div className="row pb-64" id="hobbies">
            <IconColumn icon={ GamingIcon } title="Gaming">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ FitnessIcon } title="Fitness">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ ElectronicsIcon } title="Electronics">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ MusicIcon } title="Music">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ FootballIcon } title="Football">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ CyclingIcon } title="Cycling">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ TravellingIcon } title="Travelling">
                Paragraph goes here
            </IconColumn>
            <IconColumn icon={ CryptoIcon } title="Crypto">
                Paragraph goes here
            </IconColumn>
        </div>
    </React.Fragment>
);

export default Hobbies;