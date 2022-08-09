

import React from 'react'
import Post from './Post/Post'
import "./PostStyle.css"
import{useSelector} from "react-redux"
// import useStyles from "./styles.js"


function Posts() {
  // const classes = useStyles()
  const posts = useSelector((state)=>state.posts)
    console.log(posts,"in posts in 13")
  return (
    <div>
     <h1 >POSTS</h1>
    <Post/>
    <Post/>
    </div>
  )
}

export default Posts
