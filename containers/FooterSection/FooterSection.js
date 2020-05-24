import React from 'react';
import classes from './FooterSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquareAlt,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const FooterSection = () => {
  return (
    <footer className={classes.FooterSection}>
      <div className={classes.FirstColumn}>
        <div className={classes.FooterElements}>
          <a href='/'>
            <FontAwesomeIcon icon={faFacebookF} /> Facebook
          </a>
        </div>
        <div className={classes.FooterElements}>
          <a href='/'>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
        <div className={classes.FooterElements}>
          <a href='/'>
            {' '}
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
        </div>
      </div>
      <div className={classes.SecondColumn}>
        <div className={classes.FooterElements}>
          <p>
            <FontAwesomeIcon icon={faPhoneSquareAlt} /> Phone: 021 222 3131
          </p>
        </div>
        <div className={classes.FooterElements}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> E-mail: pizzamaster@gmail.com
          </p>
        </div>
        <div className={classes.FooterElements}>
          <p>
            <FontAwesomeIcon icon={faMapMarker} /> Address: Str. I. L.
            Caragiale, Nr.2
          </p>
        </div>
      </div>
      <div className={classes.ThirdColumn}>
        <h2>All rights reserved to Robert Tanase</h2>
      </div>
    </footer>
  );
};

export default FooterSection;
