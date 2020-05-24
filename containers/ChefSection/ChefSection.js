import React from 'react';
import classes from './ChefSection.module.css';
import chefImage from '../../assets/Imagini/Pizzer Photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const ChefSection = () => {
  return (
    <section id='chef' className={classes.ChefSection}>
      <div className={classes.ChefSectionText}>
        <header>
          <h2>Meet Miquel!</h2>
        </header>
        <p>He will take care of all your preferences when it comes to pizza!</p>
        <p>
          Miguel has over 6 years of experience in Italian food, but he has a
          special passion for pizza, and that is why he manages to impress with
          every order he has!
        </p>
      </div>
      <div className={classes.ChefSectionImage}>
        <img src={chefImage} alt='Chef' />
        <div className={classes.ChefSectionImageChefButtons}>
          <div>
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
      <h1 className={classes.BigMiguel}>Miguel</h1>
    </section>
  );
};

export default ChefSection;
