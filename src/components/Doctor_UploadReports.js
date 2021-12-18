import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
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
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 800,

    },
    searchIcon: {
        paddingTop: 10,
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "gray",
    },
    inputRoot: {
        color: 'inherit',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 200,
    },
    inputInput: {
        padding: theme.spacing(0, 0, 0, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '25ch',
            height: '30px'
        },
        border: '1px solid lightgray',
        borderRadius: 20,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 200,
        fontSize: 11
    },

    btnview: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
    },
    headingAddMedicine: {
        paddingTop: 20,
        alignItems: 'center',
        color: '#2C7FB2 !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    inputFields: {
        [`& fieldset`]: {
            borderRadius: 25,
        },
        width: 300,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 200,
    },
    formControl: {
        paddingBottom: theme.spacing(2.5),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnAdd: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 120,
        marginTop: 10,
        fontSize: '12px'
    },
    btnCancle: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 120,
        marginTop: 10,
        fontSize: '12px'
    },
    groupreports: {
        height: 120,
        width: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#00318B',
        paddingTop: 50,
        borderRadius: 20,
        marginLeft: 20
    },
    btnUpload: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 120,
        marginTop: 10,
        fontSize: '12px'
    },
    textField: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        textAlign: 'center',
        width: '80%',
        height: 30,
    }

}));


export default function DoctorUploadReports() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleSubmit = async () => {
        history.push('/DoctorReports');
    }
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
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#2C7FB2',

                        }}>
                        <Button style={{ marginLeft: '-20px', backgroundColor: 'white', color: '#2C7FB2', borderRadius: 105, fontSize: '12px' }}> <ArrowBackIcon onClick={handleGoBack} />  </Button>
                        Upload Reports
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 20 }}>
                    <Grid item xs={4}>
                        <Paper elevation={6} className={classes.paper} style={{ marginLeft: 20, marginRight: 20 }}>
                            <center>
                                <Typography className={classes.headingAddMedicine} variant="h6" noWrap={true} >
                                    Upload Reports
                                </Typography>
                            </center>

                            <div style={{ paddingTop: 20 }}>
                                <div>
                                    <FormControl variant="outlined" className={classes.formControl}  >
                                        <TextField className={classes.textField} id="outlined-basic" label="Title" variant="outlined" size="small" />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl variant="outlined" className={classes.formControl}  >
                                        <TextField className={classes.textField} id="outlined-basic" type='file' variant="outlined" size="small" />
                                    </FormControl>

                                </div>
                                <div style={{ paddingTop: 100 }}>
                                    <Divider style={{ border: ' 1px solid #F0F0F0' }} />
                                    <Grid container spacing={2} style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <Grid item xs={12} sm={6}>
                                            <center> <Button className={classes.btnCancle}>Cancle</Button> </center>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <center>  <Button className={classes.btnAdd}>Add</Button> </center>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Paper>
                    </Grid>


                    <Grid item xs={8} spacing={2} >
                        <Paper elevation={6} style={{ padding: 20, marginLeft: 25, marginRight: 20 }}>

                            <Grid container xs={12} spacing={2}>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography1
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports} >
                                        Sonography2
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography3
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography4
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography5
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography6
                                    </Paper>
                                </Grid>
                                <Grid item sm={2} >
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography4
                                    </Paper>
                                </Grid>
                                {/* container */}
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <center>  <Button className={classes.btnUpload} onClick={handleSubmit}>Upload</Button> </center>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </Grid> {/* main grid */}

        </div >
    );
}
