import React, { useEffect } from 'react';
import classes from './RatingSection.module.css';
import ClientCard from './ClientCard/ClientCard';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../store/actions/index';

const RatingSection = () => {
  const loading = useSelector((state) => state.feedbackReducer.loading);
  const feedbackData = useSelector(
    (state) => state.feedbackReducer.feedbackData.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.fetchFeedbackData());
  }, [dispatch]);

  // let data = [];
  // if (!loading) {
  //   data = feedbackData;
  // }

  console.log(feedbackData);

  return (
    <section id='rating' className={classes.RatingSection}>
      <header>
        <h2>What customers say</h2>
      </header>
      <div className={classes.RatingSectionContent}>
        {!loading
          ? feedbackData.map((el) => {
              return (
                <ClientCard
                  key={el.name}
                  name={el.name}
                  image={el.image}
                  comment={el.comment}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default RatingSection;
