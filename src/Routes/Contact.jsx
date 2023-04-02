import React from 'react'
import Form from '../Components/Form'
import { Typography, Container, Paper } from '@mui/material'

const Contact = () => {
  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      flex:'1 auto',
      paddingTop: '7em',
    }}>
      <Typography variant='h3' color='text.primary' marginBottom={3}>Contacto</Typography>
      <Paper sx={{ padding: 3, maxWidth:'600px'}}>
        <Typography variant='h4' color='text.primary' textAlign='center'>
          Want to know more?
        </Typography>
        <Typography variant='body1' color='text.secondary' textAlign='center' marginY={3}>
          Send us your questions and we will contact you
        </Typography>
        <Form/>
      </Paper>
    </Container>
  )
}

export default Contact