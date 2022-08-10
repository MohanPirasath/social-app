


import React from 'react'
import FileitImg from "../../assests/FileItImg.png"
import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom";
import { Avatar, Button, Toolbar } from '@mui/material';

const Navbar = () => {
    const user = null;
  return (
    <AppBar className="Appbar brandContainer" position="static" color="inherit">
        <div className='brandContainer'>

    <Typography className="Typography" variant="h2" align="center">
      FileIt
    </Typography>
    <img className="appimg"
    src={FileitImg} 
    alt="FileIt" />
        </div>
        <Toolbar className='toolbar'>
        {
            user?(<div className='profile'>
                <Avatar className='purple' alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)} </Avatar>
                <Typography className='userName' variant='h6'>{user.result.name} </Typography>
                <Button variant='contained' className='logout' color='secondary' > logout </Button>
            </div>) :(
                <Button LinkComponent={Link} className='SIGNIN' to="/auth" variant='contained' color='primary'> Sign  In</Button>
            )
        }
        </Toolbar>
  </AppBar>
  )
}

export default Navbar
