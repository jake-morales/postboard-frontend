import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Post from './Post';
import {Grid, makeStyles} from '@material-ui/core'

import {backendURL} from '../index'

const useStyles = makeStyles(theme => ({
    posts: {
        padding: '8px'
    }
}))

export default function Posts(props) {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios(
                `${backendURL}/api/posts/search?q=${props.query}`,
            );
            setPosts(response.data);
        }
        fetchData();
    }, [props.query]);

    return(
        <>
            <Grid
                container
                spacing={2}
                alignItems="flex-start"
                justify="center"
                direction="row"
                className={classes.posts}
                >
                {          
                    posts.map(post => {
                        return (
                            <Grid item key={post._id} md={3} >
                                <Post post={post} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}