import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Container,
  Toolbar, 
  Typography,
  List,
  ListItem,
  Link,
  // Popover,
  Modal,
  Button,
  Box,
} from '@mui/material';
import { 
    // grey
} from '@mui/material/colors';
import { Slide, Fade } from "react-awesome-reveal";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

//===STYLES===

const navBar = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  justifyContent: {
    md: 'right',
    sm: 'right',
    xs: 'left'
  },
  height: 108,
  backgroundColor : 'primary.main',
  width: '100%',
  margin: '1rem auto'
}

const navLinks = {
  fontWeight: '600',
  // textDecoration: 'none',
  color: 'white',
  fontSize : {
    xs: '1.1rem',
    md: '1.3rem'
  }
}

const navLinksBorder = {
  padding: {
    md: '2.2rem .5rem',
    xs: '2.4rem .35rem'  
  },
  border: 'solid rgba(0, 0, 0, 0) 3px',
    '&:hover': {
      border: 'solid white 3px',
      transition: '.3s'
    },
}

const NavBar = ({setAboutButton, setAboutContent, setContactButton, setContactContent }) => {

  const pages = [
    {
      name: 'About',
      path: '#about',
      method : () => {
          setAboutButton(false);
          setAboutContent(true);
      }
    },
    {
      name: 'Projects',
      path: '#projects',
      method: null
    },
    {
      name: 'Emails',
      path: '#emails',
      method: null
    },
    {
      name: 'Contact',
      path: '#contact',
      method : () => {
        setContactButton(false);
        setContactContent(true);
      }
    }
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hashLinks = pages.filter(hash => hash.path.includes('#')); //filter hashlinks
  const links = pages.filter(link => link.path.includes('https'));
  
  return (
  <Container maxWidth={false} sx={{justifyContent: 'center'}}>
      <Slide direction="down" duration="500">
        <AppBar sx={navBar}>
          <Toolbar disableGutters>

          {/* MOBILE NAV */}
          <Button 
            sx={{pl:'1rem', display:{md: 'none', xs: 'block'}}}
            onClick={handleOpen}
          >
            {open ? <ClearIcon sx={{color: '#fff'}} /> : <MenuIcon sx={{color: '#fff'}} />}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            sx={{mt: '9rem'}}
          >
            <Box sx={{padding: '2rem 3rem', border: 'solid #fff 3px', backgroundColor: '#232e44'/*primary.main not working */}}>
                {pages.map((page) => (
                    <ListItem key={page} sx={{padding: '1rem 0'}}>
                      <Fade cascade delay={50} damping={0.15}>
                        <Box>
                            <HashLink
                                style={{textDecoration: 'none'}}
                                scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })} //scroll to view
                                to={page.path}
                                onClick={page.method}
                            >
                              <Typography 
                                className="hover-underline-animation" //optional on mobile
                                sx={{
                                  color: '#fff',
                                  fontSize: '1.1rem',
                                  fontWeight: '600',
                                  // fontFamily: 'DM Serif Display'
                                }}
                                onClick={handleClose}
                              >
                                  {page.name}
                              </Typography>
                            </HashLink>
                        </Box>
                      </Fade>
                    </ListItem>
                ))}
            </Box>
          </Modal>
          {/* END MOBILE NAV */}

            <List sx={{ display: {md: 'flex', xs: 'none'}}}>
              {hashLinks.map((page) => (
                  <ListItem key={page} sx={{padding: '0 .55rem'}}>
                    <Typography noWrap sx={navLinksBorder}>
                        <HashLink
                          style={{textDecoration: 'none'}}
                          scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                          to={page.path}
                          onClick={page.method}
                        >
                          <Typography sx={navLinks}>
                            {page.name}
                          </Typography>
                        </HashLink>
                    </Typography>
                  </ListItem>
                ))}

              {links.map((page) => (
                <ListItem key={page}>
                <Typography noWrap sx={navLinksBorder}>
                    <Link
                      style={{textDecoration: 'none'}}
                      href={page.path}
                      target="_blank"
                    >
                      <Typography sx={navLinks}>
                        {page.name}
                      </Typography>
                    </Link>
                </Typography>
              </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
      </Slide>
    </Container>
  );
};

export default NavBar;