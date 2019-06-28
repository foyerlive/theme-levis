import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Rating from './Rating'

export const maybePluralize = (count, noun, suffix = 's') => `${count} ${noun}${count !== 1 ? suffix : ''}`;

const FLDM = window.retrieveDataManager()
const _fetcher = FLDM.file

const urlFormatted = (parentSku) => `
https://api.bazaarvoice.com/data/display/0.2alpha/product/summary?PassKey=ca68iFuyCSvgNcQbyjzgnsURQlXrJrJQn10w3kChiZPK4&
productid=${parentSku}&contentType=reviews&reviewDistribution=primaryRating,recommended&rev=0&contentlocale:eq=,fr_FR,fr_CA
`
class ReviewCount extends Component {
  constructor(props) {
    super(props)

    this.state = { value: 0, numReviews: 0 }
  }

  componentDidMount() {
    const product = this.props['data-rdl']._product || this.props['data-rdl'].product;
    const parentSku = product.sku.substring(0, 9)

    _fetcher
      .fetchJSON(urlFormatted(parentSku))
      .then(result => {
        const value = result.reviewSummary && result.reviewSummary.primaryRating && result.reviewSummary.primaryRating.average || 0
        const numReviews = result.reviewSummary && result.reviewSummary.numReviews || 0
        this.setState({ value, numReviews })
      })
      .catch(console.log)
  }

  render() {
    const { value, numReviews } = this.state;
    return (
      <div className={cx('product-rating', 'rating-value-')}>
        <Rating value={value} />
        <span className="product-reviews-count">
          {maybePluralize(numReviews, 'Review')}
        </span>
      </div>
    );
  }
}

export default ReviewCount;
