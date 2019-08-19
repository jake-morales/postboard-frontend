import React from 'react';
import App from './App';

import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import {teal} from '@material-ui/core/colors'

import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
})

export default function Themeprovider() {
    return(
        <>
            <CssBaseline />
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
        </>
    );
};