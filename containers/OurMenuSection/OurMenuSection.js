import React from 'react';
import classes from './OurMenuSection.module.css';
import MealZone from './MealZone/MealZone';

const OurMenuSection = () => {
  return (
    <section id='menu' className={classes.OurMenuSection}>
      <div className={classes.OurMenuSectionContent}>
        <header>
          <h1>Our Menu</h1>
        </header>
        <div className={classes.OurMenuSectionContentMenu}>
          <MealZone />
        </div>
      </div>
    </section>
  );
};

export default OurMenuSection;
