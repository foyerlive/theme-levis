import React, {Component} from 'react';

const cartItem = {
  className: 'flex-row-top cart-item-container',
  children: [
    'productImage',
    {
      className: 'product-description',
      children: [
        'productNameSimple',
        'productVariationDescription',
      ]
    },
    'productPrice',
    {
      className: 'quantity-container',
      children: [
        'buttonDecreaseQty',
        'QtyRaw',
        'buttonIncreaseQty'
      ]
    },
    'totalPrice'
  ]
};

export default cartItem