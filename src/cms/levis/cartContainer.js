import React from 'react';

export const CartItem = {
  className: 'cart-item-container',
  children: [
    'productImage',
    {
      className: 'product-description',
      children: [
        'productNameSimple',
        'productVariationDescription',
        'productPrice'
      ]
    },
    {
      className: 'product-quantity',
      children: [
        'buttonDecreaseQty',
        'QtyRaw',
        'buttonIncreaseQty',
      ]
    },
    'totalPrice',
    'buttonRemoveItem'
  ],
}

export const CartSuccess = {
  className: 'cart-success-container',
  children: [
    {
      className: 'cart-success-details',
      children: [
        <h1>Thank you!</h1>,
        <p className="cart-success-order-details">We’ve sent you a text message with a link to your shopping bag. Please follow the link to complete your purchase.</p>
      ]
    }
  ]
}

export default {
  className: 'cart-container',
  children: [
    {
      className: 'cart-items-list',
      children: [
        <h1 className="cart-header">Shopping Bag</h1>,
        {
          className: 'cart-header-section',
          children: [
            <div className="product-name-header">Product</div>,
            <div className="product-quantity-header">Quantity</div>,
            <div className="product-total-header">Total</div>,
          ],
        },
        'itemList',
        {
          className: 'cart-sub-total',
          children: [<span className="sub-total-label">TOTAL</span>, 'formattedSubtotal']
        }
      ]
    },
    {
      className: 'checkout-container',
      children: [
        <h1 className="checkout-header">Send Shopping Bag to Mobile</h1>,
        'keypad',
        <p className="checkout-message">WE WILL SEND YOU A ONE-TIME MESSAGE</p>
      ]
    },
    {
      className: 'cart-checkout-container',
      children: ['submitButton'],
    },
  ],
}