import './App.css';
import LandingPage from './landingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#43766C',
    },
    secondary: {
      main: '#76453B',
    },
    tertiary: {
      main: '#B19470',
    },
    quaternary: {
      main: '#F8FAE5',
    }
  },
});

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  
  const darkTheme = createTheme({
    palette: { //default theme
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#2C3333',
      },
      secondary: {
        main: '#2E4F4F',
      },
      tertiary: {
        main: '#0E8388',
      },
      quaternary: {
        main: '#CBE4DE',
      }
    },
  });
  const [theme, setTheme] = useState(darkTheme);
  
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    if(toggleDarkMode == true){
      setTheme(lightTheme)
    }
    else{
      setTheme(darkTheme)
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <BrowserRouter>
          {/* <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} /> */}
            <Routes>
              <Route path="/" element={<LandingPage theme={theme} toggleDarkMode={toggleDarkMode} toggleDarkTheme={toggleDarkTheme}/>}>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
  );
}

export default App;
