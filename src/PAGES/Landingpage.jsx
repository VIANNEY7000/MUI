import React from 'react'
import Nav from '../COMPONENT/Nav'
import Card from '../COMPONENT/Cards'
import Card2 from '../COMPONENT/Card2'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import H1 from '../COMPONENT/H1'
import Write from '../COMPONENT/Write'
import Button from '../COMPONENT/Button'

const App = () => {
  return (
    <>
     <Nav />
      <Container sx={{marginTop:3}}>
        <H1/>
      </Container>
     <Container>
       <Grid container spacing={5} sx={{marginY: 5}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </Grid>
     </Container>
     <Container>
      <Write/>
     </Container>
     <Container>
      <Grid container spacing={5}  sx={{marginY: 5}}>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
      </Grid>
     </Container>
     <Container>
      <Button/>
     </Container>
    </>
  )
}

export default App