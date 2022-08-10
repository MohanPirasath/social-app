 

import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux';
// import useStyles from "./styles.js"
import "./styles.css"
// import { createPost } from '../../Api/indexs';
import { createPost,updatePost} from '../../Actions/posts.js';

function Form({currentId,setCurrentId}) {
  const posts = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId): null);
  const dispatch = useDispatch();
  // const classes = useStyles()
  const [postData,setPostData]=useState({
    creator:"",title:"",message:"",tags:"",selectedFile:""
  })


  useEffect(()=>{
    if(posts) setPostData(posts)
  },[posts,dispatch])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(currentId){
    dispatch(updatePost(currentId, postData))
    Clear()


    }else{

      dispatch(createPost(postData))
    Clear()

    }
  }
  const Clear = () =>{
    
    setCurrentId(null);
    setPostData({creator:"",title:"",message:"",tags:"",selectedFile:""})

  }

  return (
    <Paper className='paper'>
      <form autoComplete='off' noValidate className='form root' onSubmit={handleSubmit} >
        <Typography variant='h6'> {currentId?"Edit ":"Creat"} a FileIt</Typography>
        <TextField name='creator' sx={{marginTop:"1.6%"}} variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({... postData, creator:e.target.value})} />
        <TextField name='title' sx={{marginTop:"1.6%"}} variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({... postData, title:e.target.value})} />
        <TextField name='message'sx={{marginTop:"1.6%"}} variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({... postData, message:e.target.value})} />
        <TextField name='tags' sx={{marginTop:"1.6%"}} variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({... postData, tags:e.target.value.split(",")})} />
        <div className='fileInput'>
        <FileBase  
          type="file"
          multiple={false}
          onDone={(base64)=>setPostData({...postData,selectedFile:base64})} 
        />
        </div>
        <Button className='buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth>submit</Button>
        <Button  variant='contained' sx={{marginTop:".9%"}} color='error' size='small' onClick={Clear} fullWidth>Clear</Button>
      </form>

    </Paper>
  )
}

export default Form

