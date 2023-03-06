import React from 'react'
import {
Box,
Container,
Button,
Fade,
Link
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const contactContentAreaStyle = { 
    height: 'auto',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif',
    margin: '1rem 0 .7rem 0',
    padding: '1rem 0 1.3rem',
    backgroundColor: '#232e44', //primary.main not working
    width: '100%',
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            border: 'solid white 3px',
            transition: '.3s'   
        }
}


const closeButtonAreaStyle = {
    textAlign: 'center',
    position: 'relative',
    top: '5%',
    display: 'block',
    margin: 'auto',
}

const closeButtonStyle ={
    transform: 'rotate(90deg)',
    height: '2.4rem',
    width: '2.4rem',
    caretColor: 'transparent',
    color: 'white',
        '&:hover': {
            color: 'rgb(250, 12, 12)',
            borderWidth: '0 5px 5px 0'
        }
}

const contactButtonStyle = {
    position: 'relative',
    width: '100%',
    caretColor: 'transparent',
    color: 'white',
    backgroundColor: 'primary.main',
    fontSize: {
        md: '1.5rem',
        xs: '1.1rem'
    },
    fontFamily: 'sans-serif',
    fontWeight: '600',
    textTransform: 'none',
    borderRadius: 0,
    padding: '1.6rem',
    margin: 0,
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            backgroundColor: 'primary.main',
            border: 'solid white 3px',
            transition: '.3s'   
        }
}

const contactContentIconStyle = {
    width: '50px',
    '&:hover': {
        animationName: 'zoom',
        animationDuration: '.35s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.10)'}
        }
    }
}

const contactLinkAreaStyle = {
    width: '115px',
}

const contactLinkStyle = {
    textDecoration: 'none',
    color: '#fff',
}

const Contact = ({showContactButton, setContactButton, showContactContent, setContactContent}) => {

    const ContactButton = () => {
        return (
            <Button
                sx={contactButtonStyle}
                onClick={()=>{
                    setContactButton(false);
                    setContactContent(true);
                }}
            >
                Contact Me
            </Button>
        )
    }

    const ContactContent = () => {
        return (
            <Fade in={showContactContent} timeout={650}>
                <Box sx={contactContentAreaStyle}>
                    <Box>
                        <Button  sx={closeButtonAreaStyle}
                            onClick={()=>{
                                setContactButton(true);
                                setContactContent(false);
                            }}
                        >
                            <ArrowBackIosNewIcon sx={closeButtonStyle} />
                        </Button>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: {md: '6rem', xs: '3rem'},
                        margin: '2rem auto 1rem',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Box sx={contactLinkAreaStyle}>
                            <Link href="https://www.linkedin.com/in/mchio-7a68a3236/" rel="noopener" target="_blank"
                                sx={contactLinkStyle}
                            >
                                <Box component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/contact/linkedin.png'} 
                                    alt="linkedin"
                                    sx={contactContentIconStyle} 
                                /><br/>LinkedIn
                            </Link>
                        </Box>
                        <Box sx={contactLinkAreaStyle}>
                            <Link href="https://github.com/samouchka1" rel="noopener" target="_blank"
                                sx={contactLinkStyle}
                            >
                                <Box component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/contact/github.png'} 
                                    alt="github"
                                    sx={contactContentIconStyle} 
                                /><br/>Github
                            </Link>
                        </Box>
                        <Box sx={contactLinkAreaStyle}>
                            <Link href="mailto:mchio421@gmail.com" rel="noopener" target="_blank"
                                sx={contactLinkStyle}
                            >
                                <Box component="img" 
                                    src={process.env.PUBLIC_URL + '/project-images/contact/email.png'} 
                                    alt="email"
                                    sx={contactContentIconStyle} 
                                /><br/>Email
                            </Link>
                            </Box>
                    </Box>
                </Box>
            </Fade>
        )
    }





  return (

    <Container maxWidth={false}>
        <Box id="contact">
            {showContactButton ? <ContactButton /> : null}
            {showContactContent ? <ContactContent /> : null}
        </Box>
    </Container>
  )
}

export default Contact