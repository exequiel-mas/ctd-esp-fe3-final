import React, { useContext } from "react";
import { CardActionArea, CardMedia, CardContent, Card, Typography, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as DOCTOR_IMAGE from '../assets/doctor.jpg'
import { DataContext } from '../Components/utils/data.context'
import { useNavigate } from 'react-router-dom'

const CustomCard = ({ dentist }) => {
  const { handleFavourite, getIsFavourite } = useContext(DataContext)
  const isFavourite = getIsFavourite(dentist?.id)

  const push = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }} aria-label="custom-card">
      <CardActionArea aria-label='action-area' onClick={() => push(`/dentists/${dentist?.id}`)}>
        <CardMedia
          component="img"
          height="140"
          image={DOCTOR_IMAGE.default}
          alt="dentist"
        />
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom noWrap>
            {dentist?.name}
          </Typography>
          <Typography variant="body1" color='text.secondary' gutterBottom>
            {dentist?.username}
          </Typography>
          <Stack direction='row' justifyContent='space-between' paddingTop={3}>
            <Typography variant="body1" gutterBottom color='text.secondary'>
              ID {dentist?.id}
            </Typography>
            <FavoriteIcon onClick={(e) => handleFavourite(e, dentist)} sx={{
              color: isFavourite ? 'secondary.main' : 'grey.500',
            }} aria-label='favourite-button' />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
