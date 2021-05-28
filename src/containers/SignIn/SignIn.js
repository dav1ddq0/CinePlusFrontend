import React, { useState, useEffect }  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useHistory } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { DonutLarge } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { lightBlue } from '@material-ui/core/colors';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import styles from './SiginSyles'
import Input from '@material-ui/core/Input';
import axios from 'axios';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 'large',
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(1, 1, 2),
    },
});

function SignIn({ classes }) {
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const userLoginHandler = () => {
        let config = {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        };
        
        const userProfile = {
            username: user,
            password: password
        }
        
        axios.post('https://localhost:5001/api/Auth/login', userProfile, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    };
    const onChangeUser = e =>{
        setUser(e.target.value)
    };

    // console.log(user, password)
    const history = useHistory();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>


                <form className={classes.form} noValidate autoComplete="off">

                    <TextField
                        id="username"
                        margin="normal"
                        fullWidth
                        name="user"
                        autoComplete="user"
                        label='User'
                        onChange = {onChangeUser}
                        autoFocus />

                    <TextField
                        variant="standard"
                        margin="normal"
                        fullWidth
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        label="Password"
                        onChange={onChangePassword} />


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={userLoginHandler}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href='' onClick={() => history.push('/signup')} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}

export default withStyles(styles)(SignIn);