import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';

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
    margin: theme.spacing(6, 10, 4),
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

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function ForgotPassword() {

  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
            Forgot Password?
          </Typography>
          <Typography align="center">
            <p> Enter Your Registered Mobile Number.</p>
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Phone Number"
              name="number"
              autoComplete="number"
              autoFocus
              size='small'
            />
           
            <Grid container style={{paddingTop:'10px'}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"          
                className={classes.submit}
                style={{color:'#fff', backgroundColor:'#78B088', borderRadius:20}}
              >
                Submit
              </Button>

            </Grid>
            <Typography component="h1">
              <Box mt={2}>
                {/* <Copyright /> */}
                To request an account just <a href="https://www.facebook.com/health97" style={{color:'#78B088'}}> email us </a>
                
              </Box>
            </Typography>
            <center>
            <Typography component="h1">
              <Box mt={2}>
                {/* <Copyright /> */}
                <a href="/Login" style={{color:'#78B088'}}> Go Back </a>
                
              </Box>
            </Typography>
            </center>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}