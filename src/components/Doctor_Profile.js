import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Typography, IconButton, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

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
    changepass: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 160,
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
    inputFields: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        width: 300,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 200,
        marginTop: 15
    },
    btnSubmit: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
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
    },
}));


export default function DoctorProfile() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [openChangePassDialog, setOpenChangePassDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpenChangePassDialog(true);
    };

    const handleClose = () => {
        setOpenChangePassDialog(false);
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangePass = () => {
        history.push("/DoctorTreatPatient");
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
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#2C7FB2',

                        }}>
                        Profile
                    </Typography>
                </Grid>
                <Grid xs={12} style={{ marginTop: 10 }}>
                    <Paper elevation={6} className={classes.paper} style={{ marginLeft: 10, marginRight: 25, marginBottom: 10, borderRadius: 20 }}>
                        <Grid container style={{ marginTop: 10 }}>
                            <Grid item xs={12} sm={6}>
                                <center>
                                    <div>
                                        <a href="/DoctorEditProfile" style={{ float: 'left', fontSize: '14px', fontWeight: 400, color: '#2C7FB2' }}>Edit Profile</a>
                                    </div>
                                    <Grid container>
                                        <Grid item xs={12} style={{ marginTop: '-10px' }}>
                                            <center>
                                                <img src="Dr.Pradeep.png" style={{ borderRadius: 100, height: 80 }}></img>

                                            </center>
                                        </Grid>
                                    </Grid>
                                    <div style={{ paddingBottom: 20 }}>
                                    </div>

                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 16,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#707070',
                                        fontWeight: 600

                                    }}>
                                        Dr. Pradip Musale
                                    </Typography>

                                    <Grid item xs={12} >
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                            }}>
                                                DID - 45637289
                                            </Typography>
                                        </center>
                                    </Grid>

                                    <Grid container style={{ marginTop: 10, borderTop: '1px solid lightgray' }}>
                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600,
                                                marginTop: 10,
                                            }}>
                                                Category
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600, marginTop: 10
                                            }}>
                                                Education
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5
                                            }}>
                                                Gynecologist
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5
                                            }}>
                                                BAMS/MS
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600, marginTop: 15,
                                            }}>
                                                Email
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600, marginTop: 15
                                            }}>
                                                Date Of Birth
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5
                                            }}>
                                                pradeepmusale@gmail.com
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5
                                            }}>
                                                20/09/1987
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600, marginTop: 15,
                                            }}>
                                                Mobile No
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 600, marginTop: 15,
                                            }}>
                                                Experience
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ borderRight: '1px solid lightgray', }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5, paddingBottom: 5
                                            }}>
                                                9877234564
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                fontStyle: 'normal', fontWeight: 400, marginTop: 5, paddingBottom: 5
                                            }}>
                                                12 years
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </center>
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ borderLeft: '1px solid lightgray' }}>
                                <center>
                                    <div>
                                        <a href="/DoctorEditClinicDetails" style={{ float: 'right', fontSize: '14px', fontWeight: 400, color: '#2C7FB2' }}>Edit Clinic Details</a>
                                    </div>
                                    <Grid container>
                                        <Grid item xs={12}  >
                                            <center>
                                                <LocalHospitalIcon style={{ fontSize: 40, color: '#2C7FB2' }} />
                                            </center>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 18,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#707070',
                                        fontWeight: 600

                                    }}>
                                        Akshay Nursing Home
                                    </Typography>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#707070',
                                        fontWeight: 600

                                    }}>
                                        REGNO.:- U273893JSk
                                    </Typography>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#707070',
                                        fontWeight: 600

                                    }}>
                                        GSTIN:- 567483902
                                    </Typography>
                                    <Grid item xs={12} style={{ marginTop: 15 }}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                color: '#707070',
                                                fontWeight: 400
                                            }}>
                                                Plot No 46 Ashoka Housing Society, Mahatma Phule Rd, opp phonix hospital,<br /> Kalewadi Phata, Pune, Maharashtra 411033
                                            </Typography>
                                        </center>
                                    </Grid>

                                    <Grid container style={{ marginTop: 30 }}>
                                        <Grid item xs={6}>
                                            <DateRangeIcon style={{ fontSize: 30, color: '#2C7FB2' }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateRangeIcon style={{ fontSize: 30, color: '#2C7FB2' }} />
                                        </Grid>
                                        <Grid item xs={6} style={{ marginTop: 20 }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16,
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                color: '#707070',
                                                fontWeight: 600
                                            }}>
                                                Morning Shift
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ marginTop: 20 }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 16,
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                color: '#707070',
                                                fontWeight: 600
                                            }}>
                                                Evening Shift
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ marginTop: 20 }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                color: '#707070',
                                                fontWeight: 600
                                            }}>
                                                08:00 - 03:00
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6} style={{ marginTop: 20 }}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                color: '#707070',
                                                fontWeight: 600
                                            }}>
                                                05:00 - 10:00
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                    {/* <Grid item xs={12} style={{ paddingTop: 10 }}>
                                        <center>
                                            <Button variant="contained" onClick={handleClickOpen} className={classes.changepass}  >
                                                Change Password
                                            </Button>
                                            <Dialog
                                                open={openChangePassDialog}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Do you want to Change Password?"}</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText id="alert-dialog-description">
                                                        <center>
                                                            <TextField className={classes.inputFields} id="outlined-basic" label="Current Password" variant="outlined" size="small" />
                                                            <TextField className={classes.inputFields} id="outlined-basic" label="New Password" variant="outlined" size="small" />
                                                            <TextField className={classes.inputFields} id="outlined-basic" label="Confirm Password" variant="outlined" size="small" />
                                                        </center>
                                                    </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button className={classes.btnCancle} onClick={handleClose}>
                                                        Cancle
                                                    </Button>
                                                    <Button className={classes.btnSubmit} onClick={handleClose} autoFocus>
                                                        Submit
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </center>
                                    </Grid> */}
                                </center>
                            </Grid>
                        </Grid>
                        <Grid xs={12} style={{ borderTop: '1px solid lightgray' }}>
                            <center>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal', fontSize: 14, color: '#707070', fontWeight: 400, marginTop: 15, paddingBottom: 0, marginBottom: '-10px'
                                }}>
                                    Help : In the case of any issues please mail us at info@Health97.com
                                </Typography>
                            </center>
                        </Grid>
                    </Paper>


                </Grid>

            </Grid> {/* main grid */}

        </div >
    );
}
