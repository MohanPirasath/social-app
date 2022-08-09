 

import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FileBase from "react-file-base64"
// import useStyles from "./styles.js"
import "./styles.css"

function Form() {
  // const classes = useStyles()
  const [postData,setPostData]=useState({
    creator:"",title:"",message:"",tags:"",selectedFile:""
  })

  const handleSubmit = () =>{

  }

  return (
    <Paper className='paper'>
      <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit} >
        <Typography variant='h6'> Creating a FileIt</Typography>
        <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({... postData, creator:e.target.value})} />
        <TextField name='title' variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({... postData, title:e.target.value})} />
        <TextField name='message' variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({... postData, message:e.target.value})} />
        <TextField name='tags' variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({... postData, tags:e.target.value})} />
        <div className='fileInput'>

        </div>
      </form>

    </Paper>
  )
}

export default Form

