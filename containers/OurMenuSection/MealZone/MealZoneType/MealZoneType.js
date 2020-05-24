import React from 'react';
import PizzaCard from './PizzaCard/PizzaCard';
import classes from './MealZoneType.module.css';

const MealZoneType = (props) => {
  console.log(props);

  let dataArray = [];
  if (!props.loading) {
    for (let key in props.data.data) {
      dataArray.push([key, props.data.data[key]]);
    }
  }

  const output = dataArray.map((el) => {
    return <PizzaCard key={el[0]} name={el[1].name} price={el[1].price} />;
  });

  return <div className={classes.MealZoneType}>{output}</div>;
};

export default MealZoneType;
