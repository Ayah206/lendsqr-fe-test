import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './screens/login'
import Dashboard from './screens/dashboard';
import Users from './components/dashboard/users';
import UserDetails from './components/user';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Avenir Next',
    allVariants: {
      color: "#213F7D",
      letterSpacing:'0.5px'
    },
    caption: {
      fontSize: '24px',
      fontWeight: '550',
      lineHeight: '28.15px',
      letterSpacing:'1px'
    },
    subtitle1:{
      color: '#545F7D',
      fontWeight: '500',
      lineHeight:'16px',
    },
    subtitle2:{
      color: '#545F7D',
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '400',
      lineHeight:'14.08px',
      textAlign: 'left',
      paddingBottom: '0.5rem'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard>
          <UserDetails/>
        </Dashboard>
      </div>
    </ThemeProvider>
  );
}

export default App;
