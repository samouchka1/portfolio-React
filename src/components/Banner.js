import React from 'react';
import {
    Container,
    Box,
    Typography
} from '@mui/material';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Slide } from "react-awesome-reveal";

const welcomeTextAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: {
        md: '50%',
        sm: '75%',
        xs: '95%'
    },
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff',
}

const welcomeTextStyle = {
    fontFamily: 'Monda',
    fontWeight: '600',
    fontSize: {
        md: '2.5rem',
        xs: '1.5rem'
    },
    textShadow: 'black 3px 3px 2px',
    caretColor: 'transparent'
}

const welcomeSubTextStyle = {
    paddingTop: '1.5rem',
    fontWeight: '600',
    fontSize : {
        md: '1.2rem',
        xs: '1rem'
    },
    textShadow: 'black 3px 3px 2px',
    caretColor: 'transparent'
}

const Banner = () => {

  return (
    <Container maxWidth={false}
         sx={{height: '85vh', width: '100%', mb: '1rem'}}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1', height: '87vh'}}>
            <ParallaxBannerLayer image={process.env.PUBLIC_URL + 'annie-nyle-unsplash.jpg'} speed={-40} />
            <Box sx={{position: 'relative', top: '40%'}}>
                <Box sx={welcomeTextAreaStyle}>
                    <Slide direction="left" duration="600">
                        <Typography sx={welcomeTextStyle}>
                            Greetings, I am Miguel.
                        </Typography>
                    </Slide>
                    <Slide direction="left" duration="850">
                        <Typography sx={welcomeSubTextStyle}>
                            Web and Email Developer for Hire
                        </Typography>
                    </Slide>
                </Box>
            </Box>
        </ParallaxBanner>
    </Container>
  )
}

export default Banner;
