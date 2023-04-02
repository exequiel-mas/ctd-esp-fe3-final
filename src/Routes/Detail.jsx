import { Card, CardActionArea, CardContent, CardMedia, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { DataContext } from '../Components/utils/data.context';
import * as DOCTOR_IMAGE from '../assets/doctor.jpg'
import { AccountCircle, Phone, Email, Language  } from '@mui/icons-material';

export default function Detail() {

  const { getDentist, dentist } = useContext(DataContext)
  const { name, username, email, phone, website} = dentist.data
  
  const { id } = useParams()
  useEffect(() => {
    getDentist(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const listData = [
    {
      value: username,
      icon: <AccountCircle />
    }, {
      value: phone,
      icon: <Phone />
    }, {
      value: email,
      icon: <Email />
    }, {
      value: website,
      icon: <Language />
    }
  ]


  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1 auto',
      paddingTop: '7em',
    }}>
      <Card sx={{ maxWidth: 600, minWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={DOCTOR_IMAGE.default}
          alt="dentist"
        />
        <CardContent>
          <Typography variant='h6' textAlign='center'>
            {name}
          </Typography>
          <List>
            {listData.map((item, index) => (
                <ListItem key={index} disableGutters>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.value}
                />
              </ListItem>))
            }
          </List>
        </CardContent>
      </CardActionArea>
      </Card>
    </Container>
  );
}