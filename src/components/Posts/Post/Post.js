

import React,{useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDispatch} from "react-redux"
import { deletePost,likePost } from '../../../Actions/posts.js';

import moment from "moment"
import "./style.css"
// import useStyles from "./styles.js"


function Post({ post, setCurrentId }) {
  useEffect(()=>{ }
    ,[post])
  // const classes = useStyles()
  const dispatch = useDispatch();
  return (
    <Card className="card">
    <CardMedia className="media" image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    <div className="overlay">
      <Typography variant="h6" >{post.creator}</Typography>
      <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className="overlay2">
      <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
    </div>
    <div className="details">
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className="title" gutterBottom variant="h5" component="h2">{post.title}</Typography>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
    </CardContent>
    <CardActions className="cardActions">
      <Button size="small" color="primary" onClick={(e) =>
         dispatch(likePost(post._id)) 
         }><ThumbUpIcon fontSize="small" />&nbsp; Like &nbsp; {post.likeCount} </Button>
      <Button size="small" color="primary" onClick={(e) => 
         dispatch(deletePost(post._id))
         }><DeleteIcon fontSize="small" /> Delete</Button>
    </CardActions>
  </Card>
  )
}

export default Post




