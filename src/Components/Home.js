import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase
 } from '@material-ui/core';
 import MenuIcon from '@material-ui/icons/Menu';
 import SearchIcon from '@material-ui/icons/Search'



export default function Home () {

    return(
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    PostBoard
                </Typography>
                <SearchIcon/>
                <InputBase
                    placeholder="Search..."/>
            </Toolbar>
        </AppBar>
    );
};