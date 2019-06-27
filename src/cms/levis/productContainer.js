import React from 'react'

import RelatedProducts from './components/RelatedProducts'

const ReviewsIf = props => {
  const reviews = props['data-rdl'].reviews;
  // console.debug('reviewsIf', reviews, props);
  if (reviews) {
    return (
      <div className="product-features-container">
        <h5>Reviews</h5>
        {reviews}
      </div>
    );
  }
  // console.debug('reviewsIf', props);
  return null;
};

export const ReviewItem = {
  children: [
    {
      className: 'review-item-container',
      children: [
        {
          className: 'review-item-header',
          children: [
            {
              className: 'review-header-info',
              children: ['rating', 'timeAgo'],
            },
            {
              className: 'review-title',
              children: ['title']
            }
          ],
        },
        'body',
        {
          className: 'review-item-footer',
          children: ['name', 'location'],
        },
      ],
    }
  ]
}

export default {
  children: [
    {
      node: 'scollIndicator',
      children: [
        'gallery',
        {
          className: 'product-intro-container',
          children: [
            {
              className: 'product-name-container',
              children: ['name', 'priceFull'],
            },
            {
              className: 'product-rating-container',
              children: ['rating', 'reviewsCount'],
            },
          ],
        },
        {
          className: 'product-features-container',
          children: [
            <h5>Details</h5>,
            'features',
          ],
        },
        <ReviewsIf />,
      ],
    },
    {
      node: ['product', 'relatedProducts'],
      children: [
        <RelatedProducts />,
      ]
    },
    'checkout',
  ],
}