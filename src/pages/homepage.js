import React from 'react';
import Hobbies from '../components/hobbies';
import AboutMe from '../components/aboutme';
import Skills from '../components/skills';
import RecentTracks from '../components/recenttracks';
import TopAlbums from '../components/topalbums';
import Experience from '../components/experience';
import Portfolio from '../components/portfolio';
import Footer from '../components/footer';
import { Hero } from '../components/homepage';
import CaseStudies from '../components/caseStudies';

const Layout = () => (
    <React.Fragment>
        <Hero />
        <AboutMe />
        <Hobbies />
        <Skills />
        <Experience />
        <TopAlbums />
        <RecentTracks />
        <Portfolio />
        <Footer />
    </React.Fragment> 
);
 
export default Layout;