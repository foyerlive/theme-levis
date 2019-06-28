import React, { Component } from 'react';
import cx from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

import Rating from './Rating';

class ReviewItem extends Component {
  static propTypes = {
    Review: PropTypes.object,
  };

  render() {
    const { Review } = this.props;
    const timeAgo = moment(Review.submissionTime).fromNow();

    return (
      <div className="review-item-container">
        <div className="review-item-header">
          <div className="review-header-info">
            <span className={cx('review-item-rating')}>
              <Rating value={Review.rating} />
            </span>
            <span className={cx('review-item-timeago')}>{timeAgo}</span>
          </div>
          <div className="review-title">
            <span className={cx('review-item-title')}>{Review.reviewTitle}</span>
          </div>
        </div>

        <div className={cx('review-item-body')}>
          {Review.reviewText}
        </div>

        <div className="review-item-footer">
          <span className={cx('review-item-name')}>{Review.author}</span>
        </div>
      </div>
    )
  }
}

export default ReviewItem;
