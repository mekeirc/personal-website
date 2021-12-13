import React from 'react';
import { Link } from 'react-router-dom';
import Heading from './heading';
import backButton from '../images/backbutton.svg';
import { queryStrings } from '../constants';

const NavBar = ({ params }) => (
    <nav className="bg-black d-flex align-items-center position-sticky top-0 px-4 py-2 p-md-3">
        <Link to="/" className="text-decoration-none d-inline-flex align-items-center">
            <img src={ backButton } />
            <Heading className="mb-0 ms-3">
                {params.source === queryStrings.HELLFIRE_GFX && 'Hellfire GFX'}
                {params.source === queryStrings.RIGHTINDEM && 'Rightidem'}
                {params.source === queryStrings.ADZOOMA && 'Adzooma'}
            </Heading>
        </Link>
    </nav>
);

export default NavBar;
