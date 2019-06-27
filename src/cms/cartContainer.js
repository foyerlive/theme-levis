import React, {Component} from 'react';

class CartIntro extends Component {
  render() {
    return (
      <div className="cart-intro">
        <h2>Ready to checkout?</h2>
        <p style={{lineHeight: '1.4rem'}}>Simply, tap 'Send Cart' and we will start to prepare your order.<br/>Feel free
          to keep browsing, then head to the register to complete your purchase.</p>
      </div>
    )
  }
}

class CartIntroRCS extends Component {
  render() {
    return (
      <div className="cart-intro">
        <h2>Ready to checkout?</h2>
        <p style={{lineHeight: '1.4rem'}}>Please enter your details below to submit your order.</p>
      </div>
    )
  }
}

class CartIntroRCS2 extends Component {
  render() {
    return (
      <div className="cart-intro">
        <h2>Your Cart</h2>
      </div>
    )
  }
}

const cartContainerStructure = {
  className: 'cart-container',
  children: [
    //<CartIntro/>,
    <CartIntroRCS2/>,
    'itemList',
    <CartIntroRCS/>,
    {
      className: 'cart-checkout-container',
      children: [
        // 'accountLoginQuick',
        'keypad',
        {
          className: 'cart-checkout-actions',
          children: [
            'emptyButton',
            'submitButton'
          ]
        }
      ]
    }
  ]
};

export default cartContainerStructure;

/*
 Thank you for submitting your order!

 1. Complete your purchase by making payment at the cash register.
 2. Your next stop is the register where you will pay for your order.
 3. Please Head to the register to complete your purchase.
 4. Click and collect products will be delivered to your home or available for collection from this store. Let us know at the register which you’d prefer.
 */