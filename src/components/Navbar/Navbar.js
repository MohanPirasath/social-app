


import React,{useState,useEffect} from 'react'
import FileitImg from "../../assests/FileItImg.png"
import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Routes, Route, Link } from "react-router-dom";
import { Avatar, Button, Toolbar } from '@mui/material';
import {useDispatch} from "react-redux"
import { useNavigate,useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout=()=>{
    dispatch({type:"LOGOUT"})
    navigate("/")
    setuser(null)

  }
    const [user,setuser]=useState(JSON.parse(localStorage.getItem("profile")))
    useEffect(() => {
      const token = user?.token;
      setuser(JSON.parse(localStorage.getItem("profile")))
    }, [location]);
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
                <Button variant='contained' className='logout' color='secondary' onClick={logout}> logout </Button>
            </div>) :(
                <Button LinkComponent={Link} className='SIGNIN' to="/auth" variant='contained' color='primary'> Sign  In</Button>
            )
        }
        </Toolbar>
  </AppBar>
  )
}

export default Navbar
