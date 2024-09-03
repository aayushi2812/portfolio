import './App.css';
import LandingPage from './landingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

//default theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F8EDE3',
    },
    tertiary: {
      main: '#8D493A',
    },
    quaternary: {
      main: '#2C3333',
    }
  },
});

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  
  const darkTheme = createTheme({
    palette: { 
      mode: toggleDarkMode ? 'dark' : 'light',
      primary: {
        main: '#17153B',
      },
      secondary: {
        main: '#435585',
      },
      tertiary: {
        main: '#435585',
      },
      quaternary: {
        main: '#FFFFFF',
      }
    },
  });
  const [theme, setTheme] = useState(lightTheme);
  
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    if(toggleDarkMode == true){
      setTheme(darkTheme)
    }
    else{
      setTheme(lightTheme)
    }
  };

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <BrowserRouter>
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
