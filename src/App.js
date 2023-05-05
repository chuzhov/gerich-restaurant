import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from 'sections/Header/Header';
import AboutUs from 'sections/AboutUs/AboutUs';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
  </div>
);

export default App;
