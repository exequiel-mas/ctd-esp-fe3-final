import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Stack, Button, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from '../Components/utils/theme.context'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Stack direction='row' justifyContent='space-between' sx={{
      position:'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1em 2em',
      backgroundColor: 'background.paper',
      display: 'flex',
      alignItems:'center',
      zIndex: 11,
      boxShadow: 2
    }}>
      <Stack direction='row' justifyContent='center' sx={{
        flex: '1 auto',
        gap: 6
      }}>
        <Button variant='text' sx={{
          color: 'text.primary'
        }} component={Link} to='/home'>Home</Button>
        <Button variant='text' sx={{
          color: 'text.primary'
        }}component={Link} to='/favs'>Favoritos</Button>
        <Button variant='text' sx={{
          color: 'text.primary'
        }} component={Link} to='/contact'>Contacto</Button>
      </Stack>
      <IconButton onClick={toggleTheme} aria-label='toggle-button'>
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Stack>
  )
}

export default Navbar