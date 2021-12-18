import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, InputLabel, FormControlLabel, Switch, Select, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const drawerWidth = 240;

const columns = [
    { id: 'name', label: 'NAME', minWidth: 100 },
    {
        id: 'mobile',
        label: 'MOBILE NO',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(name, mobile,) {
    return { name, mobile };
}

const rows = [
    createData('Pallavi Kale', '8977889898', 'pallavi@gmail.com'),
    createData('Rudrayani Tidake', '67848484848', 'rudra@gmail.com'),
    createData('Kajal Bhagavat', '7833674758', 'kajal@gmail.com'),
    createData('Shweta Wankhade', '7484949490', 'shweta@gmail.com'),
    createData('Rutuja Pingle', '94848590332', 'rutuja@gmail.com'),
    createData('Sharayu Shende', '8977889898', 'sharayu@gmail.com'),
    createData('Gunjun Kale', '64748897867', 'gunjan@gmail.com'),
    createData('Pallavi Kale', '8977889898', 'pallavi@gmail.com'),
    createData('Rudrayani Tidake', '67848484848', 'rudra@gmail.com'),
    createData('Kajal Bhagavat', '7833674758', 'kajal@gmail.com'),
    createData('Shweta Wankhade', '7484949490', 'shweta@gmail.com'),
    createData('Rutuja Pingle', '94848590332', 'rutuja@gmail.com'),
    createData('Sharayu Shende', '8977889898', 'sharayu@gmail.com'),
    createData('Gunjun Kale', '64748897867', 'gunjan@gmail.com'),
];


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        backgroundColor: 'white',
    },
    input: {
        height: 35
    },
    vitalinputs: {
        height: 10
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
        padding: theme.spacing(2),
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
        margin: theme.spacing(1),
        minWidth: 220,

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
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginBottom: 10,
        marginTop: 10
    },
    textField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        // padding: 8,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 11,
        textAlign: 'center',
        width: '100%'
    },
    vitaltextField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        // padding: 8,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 11,
        textAlign: 'center',
        width: '100%'
    },
    btnbookappointment: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 25,
        fontSize: 11

    },
    btnreset: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 25,
        width: 130,
        fontSize: 11

    },

}));


