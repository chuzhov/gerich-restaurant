import React from 'react';
import { images } from '../../constants';
import SubHeader from 'components/SubHeader/SubHeader';

const FindUs = () => (
  <section className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeader title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">
          Mon - Fri: <time>10:00 am - 02:00 am</time>
        </p>
        <p className="p__opensans">
          Sat - Sun: <time>10:00 am - 03:00 am</time>
        </p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: '2rem' }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </section>
);

export default FindUs;
