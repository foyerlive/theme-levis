import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';

// Components
import ReviewItem from './ReviewItem';

const FLDM = window.retrieveDataManager()
const _fetcher = FLDM.file

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { reviews: [] }
  }

  componentDidMount() {
    const product = this.props['data-rdl'].product;
    const parentSku = product.sku.substring(0, 9)

    _fetcher
      .fetchJSON(`https://rh.nexus.bazaarvoice.com/highlights/v3/1/levis/${parentSku}`)
      .then(result => {
        const positive = _.get(result, 'subjects.positive', {})
        const negative = _.get(result, 'subjects.negative', {})

        let reviews = []
        const positiveKeys = Object.keys(positive)
        if (positiveKeys && positiveKeys.length) {
          _.forEach(positiveKeys, key => {
            const reviewCat = _.get(positive, `${key}.bestExamples`, []);
            reviews.push(reviewCat)
          })
        }

        const negativeKeys = Object.keys(negative)
        if (negativeKeys && negativeKeys.length) {
          _.forEach(negativeKeys, key => {
            const reviewCat = _.get(negative, `${key}.bestExamples`, []);
            reviews.push(reviewCat)
          })
        }

        reviews = _.flattenDeep(reviews);

        this.setState({ reviews })

      })
      .catch(console.log)
  }

  render() {
    const { reviews } = this.state

    if (!reviews.length) {
      return null;
    }

    const Reviews = _.reverse(_.sortBy(reviews, ['submissionTime']));

    return (
      <div className="product-features-container">
        <h5>Reviews</h5>
        <div className={cx('reviews-container')}>
          <For each="Review" of={Reviews}>
            <ReviewItem Review={Review} />
          </For>
        </div>
      </div>
    );
  }
}

export default ReviewsContainer;
