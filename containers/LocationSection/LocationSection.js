import React from 'react';
import classes from './LocationSection.module.css';

const LocationSection = () => {
  return (
    <section id='location' className={classes.LocationSection}>
      <header>
        <h1>Location</h1>
      </header>
      <div className={classes.LocationSectionContact}>
        <div className={classes.LocationSectionProgram}>
          <h2>Program</h2>
          <p>
            Monday: 9<sup>00</sup> - 23<sup>30</sup>
          </p>
          <p>
            Tuesday: 9<sup>00</sup> - 23<sup>30</sup>
          </p>
          <p>
            Wednesday: 9<sup>00</sup> - 23<sup>30</sup>
          </p>
          <p>
            Thursday: 9<sup>00</sup> - 23<sup>30</sup>
          </p>
          <p>
            Friday: 9<sup>00</sup> - 23<sup>30</sup>
          </p>
          <p>
            Saturday: 10<sup>00</sup> - 00<sup>00</sup>
          </p>
          <p>
            Sunday: 10<sup>00</sup> - 00<sup>00</sup>
          </p>
          <br />
          <p>
            Phone: <strong>(021) 222 3131</strong>
          </p>
        </div>
        <div className={classes.LocationSectionMap}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.171808681148!2d23.266720215543273!3d45.041735279098276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d8a5e1bfd4135%3A0x6b6a83c9968cfbc1!2sDolce%20Vita!5e0!3m2!1sro!2sro!4v1589732647617!5m2!1sro!2sro'
            width='100%'
            height='100%'
            frameBorder='0'
            style={{ border: '2px solid #d40e0e' }}
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
            title='Map'></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
