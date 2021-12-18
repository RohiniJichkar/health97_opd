import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControlLabel, Select, InputLabel, FormControl, TextField, Typography, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import CreateIcon from '@material-ui/icons/Create';
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },

        fontFamily: 'Poppins;',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        textAlign: 'center',
        width: '80%',
        height: 30,
    },
    formControlForm: {
        paddingBottom: theme.spacing(3),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textFieldForm: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
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
        width: 120,
        marginTop: 10,
        fontSize: '11px'
    },
    inputFields: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        width: 300,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 200,
        marginTop: 15
    },
    btnSubmit: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
    },
    
}));


export default function DoctorEditProfile() {
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

    const handleGoBack = () => {
        history.push("/DoctorProfile");
    };

    const [selected, setSelected] = React.useState("Gynecologist");

    function handleChangedDropDown(event) {
        setSelected(event.target.value);
    }

    const [morningstarttimeselected, setMorningStartTimeSelected] = React.useState("");

    function handleChangedMorningStartTime(event) {
        setMorningStartTimeSelected(event.target.value);
    }

    const [morningendtimeselected, setMorningEndTimeSelected] = React.useState("");

    function handleChangedMorningEndTime(event) {
        setMorningEndTimeSelected(event.target.value);
    }

    const [eveningstarttimeselected, setEveningStartTimeSelected] = React.useState("");

    function handleChangedEveningStartTime(event) {
        setEveningStartTimeSelected(event.target.value);
    }

    const [eveningendtimeselected, setEveningEndTimeSelected] = React.useState("");

    function handleChangedEveningEndTime(event) {
        setEveningEndTimeSelected(event.target.value);
    }

    const [clinicstarttimeselected, setClinicStartTimeSelected] = React.useState("");

    function handleChangedClinicStartTime(event) {
        setClinicStartTimeSelected(event.target.value);
    }

    const [clinicendtimeselected, setClinicEndTimeSelected] = React.useState("");

    function handleChangedClinicEndTime(event) {
        setClinicEndTimeSelected(event.target.value);
    }

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
                        <Button style={{ marginLeft: '-20px', backgroundColor: 'white', color: '#2C7FB2', borderRadius: 105, fontSize: '12px' }}> <ArrowBackIcon onClick={handleGoBack} />  </Button>
                        Edit Profile
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={6} className={classes.paper} style={{ marginLeft: 5, marginRight: 20, marginBottom: 40, borderRadius: 20 }}>
                        <Grid container >
                            <Grid item xs={12}>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontSize: 16,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: '#2C7FB2'

                                }}>
                                    Profile
                                    <a href="/DoctorEditClinicDetails" style={{
                                        fontSize: 14,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#2C7FB2',
                                        float: 'right'
                                    }}>Edit Clinic Details</a>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>

                                <center>
                                    <div style={{ paddingBottom: 10 }}>
                                        <img src="Dr.Pradeep.png" style={{ borderRadius: 200, height: 80 }}></img>
                                        <div style={{ marginTop: '-15px', marginRight: '-50px' }}>
                                            <CreateIcon size='small' style={{ borderRadius: 20, backgroundColor: '#707070', color: '#fff', padding: 2 }} />
                                        </div>
                                    </div>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 16,
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        color: '#707070'

                                    }}>
                                        Dr. Pradip Musale
                                    </Typography>
                                </center>
                                <Grid item xs={12} style={{ paddingTop: 15 }}>
                                    <center>
                                        <FormControl variant="outlined" className={classes.formControl}  >
                                            <TextField className={classes.textField} id="outlined-basic" type='number' label="Experience (Yrs)" variant="outlined" size="small" />
                                        </FormControl>
                                    </center>
                                </Grid>

                                <Grid item xs={12} style={{ paddingTop: 15 }}>
                                    <center>
                                        <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '60%' }} >
                                            <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
                                            <Select
                                                className={classes.textFieldForm}
                                                size='medium'
                                                native

                                                label="Gender"
                                                inputProps={{
                                                    name: 'gender',
                                                    id: 'outlined-gender-native-simple',
                                                }}
                                                style={{ width: '100%', fontSize: 14 }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>Male</option>
                                                <option value={2}>Female</option>

                                            </Select>
                                        </FormControl>

                                    </center>
                                </Grid>
                            </Grid>


                            <Grid item xs={4}>
                                <center>
                                    <div style={{ paddingTop: 5 }}>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" size="small" label="First Name" variant="outlined" style={{ width: '130%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" label="Last Name" variant="outlined" size="small" style={{ width: '130%' }} />
                                        </FormControl>

                                    </div>

                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='number' label="Mobile No" variant="outlined" size="small" style={{ width: '130%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='email' label="Email ID" variant="outlined" size="small" style={{ width: '130%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type="text" label="Degree" variant="outlined" size="small" style={{ width: '130%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" label="DOB" type="date" variant="outlined" size="small" style={{ width: '150%' }} />
                                        </FormControl>

                                    </div>
                                    <div>
                                        <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '73%' }} >
                                            <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                                            <Select
                                                className={classes.textFieldForm}
                                                size='medium'
                                                native
                                                value={selected}
                                                onChange={handleChangedDropDown}
                                                label="Category"
                                                inputProps={{
                                                    name: 'category',
                                                    id: 'outlined-category-native-simple',
                                                }}
                                                style={{ width: '100%', fontSize: 13 }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>Gynecologist</option>
                                                <option value={2}>Orthopedist</option>
                                                <option value={2}>Pediatrician</option>

                                            </Select>
                                        </FormControl>
                                    </div>
                                </center>
                            </Grid>


                            <Grid item xs={5}>
                                <Grid item xs={12}>
                                    <center>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            OPD Morning Time
                                        </Typography>
                                    </center>
                                </Grid>

                                <Grid container style={{ padding: 5 }}>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                                Start Time
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                                End Time
                                            </Typography>
                                        </center>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <center>
                                            <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                <InputLabel htmlFor="outlined-age-native-simple">Start Time</InputLabel>
                                                <Select
                                                    className={classes.textFieldForm}
                                                    size='large'
                                                    native
                                                    value={morningstarttimeselected}
                                                    onChange={handleChangedMorningStartTime}
                                                    label="Start Time"
                                                    inputProps={{
                                                        name: 'start time',
                                                        id: 'outlined-start-time-native-simple',
                                                    }}
                                                    style={{ width: '90%', fontSize: 14 }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>08:00</option>
                                                    <option value={2}>09:00</option>
                                                    <option value={2}>10:00</option>
                                                    <option value={2}>11:00</option>
                                                    <option value={2}>12:00</option>

                                                </Select>
                                            </FormControl>
                                        </center>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <center>
                                            <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                <InputLabel htmlFor="outlined-age-native-simple">End Time</InputLabel>
                                                <Select
                                                    className={classes.textFieldForm}
                                                    size='large'
                                                    native
                                                    value={morningendtimeselected}
                                                    onChange={handleChangedMorningEndTime}
                                                    label="End Time"
                                                    inputProps={{
                                                        name: 'end time',
                                                        id: 'outlined-end-time-native-simple',
                                                    }}
                                                    style={{ width: '90%', fontSize: 14 }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>08:00</option>
                                                    <option value={2}>09:00</option>
                                                    <option value={2}>10:00</option>
                                                    <option value={2}>11:00</option>
                                                    <option value={2}>12:00</option>
                                                </Select>
                                            </FormControl>
                                        </center>
                                    </Grid>
                                </Grid>


                                <Grid item xs={12} style={{ marginTop: '-10px' }}>
                                    <center>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            OPD Evening Time
                                        </Typography>
                                    </center>
                                </Grid>

                                <Grid container style={{ padding: 5 }}>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                                Start Time
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                                End Time
                                            </Typography>
                                        </center>
                                    </Grid>
                                </Grid>

                                <Grid container >
                                    <Grid item xs={6}>
                                        <center>
                                            <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                <InputLabel htmlFor="outlined-age-native-simple">Start Time</InputLabel>
                                                <Select
                                                    className={classes.textFieldForm}
                                                    size='large'
                                                    native
                                                    value={eveningstarttimeselected}
                                                    onChange={handleChangedEveningStartTime}
                                                    label="Start Time"
                                                    inputProps={{
                                                        name: 'start time',
                                                        id: 'outlined-start-time-native-simple',
                                                    }}
                                                    style={{ width: '90%', fontSize: 14 }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>08:00</option>
                                                    <option value={2}>09:00</option>
                                                    <option value={2}>10:00</option>
                                                    <option value={2}>11:00</option>
                                                    <option value={2}>12:00</option>

                                                </Select>
                                            </FormControl>
                                        </center>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <center>
                                            <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                <InputLabel htmlFor="outlined-age-native-simple">End Time</InputLabel>
                                                <Select
                                                    className={classes.textFieldForm}
                                                    size='large'
                                                    native
                                                    value={eveningendtimeselected}
                                                    onChange={handleChangedEveningEndTime}
                                                    label="End Time"
                                                    inputProps={{
                                                        name: 'end time',
                                                        id: 'outlined-end-time-native-simple',
                                                    }}
                                                    style={{ width: '90%', fontSize: 14 }}
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>08:00</option>
                                                    <option value={2}>09:00</option>
                                                    <option value={2}>10:00</option>
                                                    <option value={2}>11:00</option>
                                                    <option value={2}>12:00</option>
                                                </Select>
                                            </FormControl>
                                        </center>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} style={{ marginTop: 5 }}>
                                    <center>
                                        <FormControl variant="outlined" className={classes.formControl}  >
                                            <TextField className={classes.textField} multiline rows={2.5} rowsMax={5} id="outlined-basic" size="small" label="Address" variant="outlined" style={{ width: '180%' }} />
                                        </FormControl>
                                    </center>
                                </Grid>

                                <Grid container xs={12} style={{ marginTop: 45 }}>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ float: 'right', marginLeft: 40 }}>
                                            <TextField className={classes.textField} id="outlined-basic" size="small" label="City" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ marginRight: 40 }}>
                                            <TextField className={classes.textField} id="outlined-basic" size="small" label="Pincode" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid container xs={12} style={{ marginTop: 25 }}>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ float: 'right', marginLeft: 40 }}>
                                            <TextField className={classes.textField} id="outlined-basic" size="small" label="State" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className={classes.formControl} style={{ marginRight: 40 }}>
                                            <TextField className={classes.textField} id="outlined-basic" size="small" label="Country" variant="outlined" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid xs={12} sm={6}>
                                    <Button className={classes.btnCancle} style={{ float: 'right', marginRight: 20 }}>
                                        Cancle
                                    </Button>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Button className={classes.btnCancle} autoFocus style={{ float: 'left', marginLeft: 20 }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid> {/* main grid */}

        </div >
    );
}
