import React, { useContext } from 'react'
import CustomCard from '../Components/Card'
import { Grid, Container, Typography } from '@mui/material'
import { DataContext } from '../Components/utils/data.context'

const Favs = () => {

  const { favourites } = useContext(DataContext)
  return (
    <Container sx={{ paddingTop: '7em', paddingBottom: '2em', display: 'flex', flexDirection: 'column', alignItems:'center', flex:'1 auto' }}>
      <Typography variant='h3' color='text.primary' marginBottom={3}>Favoritos</Typography>
      {favourites.length > 0 ? <Grid container sx={{
        justifyContent: 'center',
        alignContent: 'center',
        gap: '1em',
      }}>
        {favourites.map((dentist) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={dentist.id}>
              <CustomCard dentist={dentist} />
            </Grid>))
        }
      </Grid> : <Typography variant='h5' color='text.primary' textAlign='center'>Aún no agregastes favoritos</Typography>
    }
    </Container>
  )
}

export default Favs