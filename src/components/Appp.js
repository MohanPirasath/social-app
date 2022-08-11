

import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Typography from '@mui/material/Typography';

// import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core"

import Posts from './Posts/Posts';
import Form from './Form/Form';

// import {getPosts} from "../Actions/posts.js"
import Container from '@mui/material/Container';

// import useStyles from "./style.js"
import "./APPP.css"


// import FileitImg from "../assests/FileItImg.png"

import Navbar from './Navbar/Navbar.js';
import Home from './home/Home';
import Auth from './Auth/Auth';

function Appp() {
//   const [currentId,setCurrentId]= useState(null)
//   // const classes = useStyles()

// useEffect(() => {
//   dispatch(getPosts())
  
// }, [currentId,dispatch]);

  return (
    <Container maxidth="lg">
      <Navbar/>
      {/* <AppBar className="Appbar" position="static" color="inherit">
        <Typography className="Typography" variant="h2" align="center">
          FileIt
        </Typography>
        <img className="appimg"
        src={FileitImg} 
        alt="FileIt" />
      </AppBar> */}
      {/* <Grow in>
        <Container>
          <Grid container className='main' justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {/* <Home/> */}
    </Container>
  )
}

export default Appp



