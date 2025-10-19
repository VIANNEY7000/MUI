import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import chef from '../assets/CHEF.JPEG'
import axios from "axios";
import { Link } from "react-router-dom";

export default function MediaCard() {
 const [data, setData] = useState([]);
  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data.slice(0,12));
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

 

  return (

     <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
    {data.map((info) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={chef}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          OUR CHEF
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {info.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to ='/'>Go to Home</Link></Button>
        <Button size="small">{info.id}</Button>
      </CardActions>
    </Card>
      ))}
    </div>
  );
}
