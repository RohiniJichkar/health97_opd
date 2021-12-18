import React , { useEffect , useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, AppBar, Toolbar, CssBaseline, Typography, Button, Avatar, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white',
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(1),
        color: '#78B088',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 800,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    grid: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginTop: 70,
        marginLeft: 30,
        marginRight: 1
    },
    gridShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    griditem: {
        color: '#2C7FB2',
    },
    paperServices: {
        padding: theme.spacing(1),
        color: '#00318B',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 800,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'center',

    },
    gridServices: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 800,
        textAlign: 'center',

    },
}));


export default function DoctorDashboard() {

    const [data,setData] = useState([]);
    const getData = async() => {
        const res = await fetch('http://13.233.217.107:8080/api/Web_AppointmentReport');
        const actualData= await res.json();
        console.log(actualData);
    }
    

    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleRegisterClick = () => {
        history.push("/patientregistration");
    };

    const handleBookAppointmentClick = () => {
        history.push("/bookappointment");
    };

    const handleTodaysAppointmentClick = () => {
        history.push("/todaysappointment");
    };


    const handleSendIn = () => {
        history.push("/DoctorPatientDetails_SendIn");
    };

    return (
        <div className={classes.root} style={{ backgroundColor: '#ffffff' }}>
            <DoctorNavbar />

            {/* main grid */}
            <Grid container spacing={2}
                className={clsx(classes.grid, {
                    [classes.gridShift]: open,
                })}
                direction="row"
                alignItems="center"
                justify="center"
                
            >
                {/* Reports Grid Start */}

                <Grid item className={classes.griditem} xs={12} sm={3} style={{ borderRight: '1px solid gray' }}>
                    <Paper className={classes.paper} elevation={0} style={{}}>
                        <div className="row" style={{ padding: theme.spacing(0), color: '#78B088', }}>
                            <Typography variant="h7" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#78B088',

                                }}
                            >
                                TODAY'S REGISTRATION
                            </Typography>
                        </div>
                        <div className="row" style={{ padding: theme.spacing(0), color: '#00318B' }}>
                            <Typography variant="h4" noWrap={true}>
                                90
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item className={classes.griditem} xs={12} sm={3} style={{ borderRight: '1px solid gray' }}>
                    <Paper className={classes.paper} elevation={0} >
                        <div className="row" style={{ padding: theme.spacing(0), color: '#78B088' }}>
                            <Typography variant="h7" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#78B088',

                                }}
                            >
                                TODAY'S APPOINTMENTS
                            </Typography>
                        </div>
                        <div className="row" style={{ padding: theme.spacing(0), color: '#00318B' }}>
                            <Typography variant="h4" noWrap={true}>
                                20
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item className={classes.griditem} xs={12} sm={3} style={{ borderRight: '1px solid gray' }}>
                    <Paper className={classes.paper} elevation={0} >
                        <div className="row" style={{ padding: theme.spacing(0), color: '#78B088' }}>
                            <Typography variant="h7" noWrap={true}
                                style={{
                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#78B088',

                                }}>
                                PATIENT IN QUEUE
                            </Typography>
                        </div>
                        <div className="row" style={{ padding: theme.spacing(0), color: '#00318B' }}>
                            <Typography variant="h4" noWrap={true}>
                                40
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item className={classes.griditem} xs={12} sm={3} >
                    <Paper className={classes.paper} elevation={0} >
                        <div className="row" style={{ padding: theme.spacing(0), color: '#78B088' }}>
                            <Typography variant="h7" noWrap={true}
                                style={{
                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#78B088',

                                }}>
                                MONTHLY APPOINTMENTS
                            </Typography>
                        </div>
                        <div className="row" style={{ padding: theme.spacing(0), color: '#00318B' }}>
                            <Typography variant="h4" noWrap={true}>
                                1130
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                {/* Reports grid end */}

                {/* Service grid start      */}
                <Grid item xs={12} >
                    <Paper elevation={0}>
                        <div className="row" >
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#78B088',
                                    paddingTop: 20
                                }}>
                                Services
                            </Typography>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={4} style={{ paddingTop: 20 }} onClick={handleRegisterClick}>
                    <Paper className={classes.paperServices} elevation={4} style={{ borderRadius: '25px' }}>
                        <Typography variant="h7" noWrap={true} style={{ color: '#00318B', fontSize: 16 }}>
                            REGISTER <br /> PATIENTS
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} onClick={handleBookAppointmentClick}>
                    <Paper className={classes.paperServices} elevation={4} style={{ borderRadius: '25px' }} >
                        <Typography variant="h7" noWrap={true} style={{ color: '#00318B', fontSize: 16 }}>
                            BOOK <br /> APPOINTMENT
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} onClick={handleTodaysAppointmentClick}>
                    <Paper className={classes.paperServices} elevation={4} style={{ borderRadius: '25px' }}>
                        <Typography variant="h7" noWrap={true} style={{ color: '#00318B', fontSize: 16 }}>
                            TODAY'S <br /> APPOINTMENTS
                        </Typography>
                    </Paper>
                </Grid>
                {/* service grid end */}


                {/* Patient In queue grid start */}

                <Grid container direction="row" >
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className="row" >
                                <Typography variant="h5" noWrap={true}
                                    style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#78B088',
                                        paddingTop: 20
                                    }}>
                                    Patient In Queue
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>

                    <Container style={{paddingBottom: 50}}>
                        <Grid container spacing={2} direction="row" wrap="nowrap">
                            <Grid item xs={2} style={{ paddingTop: 30 , marginLeft: '-40px'}}>
                                <div>
                                    <center>
                                        <img src="Pallavi Kale.jpg" style={{ height: '60px', borderRadius: 30 }}></img>
                                    </center>
                                </div>
                                <Paper className={classes.paper} elevation={4} style={{ marginRight: 30, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: '-40px', borderRadius: 20, fontFamily: '"Poppins", san-serif;', fontStyle: 'normal', fontWeight: 400,}}>
                                    <Grid item xs={12} style={{ color: '#2C7FB2', textAlign: 'center', paddingTop: 40 , fontWeight: 600, fontSize: '14px'}}>
                                        Pallavi Kale
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2' }}>
                                        09:00
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2', paddingBottom: 10 }}>
                                        Patient In
                                    </Grid>
                                   
                                </Paper>
                                <div>
                                   <center>
                                <Button size='small' style={{ fontSize:'10px', color: 'white', marginTop:'-15px', backgroundColor: '#78B088', borderRadius: 5, paddingLeft: 20, paddingRight: 20, }}>Send In</Button>
                                </center>
                                </div>              
                            </Grid>
                            <Grid item xs={2} style={{ paddingTop: 30, marginLeft: '-50px' }}>
                                <Grid item xs={6} sm={12} style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
                                    <center> <Avatar justify="center" style={{ height: 60, width: 60 }} >RT</Avatar> </center>
                                </Grid>
                                <Paper className={classes.paper} elevation={4} style={{ marginRight: 30, marginLeft: 30, flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '-40px', borderRadius: 20, fontFamily: '"Poppins", san-serif;', fontStyle: 'normal', fontWeight: 400, backgroundColor: '#78B088' }}>
                                    <Grid item xs={12} style={{ color: '#fff', textAlign: 'center', paddingTop: 40 }}>
                                        Rudrayani Tidke
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center', color: '#fff' }}>
                                        09:00
                                    </Grid>
                                    <Grid item xs={12} style={{ textAlign: 'center', alignSelf: 'center', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }}>
                                        <Button onClick={handleSendIn} style={{ fontSize: '12px', color: '#fff', textAlign: 'center', alignSelf: 'center' }}>Been Treated</Button>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid> {/* main grid */}

        </div>
    );
}
