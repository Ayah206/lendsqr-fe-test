import React from 'react';
import './App.scss';
import Login from './screens/login'
import Dashboard from './screens/dashboard';
import Users from './components/dashboard/users';
import UserDetails from './components/user';
import DummyText from './components/user/dummyText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';

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
      whiteSpace: 'normal'
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
        <Router>
          <Routes>
            <Route path="/" element = {<Navigate to= "/login" />}> 
            </Route>
            <Route path = '/login' element = {<Login/>}>
            </Route>
            <Route path = '/users' element = {<Dashboard><Users/></Dashboard>}>
            </Route>
            <Route path = '/dashboard' element = {<Dashboard><Users/></Dashboard>}>
            </Route>
            <Route path = '/users/:id' element = {<Dashboard><UserDetails/></Dashboard>}>
            </Route>
            <Route path="*" element={<Dashboard><DummyText/></Dashboard>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
