import React, { Component } from 'react';
import cx from 'classnames';

const reviewStructure = {
  className: cx('review-item-container'),
  children: [
    {
      className: cx('review-item-header-wrapper'),
      children: ['rating', 'dateLong'],
    },
    {
      className: cx('review-item-title-wrapper'),
      children: ['title'],
    },
    {
      className: cx('review-item-info-wrapper'),
      children: ['name', 'location'],
    },
    {
      className: cx('review-item-body-wrapper'),
      children: ['body'],
    },
    {
      className: cx('review-item-footer-wrapper'),
      children: ['recommended'],
    },
  ],
};

export default reviewStructure;
