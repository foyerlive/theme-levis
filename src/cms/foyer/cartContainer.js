import React, { Component } from 'react';
import { Link } from 'react-router';

class CartIntro extends Component {
  render() {
    return (
      <div className="cart-intro">
        <h2>Shopping Cart</h2>
      </div>
    );
  }
}

class CartSubtotal extends Component {
  render() {
    const { formattedSubtotal } = this.props['data-rdl'];
    return (
      <div className="cart-subtotal-container">
        <div className="checkout-cart-total">
          <div className="checkout-cart-total-label subtotal">Subtotal</div>
          <div className="checkout-cart-total-value subtotal">{formattedSubtotal}</div>
        </div>
      </div>
    );
  }
}

class CheckoutSwitch extends Component {
  state = {
    selected: 'mobile',
  };
  render() {
    const { selected } = this.state;
    const { items } = this.props['data-rdl'];
    if (!items.length) return null;
    return (
      <div className="cart-checkout-wrapper">
        <If condition={selected == 'mobile'}>
          <div className="cart-keypad-intro">
            <p style={{ paddingTop: '2rem', lineHeight: '1.4rem' }}>Enter your phone number to complete your purchase.</p>
          </div>
          <div className="cart-checkout-container">
            {this.props['data-rdl'].keypad}
            <div className="cart-checkout-actions">
              {this.props['data-rdl'].emptyButton}
              {this.props['data-rdl'].submitButton}
            </div>
          </div>
        </If>
      </div>
    );
  }
}

const cartContainerStructure = {
  className: 'cart-container',
  children: [
    <CartIntro />,
    'itemList',
    // <CartSubtotal />,
    // 'continueShoppingButton',
    <CheckoutSwitch />,
    // {
    //   className: 'cart-checkout-container',
    //   children: [
    //     // 'accountLoginQuick',
    //     'keypad',
    //     {
    //       className: 'cart-checkout-actions',
    //       children: [
    //         'emptyButton',
    //         'submitButton'
    //       ]
    //     }
    //   ]
    // }
  ],
};

export default cartContainerStructure;

/*
 Thank you for submitting your order!

 1. Complete your purchase by making payment at the cash register.
 2. Your next stop is the register where you will pay for your order.
 3. Please Head to the register to complete your purchase.
 4. Click and collect products will be delivered to your home or available for collection from this store. Let us know at the register which you’d prefer.
 */
