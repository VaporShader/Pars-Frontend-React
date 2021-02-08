import React from 'react';
import {
    TextField, Grid, Button, Link, InputLabel, FilledInput, FormControl,
    IconButton, InputAdornment, Typography,
} from '@material-ui/core/';
import { makeStyles, } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons/';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    actionsContainer: {
        marginBottom: theme.spacing(3, 0, 2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

const SignUp = (props) => {
    const classes = useStyles();
    const handleSign = props.handleClickChnageSign
    const steps = ['Write down your username and email', '', 'Write a strong password'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            value={values.username}
                            variant="filled"
                            fullWidth
                            id="username"
                            label="Username"
                            helperText="Remember! Never use your real name on the world wide web!"
                            name="username"
                            onChange={handleChange('username')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={values.email}
                            variant="filled"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={handleChange('email')}
                        />
                    </Grid>
                </Grid>
            case 1:
                return `Just to check that you're not spamming, we sent you a mail with a code.\n
                Please type in the code that we send you.`;
            case 2:
                return <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>;
            default:
                return 'Unknown step';
        }
    }

    return (
        <Grid container spacing={3}>
            {steps[activeStep]}


            {(activeStep !== steps.length) ?
                <>
                    {getStepContent(activeStep)}
                    <Grid container spacing={2} className={classes.actionsContainer}>
                        <Button
                            item
                            xs={6}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        <Button
                            item
                            xs={6}
                            variant="contained"
                            onClick={handleNext}
                            className={classes.button}>
                            {activeStep === steps.length - 1 ? 'Sign Up' : 'Next'}
                        </Button>
                    </Grid>
                    <Link component="button" color="inherit" id="signIn" onClick={handleSign} variant="body2">
                        Or Sign in
                    </Link>
                </> :
                <></>}

            {activeStep === steps.length && (
                <Typography component={'span'}>All steps are completed have. fun with your new room. </Typography>

            )}


        </Grid>
    )
}

export default SignUp;