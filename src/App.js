import React from 'react';
import Home from './Components/Home';

import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import {teal} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
})

export default function App() {
    return(
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
};