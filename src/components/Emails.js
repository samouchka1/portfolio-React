import React, { 
    useState
} from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography,
    // Tooltip ,
    Container,
    Button
} from '@mui/material';
import { 
    Slide, 
    // Fade 
} from "react-awesome-reveal";

// const emails = [
//     {
//         name: 'CareCredit',
//         path: 'https://samouchka1.github.io/EM-CareCredit/',
//         thumbnail: 'thumbnail-carecredit.PNG',
//         source: 'https://github.com/samouchka1/EM-CareCredit/blob/main/index.html'
//     },
//     {
//         name: 'Walgreens',
//         path: 'https://samouchka1.github.io/EM-Walgreens/',
//         thumbnail: 'thumbnail-walgreens.PNG',
//         source: 'https://github.com/samouchka1/EM-Walgreens/blob/main/index.html'
//     },
//     {
//         name: 'K12',
//         path: 'https://samouchka1.github.io/EM-K12/',
//         thumbnail: 'thumbnail-k12.PNG',
//         source: 'https://github.com/samouchka1/EM-K12/blob/main/index.html'
//     },
//     {
//         name: 'Amazon',
//         path: 'https://samouchka1.github.io/EM-Amazon/',
//         thumbnail: 'thumbnail-amazon.PNG',
//         source: 'https://github.com/samouchka1/EM-Amazon/blob/main/index.html'
//     }
// ]


const gridStyle = {
    justifyContent: 'center',
    gap: '1.1rem',
    margin: '2rem auto'
}

const gridItemTextStyle = {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    fontSize: {
        md: '1.3rem',
        xs: '1.05rem'
    },
    marginTop: '1rem',
    fontWeight: '500',
    zIndex: '1'
}

// RPEO Styles
const rpeoImgStyle = {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    opacity: '.8',
    '&:hover': {
        opacity: '1',
        animationName: 'zoom',
        animationDuration: '1s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.04)'}
        }
    }
}
// end RPEO

// const gridItemImageStyle = {
//     width: '100%',
//     maxWidth: '400px',
//     height: {
//         md: 270,
//         sm: 330,
//         xs: 225
//     },
//     opacity: '.8',
//     '&:hover': {
//         opacity: '1',
//         animationName: 'zoom',
//         animationDuration: '1s',
//         animationFillMode: 'forwards',
//         '@keyframes zoom' : {
//             '0%': { transform: 'scale(1.0035)'},
//             '100%' : { transform: 'scale(1.04)'}
//         }
//     }
// }

// const sourceButtonAreaStyle = {
//     position: 'relative',
//     textAlign: 'center',
//     margin: '1rem auto'
// }

// const sourceButtonStyle = {
//     backgroundColor: 'rgba(0, 0, 0, 0)',
//     opacity: '.9',
//     '&:hover': {
//         opacity: '1'
//     }
// }

const emailButtonStyle = {
    position: 'relative',
    display: 'block',
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
    margin: {
        md: '1rem auto',
        xs: '1rem auto'
    },
    border: 'solid rgb(0, 0, 0) 3px',
        '&:hover': {
            backgroundColor: 'primary.main',
            border: 'solid white 3px',
            transition: '.3s'   
        }
}
const Emails = () => {

const [emailItems, setEmailItems] = useState(false);
const handleToggle = () => {
    setEmailItems(!emailItems)
}

const EmailsGrid = () => {

    return (
        <Grid container sx={gridStyle}>

            <Grid item xs={6} md={4}>
                <Slide direction="up" triggerOnce>
                    <div style={{textAlign: 'center'}}>
                        <Link href='https://www.rpeorigin.com/' target='_blank' rel="noopener">
                            <Box 
                                component="img"
                                src={process.env.PUBLIC_URL + '/project-images/emails/rpeo.png'}
                                alt="RPE Origin logo"
                                sx={rpeoImgStyle}
                            />
                        </Link>
                        <Typography sx={gridItemTextStyle}>
                            RPE Origin.
                        </Typography>
                    </div>
                </Slide>
            </Grid>

            {/* {emails.map((email) => (

                <Grid item xs={8} md={3} key={email} sx={{maxWidth: '80%', flexGrow: 1}}>
                    <Fade cascade 
                        damping={0}
                        triggerOnce
                    >
                        <Slide direction="up" 
                            triggerOnce
                        >
                            <div>
                                <Link href={email.path} target='_blank'>
                                    <Box
                                        component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/emails/' + email.thumbnail} 
                                        alt={email.name}
                                        sx={gridItemImageStyle}
                                    />
                                </Link>
                                <Typography sx={gridItemTextStyle}>
                                    {email.name}
                                </Typography>

                                <Box sx={sourceButtonAreaStyle}>
                                    <Tooltip title={'Source code for ' + email.name} placement="bottom">
                                        <Link href={email.source} target='_blank' sx={sourceButtonStyle}>
                                            <Box component="img" 
                                                src={process.env.PUBLIC_URL + '/project-images/source-icon.png'}
                                                sx={{width: {md: '50px', xs: '45px'}}}    
                                            />
                                        </Link>
                                    </Tooltip>
                                </Box>
                            </div>

                        </Slide>
                    </Fade>
                </Grid>
            ))} */}
        </Grid>
    )
}

    return (

        <Container maxWidth={false}>
            <Button
                id="emails" 
                sx={emailButtonStyle}
                onClick={handleToggle}
            >
                Emails
            </Button>
            {emailItems === true ? <EmailsGrid /> : undefined}
        </Container>
    )}
    
    export default Emails;