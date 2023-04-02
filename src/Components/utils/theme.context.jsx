import React, { createContext, useState, useCallback } from 'react';
import { createTheme } from '@mui/material/styles';

export const initialState = {theme: "", toggleTheme: () => {}}

export const ThemeContext = createContext(undefined);

export const ThemeContextProvider = ({ children }) => {
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  const whiteTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = useCallback(() => {
    setTheme((theme) => (theme === darkTheme ? whiteTheme : darkTheme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeContext.Provider value={{ theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
