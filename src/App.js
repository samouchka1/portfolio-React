import React, {useState} from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { 
  green 
} from '@mui/material/colors';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Signature from './components/Signature';
import Emails from './components/Emails';
import Contact from './components/Contact';
import './App.css';

const theme =  createTheme({
  palette: {
    primary: {
      main: '#232e44' //test
    },
    secondary: {
      main: green[200] //test
    }
  },
  typography: {
    fontFamily: 'sans-serif'
  }
}) 

const App = () => {

  const [showAboutButton, setAboutButton] = useState(true)
  const [showAboutContent, setAboutContent] = useState(false)

  const [showContactButton, setContactButton] = useState(true)
  const [showContactContent, setContactContent] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <NavBar 
        setAboutButton={setAboutButton} setAboutContent={setAboutContent}
        setContactButton={setContactButton} setContactContent={setContactContent}
      />
      <Banner />
      <About 
        showAboutButton={showAboutButton} setAboutButton={setAboutButton}
        showAboutContent={showAboutContent} setAboutContent={setAboutContent}
      />
      <Projects />
      <Emails />
      <Contact 
        showContactButton={showContactButton} setContactButton={setContactButton}
        showContactContent={showContactContent} setContactContent={setContactContent}
      />
      <Signature />
    </ThemeProvider>
  );
}

export default App;