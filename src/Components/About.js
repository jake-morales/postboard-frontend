import React from 'react';
import { Typography, Paper, Container, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(2)
    },
    section:{
        paddingBottom: theme.spacing(3),
    },
    button:{
        margin: theme.spacing(1)
    }
  }));

export default function About(){
    const classes = useStyles();
    const code = "</>"

    return(
        <Container maxWidth="md">
            <Paper className={classes.root}>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        About
                    </Typography>
                    <Typography variant='body1'>
                        PostBoard lets you find yard sales, swap meets, and more in your area. It's a side project for learning the MERN Stack (MongoDB, Express, React, Node). 
                        <br/><br/>
                        Imagine you're feeling thrifty on a Saturday morning, but you don't want to drive around the city all day looking for that spooky new halloween costume.
                        With PostBoard, you can browse pictures of items for sale and get directions straight to the seller.
                        You can even contact the seller ahead of time to ask questions or ask to reserve items!
                        <br/><br/>
                        Make an account to post your own yard sale, pin a location, upload photos of items for sale, and talk with customers with built in chat.
                    </Typography>
                </div>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Code {code}
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        <b>Frontend</b> is written in React. I use Material-UI for styled components.
                    </Typography>
                    <Button className={classes.button} color='primary' variant='contained' href="https://github.com/jmora060/postboard-frontend/" >
                        Frontend Code
                    </Button>
                    <Typography variant='body1' gutterBottom>
                        <b>Backend</b> is written in Node/Express. I use MongoDB Atlas for a data store.
                    </Typography>
                    <Button className={classes.button} color='primary' variant='contained' href="https://github.com/jmora060/postboard-backend/" gutterBottom>
                        Backend Code
                    </Button>
                </div>
                <div className={classes.section}>
                    <Typography variant="h3" gutterBottom>
                        Coming Soon
                    </Typography>
                    <Typography variant='body1' >
                        <ul>
                            <li>Account Sign-In for making new posts by sellers</li>
                            <li>Google Maps API integration </li>
                            <li>Using React Native for iOS and Android native apps</li>
                            <li>Migrating Node Backend to FaaS architecture for automatic scaling</li>
                        </ul> 
                    </Typography>
                </div>
                
                
            </Paper>
        </Container>
        
    )
}