export default function DoctorBookAppointment() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [values, setValues] = React.useState([
        "Dr. Pradeep Musale",
        "Dr. Kirti Virnak",

    ]);

    const [selected, setSelected] = React.useState("Dr. Pradeep Musale");

    function handleChangedDropDown(event) {
        setSelected(event.target.value);
    }


    const [appselected, setAppSelected] = React.useState("");

    function handleChangedAppointmentChannel(event) {
        setAppSelected(event.target.value);
    }

    const [previousappselected, setPreviousAppSelected] = React.useState("");

    function handleChangedPreviousAppointment(event) {
        setPreviousAppSelected(event.target.value);
    }


    const [appvalues, setAppValues] = React.useState([
        "Walk In",
        "Online",
        "By Web"

    ]);


    const [timevalues, setTimeValues] = React.useState([
        "08:00",
        "09:00",

    ]);
    const [timeselected, setTimeSelected] = React.useState("");

    function handleChangedTime(event) {
        setTimeSelected(event.target.value);
    }

    const handleGoBack = () => {
        history.push("/DoctorHome");
    };

    function renderRow(props) {
        const { index, style } = props;

        return (
            // <List>
            <ListItem button style={style} key={index} >
                <ListItem >
                    <ListItemText
                        style={{ borderBottom: '1px solid #F0F0F0' }}
                        primary={`Title : Regular Checkup`}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component={'span'}
                                    variant={"body2"}
                                    color="textPrimary"
                                >
                                    {`Date : 2021-09-11`}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider />
            </ListItem>
            // </List>
        );
    }

    renderRow.propTypes = {
        index: PropTypes.number.isRequired,
        style: PropTypes.object.isRequired,
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
                        Book Appointment
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 5 }}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <center> <SearchIcon className={classes.searchIcon} />
                                        <InputBase
                                            placeholder="Search by Name/Email"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,

                                            }}
                                            variant='outlined'
                                            inputProps={{ 'aria-label': 'search' }}
                                            style={{ borderRadius: 15 }}
                                        > </InputBase> </center>
                                </Grid>

                                <Grid item xs={6} style={{ alignSelf: 'center' }}>
                                    <Button className={classes.btnview} size="small" style={{ float: 'right', fontSize: 11, textAlign: 'center' }}>View Profile</Button>
                                </Grid>


                            </Grid>
                            {/* <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper}> */}
                            <TableContainer style={{ paddingTop: 20 }} >
                                <Table className={classes.tbl} size="small" stickyHeader aria-label="sticky table" style={{ borderRadius: 5 }}>
                                    <TableHead style={{}}>
                                        <TableRow style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{
                                                        minWidth: column.minWidth,
                                                        backgroundColor: '#78B088',
                                                        color: '#fff',
                                                        fontFamily: '"Poppins", san-serif;',
                                                        fontStyle: 'normal',
                                                        fontWeight: 600,
                                                        overflow: 'hidden',
                                                        whiteSpace: 'nowrap',
                                                        textOverflow: 'ellipsis',
                                                    }}

                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}

                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}  >
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align} style={{
                                                                    color: '#2C7FB2',
                                                                    fontFamily: '"Poppins", san-serif;',
                                                                    fontStyle: 'normal',
                                                                    fontWeight: 600,
                                                                    overflow: 'hidden',
                                                                    whiteSpace: 'nowrap',
                                                                    textOverflow: 'ellipsis',
                                                                    justifyContent: 'center',
                                                                    fontSize: 12
                                                                }}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}

                                                                </TableCell>
                                                            );
                                                        })}

                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                            {/* </Paper> */}
                            <Divider style={{ padding: '5px', borderTop: '1px solid #F0F0F0', backgroundColor: '#fff', paddingBottom: 10 }} />

                            <Typography variant="h7" noWrap={true} style={{
                                fontFamily: '"Poppins", san-serif;',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                color: '#00318B',
                                marginLeft: 4,

                            }} >
                                Profile Details
                            </Typography>

                            <Grid container spacing={3} style={{ paddingTop: theme.spacing(3) }}>
                                <Grid item xs={12} sm={4}>
                                    <Paper elevation={0} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <center> <Avatar style={{ align: 'center', height: '50px', width: '50px' }}><AccountCircle /></Avatar> </center>
                                        <Divider style={{ paddingTop: '10px', backgroundColor: '#fff' }} />
                                        <Typography variant="h7" noWrap={true} style={{
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            padding: theme.spacing(2),
                                            color: 'gray'
                                        }}
                                        >
                                            Pallavi Kale
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Paper elevation={0} style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 400,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: 'gray',
                                    }}>
                                        Location: <Typography variant="h7" noWrap={true} style={{
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            padding: theme.spacing(2),
                                            color: 'gray',
                                            fontSize: 12,
                                        }}
                                        >
                                            Wakad, Pune
                                        </Typography>
                                        <Divider style={{ paddingTop: '10px', backgroundColor: '#fff' }} />
                                        Contact: <Typography variant="h7" noWrap={true} style={{
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            padding: theme.spacing(2),
                                            color: 'gray',
                                            fontSize: 12,
                                        }}
                                        >
                                            8790332435
                                        </Typography>
                                        <Divider style={{ paddingTop: '10px', backgroundColor: '#fff' }} />
                                        Email Id: <Typography variant="h7" noWrap={true} style={{
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            padding: theme.spacing(2),
                                            color: 'gray',
                                            fontSize: 12,
                                        }}
                                        >
                                            pallavikale@gmail.com
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>



                    <Grid item xs={12} sm={8} >
                        <Paper className={classes.paper} elevation={6} style={{ marginLeft: 25, marginRight: 20 }}>
                            <Grid container spacing={3} style={{ backgroundColor: '#fff', borderBlockEnd: '1px solid #F0F0F0' }}>
                                <Grid item xs={12} sm={6} style={{ borderRight: '1px solid #F0F0F0' }}>
                                    <Typography variant="h7" noWrap={true} style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        padding: theme.spacing(2),
                                        color: '#00318B'
                                    }}
                                    >
                                        Details
                                    </Typography>

                                    <div style={{ paddingTop: 10 }}>
                                        <FormControl variant="outlined" size="small" className={classes.formControl} >
                                            <InputLabel htmlFor="outlined-age-native-simple">Doctor</InputLabel>
                                            <Select
                                                className={classes.textField}
                                                size="small"
                                                native
                                                value={selected}
                                                onChange={handleChangedDropDown}
                                                label="doctor"
                                                inputProps={{
                                                    name: 'doctor',
                                                    id: 'outlined-doctor-native-simple',
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>Dr. Pradeep Musale</option>
                                                <option value={2}>Dr. Kirti Virnak</option>

                                            </Select>
                                        </FormControl>

                                        <Divider style={{ opacity: 0 }} />
                                        <FormControl variant="outlined" size="small" className={classes.formControl} >
                                            <InputLabel htmlFor="outlined-age-native-simple">Appointment Channel</InputLabel>
                                            <Select
                                                className={classes.textField}
                                                native
                                                value={appselected}
                                                onChange={handleChangedAppointmentChannel}
                                                label="appointment"
                                                inputProps={{
                                                    name: 'appointmentchannel',
                                                    id: 'outlined-appointment-native-simple',
                                                }}
                                                style={{ width: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>Walk In</option>
                                                <option value={2}>Online</option>
                                                <option value={2}>By Web</option>

                                            </Select>
                                        </FormControl>
                                        <Divider style={{ opacity: 0 }} />
                                        <FormControl variant="outlined" className={classes.formControl} >
                                            <TextField
                                                InputProps={{
                                                    className: classes.input
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                id="outlined-basic" size="small" label="Appointment Title" variant="outlined" />
                                        </FormControl>
                                    </div>
                                </Grid>


                                <Grid item xs={12} sm={6} >
                                    <Typography variant="h7" noWrap={true} style={{

                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        padding: theme.spacing(2),
                                        color: '#00318B'

                                    }}
                                    >
                                        Appointment Details
                                    </Typography>
                                    <Grid container style={{ paddingTop: 10 }}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 14, fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                color: '#707070',
                                            }}>
                                                John Wick
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                float: 'right', fontSize: 14, fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                color: '#707070',
                                            }}>
                                                78922453672
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container style={{ paddingTop: 10 }}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" noWrap={true} style={{
                                                fontSize: 15, fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                color: '#707070',
                                            }}>
                                                Walk-In Appointment
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="checkedB"
                                                        color='primary'
                                                        style={{ color: '#2C7FB2', float: 'right' }}
                                                    />
                                                }
                                                style={{ color: '#2C7FB2', float: 'right', marginTop: '-10px', paddingRight: 20 }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{ paddingTop: 2 }}>
                                        <Grid item xs={12} sm={4} style={{
                                            marginTop: 10,
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            color: '#707070',
                                        }}>
                                            Schedule
                                        </Grid>
                                        <Grid item xs={12} sm={4} style={{ marginLeft: '-30px' }}>
                                            <FormControl variant="outlined" size="small" className={classes.formControl}>
                                                <InputLabel htmlFor="outlined-age-native-simple">Time</InputLabel>
                                                <Select
                                                    className={classes.textField}
                                                    native
                                                    value={timeselected}
                                                    onChange={handleChangedTime}
                                                    label="time"
                                                    inputProps={{
                                                        name: 'time',
                                                        id: 'outlined-appointment-native-simple',
                                                    }}

                                                    style={{ width: '40%' }}

                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={1}>08:00</option>
                                                    <option value={2}>09:00</option>
                                                    <option value={2}>10:00</option>
                                                    <option value={2}>11:00</option>
                                                    <option value={2}>12:00</option>
                                                </Select>

                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={4} style={{ marginLeft: '-10px' }}>
                                            <FormControl variant="outlined" size="small" className={classes.formControl} style={{ paddingRight: 20 }}>
                                                <TextField
                                                    InputProps={{
                                                        className: classes.input
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true
                                                    }}
                                                    variant="outlined"
                                                    id="date"
                                                    label=""
                                                    type="date"
                                                    size="small"
                                                    style={{ width: '80%', fontSize: 8 }}
                                                />
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} >
                                        <FormControl variant="outlined" size="small" className={classes.formControl} >
                                            <InputLabel htmlFor="outlined-age-native-simple">Previous Appointments (If Any)</InputLabel>
                                            <Select
                                                className={classes.textField}
                                                native
                                                value={previousappselected}
                                                onChange={handleChangedPreviousAppointment}
                                                label="Previous History"
                                                inputProps={{
                                                    name: 'appointmentchannel',
                                                    id: 'outlined-appointment-native-simple',
                                                }}
                                                style={{ width: '165%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={1}>Sonography</option>
                                                <option value={2}>Regular Checkup</option>
                                                <option value={2}>Blood Test</option>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    {/* <Grid item xs={12}>
                                        <div>
                                            <FixedSizeList height={90} width={300} itemSize={60} itemCount={6} style={{ color: '#00318B' }} >
                                                {renderRow}
                                            </FixedSizeList>
                                        </div>
                                    </Grid> */}

                                </Grid>

                            </Grid>


                            <Grid item xs={12} sm={8} style={{ paddingTop: 25, }}>
                                <Typography variant="h7" noWrap={true} style={{

                                    fontFamily: '"Poppins", san-serif;',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    padding: theme.spacing(2),
                                    color: '#00318B'
                                }}
                                >
                                    Vital Information
                                </Typography>

                            </Grid>

                            <Grid container spacing={2} style={{ padding: 10 }}>
                                <Grid item xs={12} style={{ justifyContent: 'center' }}>
                                    <Grid container spacing={2} style={{ padding: 10 }}>
                                        <Grid item xs={2}>
                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="BP"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"

                                            />
                                        </Grid>
                                        <Grid item xs={2} >

                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="Temp"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="Height"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2} >

                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="Weight"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="SPO2"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={2} >
                                            <TextField
                                                InputProps={{
                                                    className: classes.vitalinputs,
                                                    className: classes.vitaltextField
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                                label="Pulse Rate"
                                                id="outlined-size-small"
                                                variant="outlined"
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} style={{ paddingTop: 10 }}>
                                        <FormControl variant="outlined" size="small" className={classes.formControl} style={{ marginLeft: 20, height: '20px', width: '90%' }}>

                                            <TextField
                                                variant="outlined"
                                                label="Reason"
                                                InputProps={{
                                                    className: classes.input
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                            />
                                        </FormControl>

                                    </Grid>

                                    <Grid item xs={12} sm={6} style={{ paddingTop: 10 }}>
                                        <FormControl variant="outlined" size="small" className={classes.formControl} style={{ height: '20px', width: '90%' }}>

                                            <TextField
                                                variant="outlined"
                                                label="Note for Doctor"
                                                InputProps={{
                                                    className: classes.input
                                                }}
                                                InputLabelProps={{
                                                    shrink: true
                                                }}

                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <Grid container xs={12} style={{ paddingTop: 20 }}>
                                    <Grid item xs={12} sm={6}>
                                        <center>
                                            <Button className={classes.btnreset} >Reset</Button>
                                        </center>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <center>
                                            <Button className={classes.btnbookappointment}>Book Appointment</Button>
                                        </center>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Paper>

                    </Grid>


                </Grid>
            </Grid> {/* main grid */}

        </div >
    );
}
