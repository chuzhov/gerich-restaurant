import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from 'sections/Header/Header';
import AboutUs from 'sections/AboutUs/AboutUs';
import SpecialMenu from 'sections/SpecialMenu/SpecialMenu';

import './App.css';
import Chef from 'sections/Chef/Chef';
import Intro from 'sections/Intro/Intro';
import Laurels from 'sections/Laurels/Laurels';
import Gallery from 'sections/Gallery/Gallery';
import FindUs from 'sections/FindUs/FindUs';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
  </div>
);

export default App;
