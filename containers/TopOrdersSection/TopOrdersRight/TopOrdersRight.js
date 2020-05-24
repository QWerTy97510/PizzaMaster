import React from 'react';
import classes from './TopOrdersRight.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../../store/actions/index';

const TopOrdersRight = (props) => {
  const currentPizza = useSelector(
    (state) => state.topOrdersReducer.currentPizza
  );

  const dispatch = useDispatch();

  let pizzaImage = null;
  const pizzaTopOrders = [];
  if (!props.loading) {
    for (let key in props.data) {
      pizzaTopOrders.push(key);
    }
    pizzaImage = props.data[pizzaTopOrders[currentPizza]].image;
  }

  const increasePosibility = () => {
    if (currentPizza === 2) {
      return;
    }
    dispatch(action.increaseSelectTopPizza());
  };

  const decreasePosibility = () => {
    if (currentPizza === 0) {
      return;
    }
    dispatch(action.decreaseSelectTopPizza());
  };

  return (
    <div className={classes.TopOrdersRight}>
      <img src={pizzaImage} alt='Top Order Pizza' />
      <div className={classes.MultipleOrders}>
        <button onClick={decreasePosibility}>
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </button>
        {pizzaTopOrders.map((el, index) => (
          <div
            className={currentPizza === index ? 'active' : null}
            onClick={() => dispatch(action.selectTopPizza(index))}
            key={el}></div>
        ))}
        <button onClick={increasePosibility}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </button>
      </div>
    </div>
  );
};

export default TopOrdersRight;
