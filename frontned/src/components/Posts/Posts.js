import React from 'react'
import Post from './Post/Post.js'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    
    postsList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection :'column'
    }

}));
function Posts({posts}) {
    const classes = useStyles() ;
    return (
        <div className={classes.postsList}>
            {
                posts?.map((post)=>{
                    return (
                        <Post/>
                    )
                })
            }
        </div>
    )
}

export default Posts
