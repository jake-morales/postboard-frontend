import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Post from './Post';
import {Grid} from '@material-ui/core'

import {backendURL} from '../index'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios(
                `http://${backendURL}/api/posts/`,
            );
            setPosts(response.data);
        }
        fetchData();
    }, []);

    return(
        <Grid
            container
            spacing={3}
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
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
             {          
                posts.map(post => {
                    return (
                        <Grid item key={post._id} md={3} >
                            <Post post={post} />
                        </Grid>
                    )
                })
             }
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

    )
}