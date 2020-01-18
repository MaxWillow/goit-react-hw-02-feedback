import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => <li>{`${label}: ${value}`}</li>;

Statistic.defaultProps = {
  value: 0,
};

Statistic.propTypes = {
  label: T.string.isRequired,
  value: T.oneOfType([T.number, T.string]),
};

export default Statistic;
