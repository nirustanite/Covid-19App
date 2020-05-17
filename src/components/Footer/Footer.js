import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    footer: {
      padding: theme.spacing(2, 1),
      marginTop: 'auto',
      backgroundColor: "black",   
    },
    message: {
        color: "white",
        textAlign: "center"
    }
}));


export default function Footer(){
    const classes = useStyles();
    return(
    <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
            <Container maxWidth="md">
                <Typography variant="body1" className={classes.message}>
                    Stay safe !!! Stay Healthy !!! Beat the virus !!!
                </Typography>
            </Container>
        </footer>
    </div>
    )
}