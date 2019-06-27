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
            'backButton',
            'homeButton'
          ],
        },
        {
          node: 'logo',
          props: {
            useOrganisationLogo: false,
          },
        },
        {
          children: [
            'searchButton',
            'newCartButton'
          ],
        },
      ],
    },
    'flashMessage',
    'content',
    'cart',
    {
      node: 'footer',
      props: {
        className: 'grid-row-two',
      },
      children: [
        {
          children: [
            'breadcrumbs'
          ],
        }
      ],
    },
    'keyboard',
    'connectionStatus',
    'timeoutWarning',
  ],
};
