import React from 'react';
import T from 'prop-types';
import Statistic from './Statistic';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <ul className={styles.list}>
      <Statistic label="Good" value={good} />
      <Statistic label="Neutral" value={neutral} />
      <Statistic label="Bad" value={bad} />
      <Statistic label="Total" value={total} />
      <Statistic
        label="Positive feedback"
        value={positivePercentage}
        persents
      />
    </ul>
  </>
);

Statistics.propTypes = {
  good: T.number.isRequired,
  neutral: T.number.isRequired,
  bad: T.number.isRequired,
  total: T.number.isRequired,
  positivePercentage: T.string.isRequired,
};

export default Statistics;
