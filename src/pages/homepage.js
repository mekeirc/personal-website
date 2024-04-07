import React from 'react';
import Hobbies from '../components/hobbies';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import RecentTracks from '../components/recenttracks';
import TopAlbums from '../components/topalbums';
import Experience, { FullWidthBase } from '../components/experience';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';
import { Hero } from '../components/homepage';
import Contact from '../components/contact';
import Showcase from '../components/showcase';

const Layout = () => (
    <React.Fragment>
        <Hero />
        <AboutMe />
        <FullWidthBase background="greyDarker">
            <Experience />
        </FullWidthBase>
        <Skills />
        <Showcase />
        <Contact />
        <Hobbies />
        <TopAlbums />
        <RecentTracks />
        <Footer />
    </React.Fragment> 
);
 
export default Layout;