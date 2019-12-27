import React from 'react';
import T from 'prop-types';

const Statistic = ({ label, value }) => <li>{`${label}: ${value}`}</li>;

Statistic.defaultProps = {
  value: 0,
};

Statistic.propTypes = {
  label: T.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: T.any,
};

export default Statistic;
