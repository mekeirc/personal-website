import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './pages/homepage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import PortfolioPage from './pages/portfoliopage';

const theme = {
    colors: {
        black: '#000',
        white: '#fff',
        burntOrange: '#FF7A00',
        sunburstOrange: '#FFBC00',
        darkGrey: '#7F7F7F',
        lightGrey: '#FAFAFA',
        greyBorder: '#EAEAEA',
        barBgOnLight: '#D3D3D3',
        barBgdarker: '#2D2D2D',
        almostBlack: '#0D0D0D',
        darkOrange: '#B25500',
    },
    fonts: {
        primary: 'Cerebri Sans, Helvetica, sans-serif'
    },
    breakPoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
    headingSizes: {
        mobile: {
            h1: '36px',
        },
        desktop: {
            h1: '50px',
        }
    }
  }

export function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={ <Layout /> } />
                        <Route path="/portfolio" element={ <PortfolioPage /> } />
                    </Routes>
                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
  }
