import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, Box, FormControl, Radio, InputLabel, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    grid: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginTop: 70,
        marginLeft: 25,
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
    formControl: {
        paddingBottom: theme.spacing(2.5),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTreat: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginTop: 30,
        fontSize: '12px'

    },
    textField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },

        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        textAlign: 'center',
        width: '80%',
        height: 30,
    },
    reason: {
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        height: 50,
        color: 'gray',
        border: '1px solid #F0F0F0',
    },
    btnCancle: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginTop: 30,
        fontSize: '12px'
    },


}));


export default function DoctorPatientDetails_SendIn() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleTreat = () => {
        history.push("/DoctorTreatPatient");
    };

    const handleGoBack = () => {
        history.push("/DoctorHome");
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
            >
                <Grid item xs={12} >
                    <Typography variant="h5" noWrap={true}
                        style={{
                            fontFamily: '"Poppins", san-serif;',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#2C7FB2',

                        }}>
                        <Button style={{ marginLeft: '-20px', backgroundColor: 'white', color: '#2C7FB2', borderRadius: 105, fontSize: '12px' }}> <ArrowBackIcon onClick={handleGoBack} />  </Button>

                        Patient Details
                    </Typography>
                </Grid>
                <Grid item xs={12} container style={{ marginTop: 10 }}>

                    <Grid item xs={12} sm={4} >
                        <Paper className={classes.paper} elevation={6} style={{ marginRight: 20 }} >
                            <center>
                                <div style={{ paddingBottom: 20 }}>
                                    <img src="Pallavi Kale.jpg" style={{ borderRadius: 50, height: 90 }}></img>
                                </div>

                                <Typography variant="h6" noWrap={true} style={{
                                    fontSize: 16,
                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    color: '#707070'

                                }}>
                                    Pallavi Kale
                                </Typography>

                                <Grid container xs={12} style={{ paddingTop: 20 }}>
                                    <Grid item xs={6} style={{ borderRight: '1px solid #F0F0F0' }}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070' }}>
                                            Status
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 18, color: '#707070' }}>
                                            Send In
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070' }}>
                                            Channel
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 18, color: '#707070' }}>
                                            Walk-In
                                        </Typography>
                                    </Grid>
                                </Grid>


                                <Grid container xs={12} style={{ paddingTop: 30 }}>
                                    <Grid item sm={6} >
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            Location :
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            Contact :
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            Email Id :
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6} >
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            Wakad, Pune
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            9095009797
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', marginBottom: 15 }}>
                                            pallavi.kale@rajyugsolutions.com
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </center>
                        </Paper>

                    </Grid>

                    <Grid xs={12} sm={8}>
                        <Paper className={classes.paper} elevation={6} style={{ marginRight: 50, marginLeft: 40 }}>
                            <Typography variant="h6" noWrap={true} style={{ fontSize: 15, fontWeight: '600', color: '#707070', marginBottom: 15, color: '#00318B' }}>
                                Details
                                <a href="/DoctorPatientMedicalHistory" style={{ float: 'right', color: '#2C7FB2', fontSize: '12px' }}>
                                    Previous Medical History
                                </a>
                            </Typography>

                            <Grid container>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#00318B' }}>
                                        Appointment Date :
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        23/11/2021
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#00318B' }}>

                                        Appointment Time:
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        09:00 PM
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container style={{ marginTop: '10px' }}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#00318B' }}>
                                        Appointment Reason :
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#00318B' }}>
                                        Note For Doctor:
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container style={{ marginTop: '10px' }}>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" variant="outlined" placeholder='Reason' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" variant="outlined" placeholder='Note For Doctor' />
                                </Grid>
                            </Grid>

                            {/* <p className={classes.reason}>Regular Checkup</p> */}

                            <Typography variant="h6" noWrap={true} style={{ fontSize: 15, marginBottom: 15, color: '#00318B', marginTop: 30 }}>
                                Vitals
                            </Typography>

                            <Grid container xs={12} style={{ color: '#707070', marginTop: 20 }}>
                                <Grid item xs={12} sm={2}>
                                    Blood Pressure:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        125 mmHg
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    Pluse Rate:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        131 bpm
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    SpO2:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        99 %
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container xs={12} style={{ marginTop: 30, color: '#707070' }}>
                                <Grid item xs={12} sm={2}>
                                    Temperature:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        37 c
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    Weight:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        55 kg
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    Height:
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontWeight: '600' }}>
                                        160 cm
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container xs={12} style={{ color: '#707070' }}>
                                <Grid item xs={12} >
                                    <center>
                                        <Button variant="contained" className={classes.btnCancle} style={{ marginRight: 40 }}  >
                                            Cancle
                                        </Button>
                                        <Button variant="contained" onClick={handleTreat} className={classes.btnTreat}  >
                                            Treat
                                        </Button>
                                    </center>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>



                </Grid>

            </Grid> {/* main grid */}

        </div >
    );
}
