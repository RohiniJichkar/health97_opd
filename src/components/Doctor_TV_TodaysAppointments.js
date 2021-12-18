import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, Avatar, Switch, ButtonGroup, FormControl, TextField, Typography, Button, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';

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
            width: '30ch',
            height: '30px'
        },
        border: '1px solid lightgray',
        borderRadius: 20,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        color: 'gray'
    },
    btnview: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 25,
        paddingLeft: 35,
        paddingRight: 35,
        float: 'right'
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
        margin: theme.spacing(1),
        minWidth: 180,
    },
    btnAdd: {
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
    btnregister: {
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
}));


export default function Doctor_TV_TodaysAppointments() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleGoBack = () => {
        history.push("/DoctorHome");
    };

    const handlenewregistration = () => {
        history.push("/DoctorPatientRegistration");
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
                <Grid item xs={12} sm={4}>

                    <Typography variant="h6" noWrap={true}
                        style={{
                            fontFamily: '"Poppins", san-serif;',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#00318B',
                      
                        }}>
                        BEEN TREATED
                    </Typography>
                    <Grid xs={12} style={{ marginTop: 20 }}>
                        <Paper className={classes.paper} elevation={2} style={{ backgroundColor: '#78B088', marginRight: 200, borderRadius: 10 }}>
                            <center>
                                <Typography variant="h6" noWrap={true}
                                    style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#fff',
                                        paddingBottom: 10
                                    }}>
                                    John Wick
                                </Typography>
                                <Typography variant="h6" noWrap={true}
                                    style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#fff',
                                        paddingBottom: 10
                                    }}>
                                    09:00
                                </Typography>
                                <Typography variant="h6" noWrap={true}
                                    style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#fff',
                                        fontSize: 16,
                                        paddingBottom: 20
                                    }}>
                                    Dr. Pradeep Musale
                                </Typography>
                            </center>
                        </Paper>
                        <Typography variant="h6" noWrap={true}
                            style={{
                                fontFamily: '"Poppins", san-serif;',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                color: '#00318B',
                                fontSize: 16,

                            }}>
                            UP NEXT
                            <IconButton edge="start" color="inherit" aria-label="close" style={{ color: '#78B088', backgroundColor: '#F0F0F0', marginLeft: 10, marginTop: 10 }}>
                                <ArrowUpIcon />
                            </IconButton>
                        </Typography>


                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper className={classes.paper} elevation={6} style={{ borderRadius: 10, marginRight: 20 }}>
                        <img src="Advetisement2.jpg" style={{ height: '220px', width: '100%' }}></img>
                    </Paper>
                </Grid>

                <Container style={{ paddingBottom: 50 }}>
                    <Grid container spacing={2} direction="row" wrap="nowrap">
                        <Grid item xs={2} style={{ marginLeft: '-40px' }}>
                            <div>
                                <center>
                                    <img src="Pallavi Kale.jpg" style={{ height: '60px', borderRadius: 30 }}></img>
                                </center>
                            </div>
                            <Paper className={classes.paper} elevation={4} style={{ marginRight: 30, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: '-40px', borderRadius: 20, fontFamily: '"Poppins", san-serif;', fontStyle: 'normal', fontWeight: 400, }}>
                                <Grid item xs={12} style={{ color: '#2C7FB2', textAlign: 'center', paddingTop: 40, fontWeight: 600, fontSize: '14px' }}>
                                    Pallavi Kale
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2' }}>
                                    09:00
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2', paddingBottom: 10 }}>
                                    Patient In
                                </Grid>

                            </Paper>
                            {/* <div>
                                <center>
                                    <Button size='small' style={{ fontSize: '10px', color: 'white', marginTop: '-15px', backgroundColor: '#78B088', borderRadius: 5, paddingLeft: 20, paddingRight: 20, }}>Send In</Button>
                                </center>
                            </div> */}
                        </Grid>
                        <Grid item xs={2} style={{ marginLeft: '-40px' }}>
                            <div>
                                <center> <Avatar justify="center" style={{ height: 60, width: 60 }} >RT</Avatar> </center>
                            </div>
                            <Paper className={classes.paper} elevation={4} style={{ marginRight: 30, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: '-40px', borderRadius: 20, fontFamily: '"Poppins", san-serif;', fontStyle: 'normal', fontWeight: 400, }}>
                                <Grid item xs={12} style={{ color: '#2C7FB2', textAlign: 'center', paddingTop: 40, fontWeight: 600, fontSize: '14px' }}>
                                    Rudrayani Tidke
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2' }}>
                                    09:00
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: 'center', color: '#2C7FB2', paddingBottom: 10 }}>
                                    Patient In
                                </Grid>

                            </Paper>
                            {/* <div>
                                <center>
                                    <Button size='small' style={{ fontSize: '10px', color: 'white', marginTop: '-15px', backgroundColor: '#78B088', borderRadius: 5, paddingLeft: 20, paddingRight: 20, }}>Send In</Button>
                                </center>
                            </div> */}
                        </Grid>
                    </Grid>
                </Container>

            </Grid> {/* main grid */}

        </div >
    );
}
