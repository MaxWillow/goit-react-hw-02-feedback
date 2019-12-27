import React, { Component } from 'react';
import T from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export default class Section extends Component {
  static defaultProps = {
    title: 'Please leave feedback',
  };

  static propTypes = {
    title: T.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return '0%';
    }
    return `${((this.state.good / this.countTotalFeedback()) * 100).toFixed(
      0,
    )}%`;
  };

  render() {
    const { title } = this.props;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentageOfPositiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <section>
        <h2>{title}</h2>
        <FeedbackOptions
          options={{ good: 'good', neutral: 'neutral', bad: 'bad' }}
          onLeaveFeedback={this.countFeedbacks}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentageOfPositiveFeedbacks}
          />
        ) : (
          <p>No feedback given. Rate us!</p>
        )}
      </section>
    );
  }
}
