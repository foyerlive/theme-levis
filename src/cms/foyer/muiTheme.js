const muiTheme = {
    overrides: {
        muiAppBar: {
            root: {
                backgroundColor: 'white',
                color: '#3a405b',
                height: '6rem',
                padding: '0 1rem 0 1rem'
            }
        },
        // muiTabs: {
        //     root: {
        //       flexGrow: 1,
        //       backgroundColor: '#efefef',
        //       tabSelected: {
        //         color: '#757575',
        //       },
        //        tabsRoot: {
        //          borderBottom: '5px solid #757575',
        //              },
        //     },
        //     indicator: {
        //         backgroundColor: '#757575',
        //     },
        // },
        // MuiTouchRipple: {
        //     root: {
        //         display: 'none'
        //     }
        // },
        RVKField: {
            container: {
                paddingBottom: '1rem'
            }
        },
        /*
        MuiInputLabel: {
            root: {
                textTransform: 'uppercase',
                color: '#B8BFD3',
                fontFamily: 'Montserrat-Regular',
                letterSpacing: '1.5px',
                paddingLeft: '1rem'
            },
            shrink: {
                // paddingLeft: 0
            },
            animated: {
                zIndex: 1
            }
        },
        MuiInput: {
            root: {
                color: '#3A405B',
                fontFamily: 'Montserrat-Regular'
            },
            input: {
                paddingLeft: '1rem'
            },
            underline: {
                '&:after': {
                    display: 'none'
                },
                '&:before': {
                    backgroundColor: 'transparent'
                },
                '&:hover:not($disabled):before': {
                    backgroundColor: 'transparent',
                    height: 1,
                    display: 'none'
                },
                // backgroundColor: '#F0F2F7',
                border: '2px solid transparent',
                borderRadius: '20px',
                '&:not($focused)': {
                    backgroundColor: '#F0F2F7',
                    border: '2px solid #E3E8F0'
                }
            },
            focused: {
                background: '#FFFFFF',
                boxShadow: '0 10px 25px 0 rgba(58,64,91,0.15)',
                borderRadius: '100px'
            }
        },*/
        MuiIcon: {
            root: {
                color: '#7c8799',
                fontSize: '1.2em'
            } 
        },
        MuiIconButton: {
            root: {
                fontSize: '1em',
                color: '#7c8799',
                backgroundColor: '#EFF2F4',
                borderRadius: '6px',
                width: 'auto',
                padding: '9px 18px',
            }
        },
        MuiButton: {
            root: {
                color: '#343E5C',
                backgroundColor: '#EFF2F4',
            },
            flatPrimary: {
                color: '#343E5C',
                // backgroundColor: '#343E5C',
                border: '1px solid #343E5C',
                // padding: '1rem',
                // borderRadius: '30px'
            },
            disabled: {
                // backgroundColor: '#FFFFFF',
                border: '1px solid #E4E8F0',
                // color: '#E4E8F0'
            },
            flatSecondary: {
                // border: '1px solid #343E5C',
                // color: '#343E5C',
                // padding: '1rem'
            }
        }
    }
}

export default muiTheme;