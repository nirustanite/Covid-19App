import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    logo: {
      marginRight: theme.spacing(2),
    },
    header: {
        backgroundColor: "black",
    }
  }));


export default function Header(){

    const classes = useStyles();

    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Avatar alt="Logo" src={logo} className={classes.logo} />
                    <Typography variant="h6" color="inherit" noWrap>
                        COVID-19
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}