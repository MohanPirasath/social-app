

import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Grid, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Input({name,handleChange,half,label,autoFocus,type,handleShowPassword}) {
  return (
   <Grid item xs={12} sm={half?6:12}>
    <TextField name={name} 
    onChange={handleChange} 
    variant="outlined" 
    required 
    fullWidth 
    label={label} 
    autoFocus={autoFocus} type={type} 
    InputProps={name === "password"?{
        endAdornment:(
            <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                    {type === "password"? <VisibilityIcon/>:<VisibilityOffIcon/> }
                </IconButton>
            </InputAdornment>
        )
    }:null}
    />

   </Grid>
  )
}

export default Input
