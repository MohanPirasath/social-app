

import React from 'react'
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
// import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core"

import Posts from './Posts/Posts';
import Form from './Form/Form';

// import useStyles from "./style.js"
import "./APPP.css"

import FileitImg from "../assests/FileItImg.png"

function Appp() {
  // const classes = useStyles()
  return (
    <Container maxidth="lg">
      <AppBar className="Appbar" position="static" color="inherit">
        <Typography className="Typography" variant="h2" align="center">
          FileIt
        </Typography>
        <img className="appimg"
        src={FileitImg} 
        alt="FileIt" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default Appp



