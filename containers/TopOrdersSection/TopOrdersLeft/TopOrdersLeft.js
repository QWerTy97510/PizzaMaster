import React from 'react';
import classes from './TopOrdersLeft.module.css';
import { useSelector } from 'react-redux';

const TopOrdersLeft = (props) => {
  // const loading = useSelector((state) => state.topOrdersReducer.loading);
  const currentPizza = useSelector(
    (state) => state.topOrdersReducer.currentPizza
  );

  console.log(props.data);

  let output = null;
  const pizzaTopOrders = [];
  if (!props.loading) {
    for (let key in props.data) {
      pizzaTopOrders.push(key);
    }
    const pizzaSize = [];
    for (let key in props.data[pizzaTopOrders[currentPizza]].prices) {
      pizzaSize.push([
        key,
        props.data[pizzaTopOrders[currentPizza]].prices[key],
      ]);
    }

    output = (
      <div className={classes.TopOrdersLeft}>
        <div className={classes.Top}>
          <div>
            <ul>
              {props.data[pizzaTopOrders[currentPizza]].ingredients.map(
                (el) => (
                  <li key={el}>{el}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <button className={classes.OrderNowButton}>
              Order <span>Now</span>
            </button>
          </div>
        </div>
        <div className={classes.Bottom}>
          <div className={classes.BottomTitle}>
            <h1>{props.data[pizzaTopOrders[currentPizza]].name}</h1>
          </div>
          <div className={classes.BottomPizzaSizes}>
            {pizzaSize.map((el) => {
              return (
                <div key={el[0]} className={classes.PizzaSize}>
                  <h2>{el[1].cantity}</h2>
                  <h3>Price: {el[1].price}$</h3>
                </div>
              );
            })}
          </div>
        </div>

        <h1 className={classes.PizzaBanner}>
          {props.data[pizzaTopOrders[currentPizza]].name}
        </h1>
      </div>
    );
  }

  return output;
};

export default TopOrdersLeft;
