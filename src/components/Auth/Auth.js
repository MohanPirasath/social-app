

import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import "./Auth.css"
import { Container } from '@mui/system';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import Input from './Input.js';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signup,signin} from "../../Actions/auth.js"



const initialState= {firstName:"",lastName:"",email:"",password:"",confirmPassword:""}

function Auth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const [isSignup,setIsSignup ]= useState(false);
    const [ formData , setformData ]=useState(initialState)
    const [showPassword,setShowPassword]=useState(false)

    const handleSubmit =(e)=>{
      e.preventDefault()
      if(isSignup){
        dispatch(signup(formData,navigate))
      }else{
        dispatch(signin(formData,navigate))

      }

       
    }
    const handleChange =(e)=>{
     setformData({...formData,[e.target.name]:e.target.value})

    }
  const handleShowPassword=()=>{
    setShowPassword((prevShowPassword)=> !prevShowPassword )
  }
  const switchMode =()=>{
    setIsSignup((preIsSignup)=> !preIsSignup)
  }
  return (
    <Container component="main" maxWidth="xs">
        <Paper className='paper' elevation={3}>
            <Avatar className='avatar'>
                <LockIcon/>
            </Avatar>
                <Typography variant='h5'>{isSignup? "Sign Up":"Sign In"}</Typography>
                <form className='form' onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup ? (
                                <>
                                
                                <Input name='firstName' label="First Name" handleChange ={handleChange} autoFocus half/>

                               
                                <Input name='lastName' label="Last Name" handleChange ={handleChange} half/>

                                
                               
                                </>
                            ):""
                        }
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />
                    {isSignup?<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>:""}
                    </Grid>
                    <Button type="submit" variant='contained' fullWidth color='primary' className='submit'>{isSignup?"Sign Up": "Sign In"}</Button>
                  <Grid container justifyContent="flex-end" >
                    <Grid item>
                        <Button onClick={switchMode}>{isSignup?"Already have an account? Sign In":"Don't have an account ? Sign Up"}</Button>

                    </Grid>
                  </Grid>
                
                </form>
        </Paper>

    </Container>
  )
}

export default Auth
