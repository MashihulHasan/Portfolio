import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, NavLink } from 'react-router-dom';

const NavStyle = makeStyles(() => ({
    navItem: {
        paddingLeft: 25
    },
    navIcon: {
        fontSize: '35px',
        paddingLeft: '10px'
    }
}))
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar(props) {
    const navClass = NavStyle();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Container>
                        <Toolbar>
                            <Container>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} sm={3}>
                                        <NavLink to='/'>
                                            <Typography variant="h6" style={{ flex: 1, fontWeight: 'bold' }}>MHasan</Typography>
                                        </NavLink>
                                    </Grid>
                                    <Grid item xs={6} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <NavLink to='/project'>
                                            <Typography className={navClass.navItem} variant="h6">Projects</Typography>
                                        </NavLink>
                                        <NavLink to='/technology'>
                                            <Typography className={navClass.navItem} variant="h6">Technologies</Typography>
                                        </NavLink>
                                        <NavLink to='/about'>
                                            <Typography className={navClass.navItem} variant="h6">About</Typography>
                                        </NavLink>
                                    </Grid>
                                    <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Link to='https://github.com/MashihulHasan' target="_blank">
                                            <a><GitHubIcon className={navClass.navIcon} /></a>
                                        </Link>
                                        <NavLink to={'nj'}>
                                            <LinkedInIcon className={navClass.navIcon} />
                                        </NavLink>
                                        <NavLink to={'nj'}>
                                            <TwitterIcon className={navClass.navIcon} />
                                        </NavLink>
                                        <NavLink to={'nj'}>
                                            <InstagramIcon className={navClass.navIcon} />
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </Container>

                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}
