import React from 'react';
import T from 'prop-types';

const FeedbackOptions = ({
  options: [good, neutral, bad],
  onLeaveFeedback,
}) => (
  <>
    <button type="button" name={good} onClick={onLeaveFeedback}>
      {good}
    </button>
    <button type="button" name={neutral} onClick={onLeaveFeedback}>
      {neutral}
    </button>
    <button type="button" name={bad} onClick={onLeaveFeedback}>
      {bad}
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: T.arrayOf(T.string).isRequired,
  onLeaveFeedback: T.func.isRequired,
};

export default FeedbackOptions;
