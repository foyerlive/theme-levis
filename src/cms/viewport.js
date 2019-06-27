import React, { Component } from 'react';

const viewportStructure = {
  children: [
    {
      node: 'header',
      props: {
        className: 'grid-row-three',
      },
      children: [
        {
          children: [
            'backButtonText'
          ]
        },
        {
          node: 'logo',
          props: {
            useOrganisationLogo: true
          }
        },
        {
          children: [
            'accountButton',
            'searchButton',
            {
              node: 'assistanceButton',
              props: {
                type: 'icon'
              }
            },
            'ticketButton',
            'pickupButton',
            'newCartButton'
          ]
        }
      ]
    },
    'flashMessage',
    'content',
    'cart',
    {
      node: 'footer',
      props: {
        className: 'grid-row-two'
      },
      children: [
        {
          children: [
            'breadcrumbs'
          ]
        },
        {
          children: [
            'localeSelector'
          ]
        }
      ]
    },
    'keyboard',
    'connectionStatus',
    'timeoutWarning'
  ]
};

export default viewportStructure;