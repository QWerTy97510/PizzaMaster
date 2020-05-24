import React, { useEffect } from 'react';
import classes from './TopOrdersSection.module.css';
import TopOrdersLeft from './TopOrdersLeft/TopOrdersLeft';
import TopOrdersRight from './TopOrdersRight/TopOrdersRight';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../store/actions/index';

const TopOrdersSection = () => {
  const loading = useSelector((state) => state.topOrdersReducer.loading);
  const data = useSelector((state) => state.topOrdersReducer.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.fetchTopOrders());
  }, [dispatch]);

  let gotTopOrders;
  if (!loading) {
    gotTopOrders = data.data;
  }

  return (
    <section id='topOrders' className={classes.TopOrdersSection}>
      <header>
        <h2>Top Orders</h2>
      </header>
      <div className={classes.TopOrdersSectionAction}>
        <TopOrdersLeft data={gotTopOrders} loading={loading} />
        <TopOrdersRight data={gotTopOrders} loading={loading} />
      </div>
    </section>
  );
};

export default TopOrdersSection;
