import React, { Component } from 'react';

const cartItem = {
  className: 'flex-row-top cart-item-container',
  children: [
    'productImage',
    {
      className: 'product-description',
      children: ['productNameSimple', 'productVariationDescription', 'priceFormatted'],
    },
    {
      className: 'quantity-container',
      children: ['buttonDecreaseQty', 'QtyRaw', 'buttonIncreaseQty'],
    },
    'totalFormatted',
  ],
};

export default cartItem;
