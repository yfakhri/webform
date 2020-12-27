import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useFirebase, useFirestore,useFirestoreConnect } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme)=>createStyles({
    root:{
        height:'100vh'
    },
    paper: {
        margin: theme.spacing(8, 4),
        height:'50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
    },
    submit:{
        margin: theme.spacing(3, 0, 2),
    },
    hf:{
        height:'20%'
    }
}))
function Login() {
    const classes = useStyles();
    const firebase = useFirebase();
    const history = useHistory();
    const signInWithGoogle = () =>{
        firebase.login({
            provider:"google",
            type:"popup",
        }).then(()=>{
            history.push("/");
        })
    };
    return (
        <Grid container component="main" justify="center" className={classes.root}>
            <Grid item xs={false} sm={12} ></Grid>
            <Grid item component={Paper} xs={12} sm={4} >
            <LinearProgress />
            <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Button variant="contained" color="primary" onClick={(event)=>{
                        event.preventDefault();
                        signInWithGoogle();
                    }} fullWidth className={classes.submit}>Sign in with Google</Button>
                </div>
            </Grid>
            <Grid item xs={false} sm={12}></Grid>
        </Grid>
    );
}

export default Login;