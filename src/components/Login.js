import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { green } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormGroup from '@material-ui/core/FormGroup';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: "url('Login2.png')",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(0, 10, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    [`& fieldset`]: {
      borderRadius: 25,
    },
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const GreenRadio = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);

function Login(props) {

  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState('');
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  // const MobileNo = useFormInput('');
  // const Password = useFormInput('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('');
  const [data, setData] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);


  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const setMobileNo = (e) => {
    setmobile(e.target.value );
  }
  const setPassword = (e) => {
    setpassword( e.target.value );
  }
  // const roleChange = (e) => {
  //   setrole( e.target.value );
  // }

  const history = useHistory();

  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json"
  }

  // //for testing
  // const handleLogin = () => {
  //   setError(null);
  //   setLoading(true);
  //   axios.post('http://3.108.212.148:8080/api/LoginPatient', { MobileNo: MobileNo.value, Password: Password.value }).then(response => {
  //     setLoading(false);
  //     setUserSession(response.data.token);
  //     console.log('response', response);
  //     props.history.push('/dashboard');
  //   }).catch(error => {
  //     setLoading(false);
  //     if (error.response.status === 401) setError(error.response.data.message);
  //      setError("Something went wrong. Please try again later.");
  //     console.error("error", error);
  //   });
  // }
  const handleSubmit = async () => {
    // seterror(null);
    // setloading(true);
    // axios.post('http://3.108.212.148:8080/api/LoginPatient',{
    //   MobileNo : mobile,
    //   Password : password,
    // },headers
    // ).then(response => {
    //   setData(response);
    //   setUserSession(response.data.token)
    //   console.log('respone==>', response);
    //   history.push("/dashboard")
    // }).catch(error=> {
    //   console.error('error', error);
    // });


    // axios.post('http://3.108.212.148:8080/api/Login', {
    //   MobileNo: mobile,
    //   Password: password,
    //   Role: selectedValue
    // })
    //   .then((response) => {
    //     console.log(response);
    //     localStorage.setItem('token', response.data.token);
        history.push('/DoctorHome');
      // })
      // .catch(function (error) {
      //   alert(error);
      // });

  }


  return (

    <Grid container component="main" className={classes.root} style={{ backgroundColor: '#fff' }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} className={classes.image} />

      <Grid item xs={12} md={1} style={{ alignSelf: 'center', flex: 1, backgroundColor: '#fff', borderRight: '1px solid white', padding: 10 }}>
        <Grid item xs={12} style={{ paddingBottom: 10 }}>
          <center><a href="https://www.facebook.com/health97"> <FacebookIcon style={{ color: 'gray', fontSize: '30px' }} /> </a> </center>
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 10 }}>
          <center><a href="https://www.instagram.com/health_97_/?utm_medium=copy_link"> <InstagramIcon style={{ color: 'gray', fontSize: '30px' }} /> </a></center>
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 10 }} >
          <center><a href="https://twitter.com/97Health"> <TwitterIcon style={{ color: 'gray', fontSize: '30px' }} /> </a></center>
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 10 }}>
          <center><a href="https://www.linkedin.com/company/health97/"> <LinkedInIcon style={{ color: 'gray', fontSize: '30px' }} /> </a> </center>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={5} component={Paper} elevation={0} square style={{ backgroundColor: '#fff' }}>
        <div className={classes.paper}>
          <div>
            <img src="h97 logo potrait-01.png" height='150'></img>
          </div>
          <Typography component="h1" variant="h5">
            Login Account
          </Typography>
          <Typography align="center">
            <p> This is a secure system and you will need to provide your login details to access this site.</p>
          </Typography>

          <form className={classes.form} noValidate>

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="mobile"
              label="Phone Number"
              // name="mobile"
              size='small'
              // {...MobileNo}
              onChange={(e) =>setMobileNo(e)}
              // onChange={e => setmobile(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              // name="password"
              label="Password"
              type="password"
              id="password"
              size='small'
              // {...Password}
              onChange={(e) => setPassword(e)}
              // onChange={e => setpassword(e.target.value)}
            />
            <div>
            <Radio
                checked={selectedValue === 'Doctor'}
                color='primary'
                onChange={handleChange}
                // onChange={roleChange}
                value="Doctor"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Doctor' }}
              />Doctor
              <Radio
                checked={selectedValue === 'Receptionist'}
                onChange={handleChange}
                // onChange={roleChange}
                value="Receptionist"
                color='primary'
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'Receptionist' }}
              />Receptionist
            </div>

            <Grid container style={{ paddingTop: '15px' }}>
              <Grid item sm={6} align="left" style={{ marginTop: '-10px', fontSize: '80px' }}>
                <FormGroup  >
                  <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedA} onChange={handleChangeCheckBox} />}
                    label="Remember Me"
                  />
                </FormGroup>


                {/* <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
              </Grid>
              <Grid item sm={6} align="right" >
                <Link href="/ForgotPassword" variant="body2" style={{ color: '#78B088' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Button
                type="submit"
                fullWidth
                className={classes.submit}
                style={{ color: '#fff', backgroundColor: '#78B088', borderRadius: 20 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>

            </Grid>
            <Typography component="h1">
              <Box mt={2}>
                {/* <Copyright /> */}
                To request an account just <a href="https://www.facebook.com/health97" style={{ color: '#78B088' }}> email us </a>

              </Box>
            </Typography>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;