const muiTheme = {
    overrides: {
        MuiTouchRipple: {
            root: {
                display: 'none'
            }
        },
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
        MuiIconButton: {
            root: {
                color: '#3A405B'
            }
        },
        MuiButton: {
            root: {
                color: '#343E5C'
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