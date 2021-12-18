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
    btnGeneratePdf: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginTop: 150,
        fontSize: '12px'
    },
    btnUpload: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginTop: 150,
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
    }


}));


export default function DoctorTreatPatient() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleGeneratePdf = () => {
        history.push("/DoctorGeneratePrescription");
    };

    const handleGoBack = () => {
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
                        Treat
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
                                    color: 'gray'

                                }}>
                                    Pallavi Kale
                                </Typography>

                                <Grid container xs={12} style={{ paddingTop: 20 }}>
                                    <Grid item xs={6} style={{ borderRight: '1px solid #F0F0F0' }}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray' }}>
                                            Status
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 18, color: 'gray' }}>
                                            Send In
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray' }}>
                                            Channel
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 18, color: 'gray' }}>
                                            Walk-In
                                        </Typography>
                                    </Grid>
                                </Grid>


                                <Grid container xs={12} style={{ paddingTop: 30 }}>
                                    <Grid item sm={6} >
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            Location :
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            Contact :
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            Email Id :
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6} >
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            Wakad, Pune
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            9095009797
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: 'gray', marginBottom: 15 }}>
                                            pallavi.kale@rajyugsolutions.com
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </center>
                        </Paper>

                    </Grid>

                    <Grid xs={12} sm={8}>
                        <Paper className={classes.paper} elevation={6} style={{ marginRight: 50, marginLeft: 40 }}>
                            <Typography variant="h6" noWrap={true} style={{ fontSize: 16, color: 'gray', marginBottom: 15, color: '#00318B' }}>
                                Follow Up
                                <a href="/DoctorUploadReports" style={{ float: 'right', color: '#2C7FB2', fontSize: '12px' }}>
                                    Upload Prescription
                                </a>
                            </Typography>


                            <Grid container xs={12} >
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.textField} id="outlined-basic" type="date" size="small" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField className={classes.textField} id="outlined-basic" label="Cost Code" size="small" variant="outlined" style={{float: 'right'}}/>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                    <TextField className={classes.textField} multiline
                                        rows={5}
                                        rowsMax={5} id="outlined-basic" label="Diagnosis/Prescription" variant="outlined"
                                        style={{ width: 700, marginTop: 60 }}
                                    />
                                </Grid>
                            </Grid>


                            <Grid container>
                                <Grid item xs={12} >
                                    <center>
                                        <Button variant="contained" className={classes.btnUpload} style={{ marginRight: 40 }}  >
                                            Cancle
                                        </Button>
                                        <Button variant="contained" onClick={handleGeneratePdf} className={classes.btnGeneratePdf}  >
                                            Continue
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
