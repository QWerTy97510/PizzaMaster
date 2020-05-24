import React from 'react';
import classes from './ClientCard.module.css';

const ClientCard = (props) => {
  return (
    <div className={classes.ClientCard}>
      <div className={classes.ClientCardImage}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.ClientCardText}>
        <h3>{props.name}</h3>
        <p>"{props.comment}"</p>
      </div>
    </div>
  );
};

export default ClientCard;
