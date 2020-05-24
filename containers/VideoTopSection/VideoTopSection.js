import React from 'react';
import video from '../../assets/Video/PizzaVideoCut-Optimized.mp4';
import logo from '../../assets/Imagini/Logo.png';
import classes from './VideoTopSection.module.css';
import { Link as ScrollLink } from 'react-scroll';

const VideoTopSection = () => {
  return (
    <section className={classes.VideoTopSection} id='videoSection'>
      <div className={classes.VideoContainer}>
        <video autoPlay loop>
          <source src={video} type='video/mp4' />
        </video>
        <div className={classes.BlackRectangle}>
          <p className={classes.VideoSpoiler}>
            <span>GOOD</span> <br /> is not enough for us!
          </p>
          <div className={classes.VideoTexts}>
            <p>Less than 25 minutes for home delivery</p>
            <p>More than 20 types of pizza</p>
          </div>
          <ScrollLink
            activeClass='active'
            to='menu'
            spy={false}
            smooth={true}
            offset={-70}
            duration={500}>
            <button className={classes.OurMenuCTA}>Our Menu</button>
          </ScrollLink>
          <img src={logo} alt='Logo' className={classes.VideoContainerLogo} />
        </div>
      </div>
    </section>
  );
};

export default VideoTopSection;
