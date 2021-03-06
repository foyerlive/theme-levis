import React from 'react'

import RelatedProducts from './components/RelatedProducts'
import ReviewCount from './components/ReviewCount'
import ReviewsContainer from './components/ReviewsContainer'

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
              children: [<ReviewCount />],
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
        <ReviewsContainer />,
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