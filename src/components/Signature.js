import React from 'react';
import { 
    Typography,
    Container,
    Box,
    Link
} from '@mui/material';

const signatureStyle = {
    color: 'rgb(83, 27, 157)',
    margin: '2rem',
    fontSize: '.9rem',
    textAlign: 'center',
    caretColor: 'transparent'
}

const sourceButtonAreaStyle = {
    position: 'relative',
    width: 220,
    textAlign: 'center',
    margin: '6rem auto 0',
    padding: '.5rem',
    backgroundColor: 'rgba(83, 27, 157, 0.433)',
    borderRadius: '10px'
}

const sourceButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: '.9',
    '&:hover': {
        opacity: '1'
    }
}

const sourceTextStyle = {
    color: 'rgb(193, 158, 238)',
    textAlign: 'center',
    caretColor: 'transparent',
    fontSize : '.85rem'
}


const Signature = () => {
    return (
        <Container maxWidth={false}>
            <Box sx={sourceButtonAreaStyle}>
                <Link href="https://github.com/samouchka1/React-Portfolio" target='_blank' sx={sourceButtonStyle}>
                    <Box component="img" 
                        src={process.env.PUBLIC_URL + '/project-images/source-icon.png'}
                        title="Source code for this portfolio"
                        alt="Source code for this portfolio"
                        sx={{width: {md: '50px', xs: '45px'}}}    
                    />
                </Link>
                <Typography sx={sourceTextStyle}>
                    source code for this portfolio
                </Typography>
            </Box>
            

            <Typography sx={signatureStyle}>
                &copy; {new Date().getFullYear()} samouchka
            </Typography>
        </Container>
    )
}

export default Signature;