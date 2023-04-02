import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Container, Typography } from '@mui/material'

const Footer = () => {
  const theme = useTheme()
  return (
    <Container sx={{
      padding:'3em 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
      background: theme.palette.background.paper

    }}>
      <Typography variant="caption" gutterBottom color='text.secondary'>
        Developed by Exequiel Massimelli
      </Typography>
    </Container>
  )
}

export default Footer
