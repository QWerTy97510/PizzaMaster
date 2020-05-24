import React, { useEffect } from 'react';
import classes from './MealZone.module.css';
import MealZoneType from './MealZoneType/MealZoneType';
import * as actions from '../../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';

const MealZone = () => {
  const loading = useSelector((state) => state.pizzaReducer.loading);
  const pizzaData = useSelector((state) => state.pizzaReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchingPizza());
  }, [dispatch]);

  return (
    <div className={classes.MealZone}>
      <MealZoneType title='Pizza' data={pizzaData} loading={loading} />
    </div>
  );
};

export default MealZone;
