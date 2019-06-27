import React from 'react';

const BackButton = props => {
  const { router } = props;

  return (
    <a className="back-button">
      <div className="index-button-back" onClick={() => router.goBack()}>
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.03786 11.4095L12.2185 19.5901C12.7695 20.1411 12.7695 21.0344 12.2185 21.5854C11.6675 22.1363 10.7742 22.1363 10.2232 21.5854L1.04495 12.4071C0.493969
             11.8561 0.493969 10.9628 1.04495 10.4118L10.2232 1.23358C10.7742 0.682598 11.6675 0.682598 12.2185 1.23358C12.7695 1.78456 12.7695 2.67787 12.2185 3.22885L4.03786 11.4095Z"
            fill="#333333"
          />
        </svg>
        &nbsp;Back
      </div>
    </a>
  );
};

const SearchButton = props => {
  const { router } = props;

  return (
    <a>
      <div className="index-button-search" onClick={() => router.push('/transact/search')}>
        <svg width="44" height="44" viewBox="0 0 32 32">
          <path
            d="M26.9,25.1l-5.7-5.7c0.6-0.8,1.1-1.7,1.5-2.6c0.4-1,0.5-2,0.5-3.1c0-1.3-0.2-2.5-0.7-3.6c-0.5-1.1-1.1-2.1-2-2.9
            c-0.8-0.8-1.8-1.5-2.9-2S15.3,4.4,14,4.4c-1.3,0-2.5,0.2-3.6,0.7s-2.1,1.1-2.9,2s-1.5,1.8-2,2.9s-0.7,2.3-0.7,3.6
            c0,1.3,0.2,2.5,0.7,3.6s1.1,2.1,2,2.9c0.8,0.8,1.8,1.5,2.9,2c1.1,0.5,2.3,0.7,3.6,0.7c0.9,0,1.8-0.1,2.7-0.4
            c0.9-0.3,1.7-0.6,2.4-1.1l5.8,5.8c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.1,0.6,0.1c0.4,0,0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1
            c0-0.2,0-0.4-0.1-0.6C27.1,25.4,27,25.2,26.9,25.1L26.9,25.1L26.9,25.1z M7.7,13.6c0-0.9,0.2-1.7,0.5-2.5c0.3-0.8,0.8-1.4,1.4-2
            c0.6-0.6,1.2-1,2-1.4s1.6-0.5,2.5-0.5c0.9,0,1.7,0.2,2.5,0.5c0.8,0.3,1.4,0.8,2,1.4c0.6,0.6,1,1.2,1.4,2c0.3,0.8,0.5,1.6,0.5,2.5
            c0,0.9-0.2,1.7-0.5,2.5c-0.3,0.8-0.8,1.4-1.4,2c-0.6,0.6-1.2,1-2,1.4c-0.8,0.3-1.6,0.5-2.5,0.5c-0.9,0-1.7-0.2-2.5-0.5
            c-0.8-0.3-1.4-0.8-2-1.4c-0.6-0.6-1-1.2-1.4-2C7.9,15.3,7.7,14.5,7.7,13.6C7.7,13.6,7.7,13.6,7.7,13.6z"
          />
        </svg>
      </div>
    </a>
  );
};

const BagButton = props => {
  const { cart, router } = props;

  return (
    <a className="index-button-cart">
      <div onClick={() => router.push('/transact/cart')}>
        <span className="item-count">{cart.items.length}</span>
        <svg width="42px" height="42px" viewBox="0 0 29 33">
          <g transform="translate(-3.000000, -1.000000)">
            <path
              d="M12.0624983,6.50000122 L12.0624983,8.33333496 L5.71872526,8.33333496 C5.24576979,8.33333496 4.85071586,8.70286171 4.81529948,9.17982182 L3.00279291,33.0131604 C2.9829688,
              33.2681075 3.06934452,33.5187572 3.2406844,33.7063806 C3.41343802,33.8940113 3.65415339,34 3.90620056,34 L31.0937992,34 C31.34585,34 31.5865835,33.8940113 31.7593154,
              33.7063806 C31.9306552,33.5187499 32.017032,33.2681038 31.9972068,33.0131604 L30.1847003,9.17982182 C30.1492984,8.70286171 29.75423,8.33333496 29.2812745,8.33333496 L22.9375015,
              8.33333496 L22.9375015,6.50000122 C22.9375015,3.46785055 20.4976864,1 17.4999817,1 C14.5023134,1 12.0624983,3.46785055 12.0624983,6.50000122 Z M13.8750048,6.50000122 C13.8750048,
              4.47761411 15.5006057,2.83333374 17.500018,2.83333374 C19.4994303,2.83333374 21.1250311,4.47761411 21.1250311,6.50000122 L21.1250311,8.33333496 L13.8750048,8.33333496 L13.8750048,
              6.50000122 Z M28.4417577,10.1666687 L30.1154988,32.1666736 L4.88468223,32.1666736 L6.55700955,10.1666687 L12.0626795,10.1666687 L12.0626795,12.9166693 C12.0626795,13.4236961 12.467666,
              13.8333362 12.9689328,13.8333362 C13.4701996,13.8333362 13.8751861,13.4236961 13.8751861,12.9166693 L13.8751861,10.1666687 L21.1252124,10.1666687 L21.1252124,12.9166693 C21.1252124,
              13.4236961 21.5301989,13.8333362 22.0314657,13.8333362 C22.5327325,13.8333362 22.937719,13.4236961 22.937719,12.9166693 L22.937719,10.1666687 L28.4417577,10.1666687 Z"
            />
          </g>
        </svg>
      </div>
    </a>
  );
};

export { SearchButton, BagButton, BackButton };