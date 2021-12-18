import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Typography, Grid, Paper} from "@material-ui/core";
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
        padding: theme.spacing(3),
        color: '#78B088',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 800,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
        paddingTop: 40,
        paddingBottom: 40

    },
    grid: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginTop: 70,
        marginLeft: 5,
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
}));


export default function DoctorHome() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleDashboard = () => {
        history.push("/DoctorDashboard");
    };

    const handleTodaysAppointment = () => {
        history.push("/DoctorTodaysAppointment");
    };

    const handleAppointmentsOnTV = () => {
        history.push("/Doctor_TV_TodaysAppointments");
    };

    const handleBookAppointment = () => {
        history.push("/DoctorBookAppointment");
    };

    const handleClinicPatients = () => {
        history.push("/DoctorClinicPatients");
    };

    const handleUploadReports = () => {
        history.push("/DoctorUploadReports");
    };

    const handleHomeVisitorRequest = () => {
        history.push("/DoctorHomeVisitRequest");
    };

    const handleClinicStaff = () => {
        history.push("/DoctorClinicStaff");
    };

    const handleAddMedicines = () => {
        history.push("/DoctorAddMedicine");
    };

    const handleHomeVisitor = () => {
        history.push("/DoctorHomeVisitors");
    };

    const handleFacilities = () => {
        history.push("/DoctorClinicServices");
    };

    const handleAddServices = () => {
        history.push("/DoctorAddServices");
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
                <Grid item xs={12}>
                    <Typography variant="h5" noWrap={true}
                        style={{
                            fontFamily: '"Poppins", san-serif;',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#2C7FB2',
                            marginLeft: 10
                        }}>       
                        Home
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={2} onClick={handleDashboard} >
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="Dashboard-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                                Dashboard <br/><br/>
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleTodaysAppointment} >
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="today's Appointment-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                                Today's <br/>Appointments
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleAppointmentsOnTV} >
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="todays appointment for tv-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                               Appointments <br/>On TV
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleBookAppointment} >
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="Book Appointment-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                                Book <br/>Appointments
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleClinicPatients} >
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="clinic patients-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                                Clinic <br/> Patients
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleUploadReports}>
                    <Paper elevation={6} className={classes.paper} >
                        <center>
                            <img src="reports-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18
                                }}>
                                Patient <br/> Reports
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
               
                <Grid item xs={12} sm={2} onClick={handleHomeVisitorRequest}>
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>
                            <img src="Requests.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18                                   
                                }}>
                                Home Visitor <br/> Requests
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleClinicStaff} >
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>
                            <img src="Clinic Staff-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18

                                }}>
                                Clinic <br/> Staff
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleHomeVisitor}>
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>  <img src="homevisitoricon.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18

                                }}>
                                Home <br/> Visitors
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={2} onClick={handleAddMedicines} >
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>
                            <img src="medicines-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18

                                }}>
                                Medicines <br/><br/>
                            </Typography>
                        </center>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={2} onClick={handleAddServices}>
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>
                            <img src="services-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18

                                }}>
                                Clinic <br/> Services
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={2} onClick={handleFacilities}>
                    <Paper elevation={6} className={classes.paper} style={{marginTop: 20}}>
                        <center>
                            <img src="broadcast-01.png" style={{ height: 60, width: 60 }}></img>
                            <Typography variant="h5" noWrap={true}
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#2C7FB2',
                                    marginTop: 10,
                                    fontSize: 18

                                }}>
                                Broadcast <br/> Messages
                            </Typography>
                        </center>
                    </Paper>
                </Grid>
        
            </Grid> {/* main grid */}

        </div >
    );
}
