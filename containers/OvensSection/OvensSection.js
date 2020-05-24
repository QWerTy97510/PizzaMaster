import React from 'react';
import classes from './OvensSection.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const OvensSection = () => {
  return (
    <section className={classes.OvensSection}>
      <div className={classes.OvensSectionTextContainer}>
        <ScrollAnimation
          animateIn='fadeInLeft'
          animateOnce
          offset={50}
          duration={0.8}>
          <div className={classes.OvensSectionText}>
            <p>
              Our ovens are always warm and ready to bring you the pleasure of a
              perfect pizza, as you like!
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default OvensSection;
