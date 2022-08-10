

import React from 'react'
import Post from './Post/Post'
import "./PostStyle.css"
import{useSelector} from "react-redux"
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
// import useStyles from "./styles.js"


function Posts({setCurrentId}) {
  // const classes = useStyles()
  const posts = useSelector((state)=>state.posts)
    console.log(posts,"in posts in 13")
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className="container" container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts
