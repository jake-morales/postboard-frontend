import React, { useEffect , useState} from 'react';
import axios from 'axios';
import Post from './Post';
import {Grid} from '@material-ui/core'

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios(
                'https://postboard-backend.herokuapp.com/api/posts/',
            );
            setPosts(response.data);
        }
        fetchData();
    }, []);

    return(
        <Grid
            container
            spacing={3}
            alignItems="center"
            justify="flex-start"
            direction="column"
            >
            {posts ?            
                posts.map(post => {
                    return (
                        <Grid item xs={12} >
                            <Post key={post} post={post} />
                        </Grid>
                    )
                })
             : (
                <Grid item>Loading Posts...</Grid>
            )}
        </Grid>

    )
}