import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import SignIn from '../SignIn/SignIn'
import { render } from '@testing-library/react';
// import printProps from './CustomField'
import { useHistory } from 'react-router-dom'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp() {
    const classes = useStyles();
    const [username, setValueUser] = useState("");
    const [password, setValuePassword] = useState("");
    const [name, setValueName] = useState("");
    const [lastname, setValueLastName] = useState("");
    const [email, setValueEmail] = useState("");
    const [checked, setChecked] = useState(false);
    const history = useHistory();


    const createUserRequestHandler = () => {
        let config = {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        };

        const userProfile = {
            role: checked ? 'Partner' : 'Client',
            name: name,
            lastname: lastname,
            email: email,
            userName: username,
            password: password
        }
        
        axios.post('https://localhost:5001/api/Auth/register', userProfile, config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const onChangeCheckBox = event => {
        setChecked(event.target.checked);
    };

    const onChangeUser = event => {
        setValueUser(event.target.value)
    };

    const onChangePassword = event => {
        setValuePassword(event.target.value)
    };

    const onChangeName = event => {
        setValueName(event.target.value)
    };

    const onChangeLastName = event => {
        setValueLastName(event.target.value)
    };

    const onChangeEmail = event => {
        setValueEmail(event.target.value)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonAddOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="standard"
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={onChangeName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={onChangeLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={onChangeEmail}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={onChangeUser}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="standard"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={onChangePassword}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKeyOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </Grid>

                    </Grid>
                    <FormControlLabel
                        control={
                        <Checkbox 
                            checked={checked}
                            color ='primary'
                            onChange={onChangeCheckBox} />}
                        style={{ textAlign: 'center', marginTop: '25px', color: 'black' }}
                        label='Check if you are interested in partnership'
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={createUserRequestHandler}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href=''
                                onClick={() => history.push('/signin')}
                                variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;