
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles";
import { useContext } from "react";
import { ThemeContext } from "./Components/utils/theme.context";


function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        background: theme.palette.background.default,
        minHeight: '100vh',
        minWidth: '100vw',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
          <Navbar/>
            <Outlet />
          <Footer/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
