import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import { ThemeContextProvider } from './Components/utils/theme.context'
import { DataContextProvider } from './Components/utils/data.context'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DataContextProvider>
        <Router>
          <Routes>
            <Route element={<App/>}>
              <Route path="/home" element={<Home/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/dentists/:id" element={<Detail />} />
              <Route path="/favs" element={<Favs />} />
            </Route>
            </Routes>
        </Router>
      </DataContextProvider>
    </ThemeContextProvider> 
  </React.StrictMode>
);


