# theme-portland

Portland Transact Theme

## Theme variations

### Building/Publishing

The following will build theme-portland package using decathlon variation... i.e. entry = decathlon.js

```
npm run build -- --packageVariation=decathlon
```

The following will build theme-portland package using decathlon variation... i.e. entry = decathlon.js
and will also publish the package as theme-decathlon

```
npm run build -- --packageName=theme-decathlon-test --packageVariation=decathlon
npm run publish:production -- --packageName=theme-decathlon-test
```

### Development

The following will start the development server in decathlon mode... i.e. entry = decathlon.js

```
npm start -- --packageVariation=decathlon
```

## Theme .json files

### viewportStructure

This is assigned to key `indexContainerStructure` which is picked up in the platform code.

```javascript
const viewportStructure = {
  children: [ // Top level element
    {
      node: "header",
      props: {
        className: "grid-row-three", // class name to assign to the header container
      },
      children: [
        {
            children: [
                "backButtonText"
            ],
        },
        {
          node: "logo",
          props: {
            useOrganisationLogo: false,
          },
        },
        {
          children: [
            "accountButton",
            "searchButton", // show the search button in the header (as an icon)
            "search": // As above, but as a button
            {
              node: "assistanceButton", // show the assistance icon/text in the header
              props: {
                type: "icon"
              }
            },
            "ticketButton",
            "pickupButton",
            "newCartButton",
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
            className: 'grid-row-two', // 'grid-row-flex'
        },
        children: [
            {
                children: [
                    "breadcrumbs" // show breadcrumbs
                ],
            },
            {
                children: [
                    "localeSelector" // show the locale switcher
                ]
            },
            { // show a 'Back to Top' link in the footer with a specific style
                style: {
                    display: 'flex'
                },
                children: [
                    'backToTop'
                ]
            },
            {
                children: [
                    'account',
                    'assistanceButton',
                    'ticketButton',
                    'pickupButton',
                    'connectionStatus',
                    'help',
                    'content',
                    'searchButton'
                ]
            }
        ],
    },
    'keyboard',
    'connectionStatus',
    'timeoutWarning',
  ]
}
```

### All available nodes

```javascript
{
  [
    account,
    accountButton,
    assistanceButton,
    back,
    backButtonText,
    backToTop,
    breadcrumbs,
    cart,
    cartButton,
    cartButtonText,
    connectionStatus,
    content,
    flashMessage,
    footer,
    header,
    help,
    keyboard,
    logo,
    logoutButton,
    logoutButtonText,
    localeSelector,
    newCartButton,
    pickupButton,
    search,
    searchButton,
    ticketButton,
    timeoutWarning,
    wheelchairButton,
  ];
}
```

See the source at `transact/src/containers/index.js` for more information
