import React, {
    useState
} from 'react';
import { 
    Grid, 
    Link,
    Box,
    Typography,
    Tooltip,
    Container,
    Button, 
} from '@mui/material';
import { Slide, Fade } from "react-awesome-reveal";

const projects = [
    {
        name: 'React To-do App',
        path: 'https://astounding-cat-dc4355.netlify.app/', //check name
        thumbnail: 'react-todo.jpg',
        source: 'https://github.com/samouchka1/todo-app-mui'
    },
    {
        name: 'React Market App',
        path: 'https://lustrous-cucurucho-b00d3d.netlify.app/',
        thumbnail: 'marketapp2.jpg',
        source: 'https://github.com/samouchka1/marketApp'
    },
    {
        name: 'React \'StoreSite\' Site',
        path: 'https://beamish-sfogliatella-2eb23a.netlify.app/',
        thumbnail: 'storesite2.jpg',
        source: 'https://github.com/samouchka1/storesite'
    },
    {
        name: 'React \'CoolBikes\' site',
        path: 'https://clinquant-pixie-1ec08f.netlify.app/',
        thumbnail: 'coolbikes2.jpg',
        source: 'https://github.com/samouchka1/coolbikes'
    },
    // {
    //     name: 'WordPress Site',
    //     path: 'http://wordpress-site-1.great-site.net/',
    //     thumbnail: 'wp-1.jpg',
    //     source: null
    // },

    // {
    //     name: 'Fullstack Laravel - Microblog',
    //     path: 'http://laravel-app1.epizy.com/',
    //     thumbnail: 'chirper.jpg',
    //     source: 'https://github.com/samouchka1/chirper'
    // },
]


const gridStyle = {
    justifyContent: 'center',
    gap: '1.1rem',
    marginTop: '1.5rem'
}

const gridItemTextStyle = {
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '500',
    zIndex: '1'
}

const gridItemNoSrcTextStyle = { //Project name text position for no-source list
    position: 'relative',
    color: 'white',
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '500',
    zIndex: '1'
}

const gridItemImageStyle = {
    width: '100%',
    maxWidth: '400px',
    height: {
        md: 270,
        sm: 330,
        xs: 225
    },
    opacity: '.8',
    '&:hover': {
        opacity: '1',
        animationName: 'zoom',
        animationDuration: '.75s',
        animationFillMode: 'forwards',
        '@keyframes zoom' : {
            '0%': { transform: 'scale(1.0035)'},
            '100%' : { transform: 'scale(1.035)'}
        }
    }
}

const sourceButtonAreaStyle = {
    position: 'relative',
    textAlign: 'center',
    margin: '.5rem auto'
}

const sourceButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: '.9',
    '&:hover': {
        opacity: '1'
    }
}

const projectButtonStyle = {
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

const Projects = () => {

// filter projects with no source
const sources = projects.filter(yes => yes.source !== null);
const noSources = projects.filter(no => no.source === null);

const [projectItems, setProjectItems] = useState(false);
const handleToggle = () => {
    setProjectItems(!projectItems)
}

const ProjectsGrid = () => {

    return (
        <Grid container sx={gridStyle} id="projects">

            {sources.map((project) => (

                <Grid item xs={8} md={3} key={project} sx={{maxWidth: '80%', flexGrow: 1}}>
                    <Fade cascade 
                        damping={0}
                        triggerOnce
                    >
                        <Slide direction="up"  triggerOnce>
                            <div>
                                <Link href={project.path} target='_blank'>
                                    <Box
                                        component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                                        alt={project.name}
                                        sx={gridItemImageStyle}
                                    />
                                </Link>
                                <Typography sx={gridItemTextStyle}>
                                    {project.name}
                                </Typography>

                                <Box sx={sourceButtonAreaStyle}>
                                    <Tooltip title={'Source code for ' + project.name} placement="bottom">
                                        <Link href={project.source} target='_blank' sx={sourceButtonStyle}>
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
            ))}

            {noSources.map((project) => (

                <Grid item xs={8} md={3} key={project} sx={{maxWidth: '80%', flexGrow: 1}}>
                    <Fade cascade 
                        damping={0}
                        triggerOnce
                    >
                        <Slide direction="up" 
                            triggerOnce
                        >
                            <div>
                                <Link href={project.path} target='_blank'>
                                    <Box
                                        component="img" 
                                        src={process.env.PUBLIC_URL + '/project-images/' + project.thumbnail} 
                                        alt={project.name}
                                        sx={gridItemImageStyle}
                                    />
                                </Link>
                                <Typography sx={gridItemNoSrcTextStyle}>
                                    {project.name}
                                </Typography>
                            </div>
                        </Slide>
                    </Fade>
                </Grid>
            ))}

        </Grid>
    )
}

return (

    <Container maxWidth={false}>
        <Button
            id="projects" 
            sx={projectButtonStyle}
            onClick={handleToggle}
        >
            Projects
        </Button>
        {projectItems === true ? <ProjectsGrid /> : undefined}
    </Container>
    
)}

export default Projects;