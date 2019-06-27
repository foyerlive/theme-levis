import React from 'react';
import Specification from './components/specifications';

const portraitProductContainerStructure = {
  className: 'product-container-column',
  children: [
    'gallery',
    'name',
    'priceFull',
    'features',
    {
      node: 'tabs',
      children: [
        {
          title: 'Description',
          children: ['features'],
        },
        {
          title: 'Video',
          children: [<Specification />],
        },
        {
          title: 'Reviews',
          children: [<Specification />],
        },
      ],
    }
  ],
};

export default portraitProductContainerStructure;
