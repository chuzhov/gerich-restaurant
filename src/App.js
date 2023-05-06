import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from 'sections/Header/Header';
import AboutUs from 'sections/AboutUs/AboutUs';
import SpecialMenu from 'sections/SpecialMenu/SpecialMenu';

import './App.css';
import Chef from 'sections/Chef/Chef';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
  </div>
);

export default App;
