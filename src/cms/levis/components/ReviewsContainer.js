import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// Components
// import ReviewItem from './ReviewItem';

const FLDM = window.retrieveDataManager()
const _fetcher = FLDM.file

class ReviewsContainer extends Component {
  static propTypes = {
    product: PropTypes.object,
  };

  static defaultProps = {
    product: {},
  };

  constructor(props) {
    super(props)

    this.state = { reviews: [] }
  }

  componentDidMount() {
    const parentSku = this.props.product.sku.substring(0, 9)

    _fetcher
      .fetchJSON(`https://rh.nexus.bazaarvoice.com/highlights/v3/1/levis/${parentSku}`)
      .then(result => {
        console.log('Fetc review $$$$$$$$$$$$$$$$$$$$', result)
      })
      .catch(console.log)
  }

  render() {
    const Reviews = this.state.reviews;
    return (
      <div className={cx('reviews-container')}>
        <For each="Review" of={Reviews}>
          {Review}
        </For>
      </div>
    );
  }
}

export default ReviewsContainer;
