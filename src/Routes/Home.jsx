import React, { useContext } from 'react'
import CustomCard from '../Components/Card'
import { Grid, Container, Typography } from '@mui/material'
import { DataContext } from '../Components/utils/data.context'

const Home = () => {

  const { dentists } = useContext(DataContext)
  
  return (
    <Container sx={{ paddingTop: '7em', paddingBottom: '2em', display:'flex', flexDirection:'column', alignItems:'center', flex:'1 auto' }}>
      <Typography variant='h3' textAlign='center' color='text.primary' marginBottom={3}>Dentistas</Typography>
      {dentists.loading && <Typography variant='h5' textAlign='center' color='text.primary' marginBottom={3}>Cargando...</Typography>}
      {dentists.error && <Typography variant='h5' textAlign='center' color='text.secondary' marginBottom={3}>Error al cargar los datos</Typography>}
      <Grid container sx={{
        justifyContent: 'center',
        alignContent: 'center',
        gap: '1em',
      }}>
        {dentists.data.map((dentist) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={dentist.id}>
              <CustomCard dentist={dentist} />
            </Grid>))
        }
      </Grid>
    </Container>
  )
}

export default Home