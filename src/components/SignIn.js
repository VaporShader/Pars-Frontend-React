import React, { useEffect } from 'react';
import {
    TextField, Grid, Button, Link, InputLabel,
    FilledInput, FormControl, IconButton, InputAdornment
} from '@material-ui/core/';
import { makeStyles, } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons/';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const SignIn = (props) => {
    const classes = useStyles();
    const handleSign = props.handleClickChnageSign
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
        disabledSignIn: true,
    });
    // eslint-disable-next-line
    const [user, setUser, removeUser] = useCookies(['user']);

    const HandleChange = prop => event => {
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        //let passwordform = document.getElementById("passwordform");
        if (username.value === "" || password.value === "") {
            setValues({
                ...values,
                [prop]: event.target.value,
                disabledSignIn: true,
            });
        }
        else {
            setValues({
                ...values,
                [prop]: event.target.value,
                disabledSignIn: false,
            });
        }
    };

    useEffect(() => { });

    const HandleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const SignInHandle = () => {
        setUser("password", values.password)
        setUser("username", values.username)
        window.location.reload();
    };

    const HandleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="filled"
                margin="normal"
                fullWidth
                id="username"
                label="Email or Username"
                name="username"
                onChange={HandleChange('username')}
            />
            <FormControl
                id="passwordform"
                fullWidth variant="filled"
            >
                <InputLabel htmlFor="password">Password</InputLabel>
                <FilledInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={HandleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={HandleClickShowPassword}
                                onMouseDown={HandleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                id="signin"
                disabled={values.disabledSignIn}
                fullWidth
                type="button"
                variant="outlined"
                color="inherit"
                onClick={SignInHandle}
                className={classes.submit}
            >
                Sign In
        </Button>

            <Grid container >
                <Grid item xs>
                    <Link component="button" color="inherit" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item >
                    <Link component="button" color="inherit" id="signUp" onClick={handleSign} variant="body2">
                        {"New to Pars? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form >
    )
}

export default SignIn;