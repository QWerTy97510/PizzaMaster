import React from 'react';
import classes from './PizzaCard.module.css';

const PizzaCard = (props) => {
  return (
    <div className={classes.PizzaCard}>
      <h3>{props.name}</h3>
      <p>
        Price:{' '}
        <strong>
          {props.price}
          <sup>$</sup>
        </strong>
      </p>
    </div>
  );
};

export default PizzaCard;
