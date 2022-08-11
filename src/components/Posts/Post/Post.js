

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
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function Post({ post, setCurrentId }) {
  const user =JSON.parse(localStorage.getItem("profile"))

  useEffect(()=>{ }
    ,[post])
  // const classes = useStyles()
  const dispatch = useDispatch();
  const Like = () =>{
    if(post.likes.length>0){
      return post.likes.find((like)=>like === (user?.result?._id))?(
        <><ThumbUpAltIcon fontSize='small' />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length -1} others`:`${post.likes.length} like${post.likes.length>1?"s":""}`} </>
      ):(
        <><ThumbUpOffAltIcon fontSize='small'/> &nbsp; {post.likes.length} {post.likes.length===1?`Like`:"Likes"}</>
      )
    }
    return <><ThumbUpOffAltIcon  fontSize='small'/> &nbsp; Like</>
  }
  return (
    <Card className="card">
    <CardMedia className="media" image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    <div className="overlay">
      <Typography variant="h6" >{post.name}</Typography>
      <Typography variant="body2" >{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className="overlay2">
    {(user?.result?.name== post?.name)?

      <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>:""}
    </div>
    <div className="details">
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    </div>
    <Typography className="title" gutterBottom variant="h5" component="h2">{post.title}</Typography>
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
    </CardContent>
    <CardActions className="cardActions">

      <Button size="small" color="primary" disabled={!user?.result} onClick={(e) =>
         dispatch(likePost(post._id)) 
         }><Like/></Button>
         {(user?.result?.name== post?.name)?
         
         <Button size="small" color="primary" onClick={(e) => 
            dispatch(deletePost(post._id))
            }><DeleteIcon fontSize="small" /> Delete</Button> : ""
        }
    </CardActions>
  </Card>
  )
}

export default Post




