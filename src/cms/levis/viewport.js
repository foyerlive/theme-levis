import React from 'react'
import { SearchButton, BagButton, BackButton } from './components/HeaderButtons'

export default {
  children: [
    {
      node: 'header',
      props: {
        className: 'grid-row-three',
      },
      children: [
        {
          children: [
            'backButtonWithIcon',
          ],
        },
        {
          node: 'logo',
          props: {
            useOrganisationLogo: true,
          },
        },
        {
          children: [
            'searchButton',
            {
              node: 'interactConnectedComponent',
              props: {
                stateConnect: {
                  map: 'cart',
                  to: 'cart',
                },
                container: <BagButton />,
              },
            },
          ],
        }
      ],
    },
    'flashMessage',
    'content',
    'cart',
    {
      node: 'footer',
      children: ['breadcrumbs'],
    },
  ],
}