import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bugar from '../assets/cardfood6.JPEG'
import Typography from '@mui/material/Typography';
import {Fastfood} from '@mui/icons-material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const Cards = () => {
  return (
    <>
       <Grid item sx={5}>
        <Paper elevation={3} style={{ padding: '10px'}} >
       <img src={bugar}alt=""  width={200}/>
       <Typography variant='subtitle1' component="h2" >
          Roasted Chicken
       </Typography>
       <Box sx={{display: "flex", alignItems:"center",}}>
        < Fastfood sx={{width: 13}}/>
        <Typography variant='body2' component="p">
          Avaleble
        </Typography>
       </Box>
       
        <Box sx={{display: "flex", alignItems:"center",marginTop:3}}>
           <Rating name="read-only" value={4.5} readOnly  precision={0.5} size='small'/>
           <Typography variant='subtitle1' component="h2" >
            4.5
           </Typography>
        </Box>
        <Box>
          <Typography variant='h6' component="h3">
            Price C $3
          </Typography>
        </Box>
        </Paper>
       </Grid>
    </>
  )
}

export default Cards