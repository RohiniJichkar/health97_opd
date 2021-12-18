import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Switch, FormControlLabel, Select, InputLabel, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';


const drawerWidth = 240;

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    {
        id: 'mobile',
        label: 'Mobile No',
        minWidth: 50,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'email',
    //     label: 'Email',
    //     minWidth: 50,
    //     align: 'right',
    // },
];

function createData(name, mobile) {
    return { name, mobile };
}

const rows = [
    createData('Pradeep Musale', '90334567893',),
    createData('Kirti Virnak', '9877234561',),
    createData('Akshay Joshi', '8799034567'),
    createData('Vinay Jichkar', '9012345678'),
    createData('Kadir Pathan', '7890123456'),
    createData('Ashwin Bagul', '8823123456'),
    createData('Manisha Chaudhari', '8922345678'),
    createData('Radha Pingle', '9912786453'),
    createData('Raj Varma', '8934526789'),
    createData('Kausturi Mahatme', '7822364785'),
    createData('Shweta Wankhade', '8766456372'),
    createData('Piyush Umale', '8523448946'),
];


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
    griditem: {
        color: '#2C7FB2',
    },
    paperServices: {
        padding: theme.spacing(1),
        color: '#00318B',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'center',

    },
    gridServices: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,

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
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        color: '#707070'
    },
    btnview: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
    },
    inputFields: {
        [`& fieldset`]: {
            borderRadius: 25,
        },
        width: 300,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    groupreports: {
        height: 140,
        width: 250,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#00318B',
        paddingTop: 50,
        borderRadius: 20,
        float: 'right'
    },
    btnUpload: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginBottom: 10,
        marginTop: 20
    },
    textField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        padding: 8,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'center',
        width: '100%'
    },
    facilitiesInput: {
        fontSize: 16,
        color: '#00318B !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        padding: 2
    },
    description: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        height: 145,
        color: 'gray',
        border: '1px solid #F0F0F0',
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
        fontSize: '11px'
    },
    formControlForm: {
        paddingBottom: theme.spacing(1.2),

    },
    textFieldForm: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 8,
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DoctorHomeVisitors() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [selectedValue, setSelectedValue] = useState('');
    const [maxWidth, setMaxWidth] = React.useState('md');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleGoBack = () => {
        history.push("/DoctorHome");
    };

    const handleHomeVisitRequest = () => {
        history.push("/DoctorHomeVisitRequest");
    };

    const [openmodal, setOpenmodal] = React.useState(false);

    const handleClickOpenmodal = () => {
        setOpenmodal(true);
    };

    const handleClosemodal = () => {
        setOpenmodal(false);
    };


    const [openeditmodal, setOpenEditmodal] = React.useState(false);

    const handleClickOpenEditmodal = () => {
        setOpenEditmodal(true);
    };

    const handleCloseEditmodal = () => {
        setOpenEditmodal(false);
    };

    const [opendeletemodal, setOpenDeletemodal] = React.useState(false);

    const handleClickOpenDeletemodal = () => {
        setOpenDeletemodal(true);
    };

    const handleCloseDeletemodal = () => {
        setOpenDeletemodal(false);
    };


    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeAllDays = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [statemon, setStateMon] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeMonday = (event) => {
        setStateMon({ ...state, [event.target.name]: event.target.checked });
    };

    const [statetue, setStateTue] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeTuesday = (event) => {
        setStateTue({ ...state, [event.target.name]: event.target.checked });
    };

    const [statewed, setStateWed] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeWednesday = (event) => {
        setStateWed({ ...state, [event.target.name]: event.target.checked });
    };
    const [statethu, setStateThu] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeThursday = (event) => {
        setStateThu({ ...state, [event.target.name]: event.target.checked });
    };

    const [statefri, setStateFri] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeFriday = (event) => {
        setStateFri({ ...state, [event.target.name]: event.target.checked });
    };
    const [statesat, setStateSat] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeSaturday = (event) => {
        setStateSat({ ...state, [event.target.name]: event.target.checked });
    };

    const [statesun, setStateSun] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangeSunday = (event) => {
        setStateSun({ ...state, [event.target.name]: event.target.checked });
    };

    const [category, setCategory] = React.useState("");

    function handleChangedCategory(event) {
        setCategory(event.target.value);
    }

    const [fromtime, setFromTime] = React.useState("");

    function handleChangedFrom(event) {
        setFromTime(event.target.value);
    }

    const [totime, setToTime] = React.useState("");

    function handleChangedTo(event) {
        setToTime(event.target.value);
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
                        Home Visitors
                        <Button className={classes.btnregister} onClick={handleClickOpenmodal} style={{ float: 'right', marginRight: 20, fontFamily: 'Poppins', fontSize: 12, width: 160 }}>Add New Home Visitor</Button>
                        <Button className={classes.btnregister} onClick={handleHomeVisitRequest} style={{ float: 'right', marginRight: 20, fontFamily: 'Poppins', fontSize: 12, width: 160 }}>Home Visitor Requests</Button>
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 10 }}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <center> <SearchIcon className={classes.searchIcon} />
                                        <InputBase
                                            placeholder="Search by Name"
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
                                    <Button className={classes.btnview} size="small" style={{ float: 'right', fontSize: 11, textAlign: 'center' }}>Search</Button>
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
                                                        fontFamily: 'Poppins',
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
                                                                    fontFamily: 'Poppins',
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


                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={8} >
                        <Paper className={classes.paper} elevation={6} style={{ marginLeft: 25, marginRight: 20 }}>
                            <Typography variant="h6" noWrap={true} style={{
                                fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                fontStyle: 'normal',

                            }}>
                                Profile
                            </Typography>
                            <center>
                                <div style={{ paddingBottom: 5 }}>
                                    <img src="Pallavi Kale.jpg" style={{ borderRadius: 50, height: 80 }}></img>
                                </div>

                                <Typography variant="h6" noWrap={true} style={{
                                    fontSize: 16,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: '#707070',
                                    fontWeight: 600
                                }}>
                                    Pallavi Kale
                                </Typography>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontSize: 14,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: '#707070',
                                    fontWeight: 400
                                }}>
                                    BAMS/MS
                                </Typography>
                                <Grid container xs={12} style={{ paddingTop: 15 }}>
                                    <Grid item xs={3} style={{ border: '1px solid #F0F0F0', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: "Poppins" }}>
                                            Mobile Number
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            9095009797
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ border: '1px solid #F0F0F0', borderLeft: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            From
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            08:00
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ border: '1px solid #F0F0F0', borderLeft: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            To
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            21:00
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ border: '1px solid #F0F0F0', borderLeft: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            Email Id
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins', marginLeft: 10, marginRight: 10 }}>
                                            pallavi@rajyugsolution.com
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container xs={12}>
                                    <Grid item xs={6} style={{ border: '1px solid #F0F0F0', borderTop: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            Address
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins', marginLeft: 10, marginRight: 10 }}>
                                            8th floor, City Avenue, Mumbai-Banglore Highway, Wakad, Pune, 411007
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ border: '1px solid #F0F0F0', borderLeft: '0px', borderTop: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            Availability
                                        </Typography>
                                        <Grid container>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Mon
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Tue
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Wed
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Thu
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Fri
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Sat
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20, color: '#707070', fontFamily: 'Poppins' }}>
                                                Sun
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    No
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1} style={{ marginLeft: 20 }}>
                                                <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                    No
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>



                                <Grid container xs={12} style={{ marginTop: 10 }}>
                                    <Grid item sm={6} >
                                        <Button className={classes.btnregister} onClick={handleClickOpenDeletemodal} style={{ float: 'right', marginRight: 20 }}>Delete</Button>

                                    </Grid>
                                    <Grid item sm={6} >
                                        <Button className={classes.btnregister} onClick={handleClickOpenEditmodal} style={{ float: 'left', marginLeft: 20 }}>Edit</Button>

                                    </Grid>
                                </Grid>

                            </center>
                        </Paper>

                    </Grid>
                </Grid>


                {/* For add new visitor form */}

                <Dialog
                    open={openmodal}
                    onClose={handleClosemodal}
                    maxWidth={maxWidth}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, color: '#2C7FB2' }}>{"Add New Home Visitor"}
                        <IconButton edge="start" color="inherit" onClick={handleClosemodal} aria-label="close" style={{ float: 'right', color: '#2C7FB2', backgroundColor: '#F0F0F0' }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Grid container>
                                <Grid item xs={5} style={{ borderRight: '1px solid #F0F0F0', marginLeft: 10 }}>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                        fontStyle: 'normal',

                                    }}>
                                        Details
                                    </Typography>

                                    <div style={{ marginTop: 13 }}>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" size="small" label="First Name" variant="outlined" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" label="Last Name" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='number' label="Mobile No" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='email' label="Email ID" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} multiline rows={2} rowsMax={4} id="outlined-basic" type='text' label="Address" variant="outlined" size="small" style={{ width: '150%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <Grid container>
                                            <Grid item xs={6} >
                                                <FormControl variant="outlined" className={classes.formControlForm} >
                                                    <TextField className={classes.textFieldForm} id="outlined-basic" type="text" label="Education" variant="outlined" size="small" style={{ width: '80%' }} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%', marginLeft: '-25px' }} >
                                                    <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='large'
                                                        native
                                                        value={category}
                                                        onChange={handleChangedCategory}
                                                        label="Category"
                                                        inputProps={{
                                                            name: 'category',
                                                            id: 'outlined-category-native-simple',
                                                        }}
                                                        style={{ width: '80%', fontSize: 14, marginTop: '-7px' }}
                                                    >
                                                        <option aria-label="None" value="" />
                                                        <option value={1}>Gynecologist</option>
                                                        <option value={2}>Orthopedist</option>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container style={{ marginLeft: 30 }}>
                                        <Typography variant="h6" noWrap={true} style={{
                                            fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                        }}>
                                            Availability
                                        </Typography>
                                        <Grid container style={{ marginTop: 20 }}>
                                            <Grid item xs={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    All Days
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={state.checkedB}
                                                            onChange={handleChangeAllDays}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#78B088', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#78B088', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Monday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Tuesday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Wednesday
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statemon.checkedB}
                                                            onChange={handleChangeMonday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statetue.checkedB}
                                                            onChange={handleChangeTuesday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statewed.checkedB}
                                                            onChange={handleChangeWednesday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Thrusday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Friday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Saturday
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statethu.checkedB}
                                                            onChange={handleChangeThursday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statefri.checkedB}
                                                            onChange={handleChangeFriday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statesat.checkedB}
                                                            onChange={handleChangeSaturday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <center>
                                                    <Typography variant="h6" noWrap={true} style={{
                                                        fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        textAlign: 'center',
                                                        justifyContent: 'center',
                                                        fontWeight: 600
                                                    }}>
                                                        Sunday
                                                    </Typography>
                                                </center>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <center>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={statesun.checkedB}
                                                                onChange={handleChangeSunday}
                                                                name="checkedB"
                                                                color='primary'
                                                                style={{
                                                                    color: '#2C7FB2',
                                                                }}
                                                            />
                                                        }
                                                        style={{ color: '#2C7FB2', float: 'center', marginLeft: 10 }}
                                                    />
                                                </center>
                                            </Grid>
                                        </Grid>

                                        <Typography variant="h6" noWrap={true} style={{
                                            fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                        }}>
                                            Timings
                                        </Typography>

                                        <Grid container style={{ marginTop: 10 }}>
                                            <Grid item xs={2}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600
                                                }}>
                                                    From
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='medium'
                                                        native
                                                        value={fromtime}
                                                        onChange={handleChangedFrom}
                                                        inputProps={{
                                                            name: 'fromtime',
                                                            id: 'outlined-from-time-native-simple',
                                                        }}
                                                        style={{ width: '50%', fontSize: 12 }}
                                                    >
                                                        <option aria-label="None" value='' />
                                                        <option value={1}>08:00</option>
                                                        <option value={2}>09:00</option>
                                                        <option value={3}>10:00</option>

                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    To
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='medium'
                                                        native
                                                        value={totime}
                                                        onChange={handleChangedTo}
                                                        inputProps={{
                                                            name: 'totime',
                                                            id: 'outlined-to-time-native-simple',
                                                        }}
                                                        style={{ width: '50%', fontSize: 12 }}
                                                    >
                                                        <option aria-label="None" value='' />
                                                        <option value={1}>08:00</option>
                                                        <option value={2}>09:00</option>
                                                        <option value={3}>10:00</option>

                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={12} style={{ marginTop: 20 }}>
                                <Grid item sm={6} >
                                    <Button className={classes.btnregister} onClick={handleClosemodal} style={{ float: 'right', marginRight: 20 }}>Cancel</Button>
                                </Grid>
                                <Grid item sm={6} >
                                    <Button className={classes.btnregister} onClick={handleClosemodal} style={{ float: 'left', marginLeft: 20 }}>Register</Button>
                                </Grid>
                            </Grid>

                        </DialogContentText>
                    </DialogContent>

                </Dialog>



                {/* For Edit Visitor Details */}

                <Dialog
                    open={openeditmodal}
                    onClose={handleCloseEditmodal}
                    maxWidth={maxWidth}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, color: '#2C7FB2' }}>{"Edit Details"}
                        <IconButton edge="start" color="inherit" onClick={handleCloseEditmodal} aria-label="close" style={{ float: 'right', color: '#2C7FB2', backgroundColor: '#F0F0F0' }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Grid container>
                                <Grid item xs={5} style={{ borderRight: '1px solid #F0F0F0', marginLeft: 10 }}>
                                    <Typography variant="h6" noWrap={true} style={{
                                        fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                        fontStyle: 'normal',

                                    }}>
                                        Details
                                    </Typography>

                                    <div style={{ marginTop: 13 }}>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" size="small" label="First Name" variant="outlined" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" label="Last Name" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='number' label="Mobile No" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} id="outlined-basic" type='email' label="Email ID" variant="outlined" size="small" style={{ width: '140%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant="outlined" className={classes.formControlForm}  >
                                            <TextField className={classes.textFieldForm} multiline rows={2} rowsMax={4} id="outlined-basic" type='text' label="Address" variant="outlined" size="small" style={{ width: '150%' }} />
                                        </FormControl>
                                    </div>
                                    <div>
                                        <Grid container>
                                            <Grid item xs={6} >
                                                <FormControl variant="outlined" className={classes.formControlForm} >
                                                    <TextField className={classes.textFieldForm} id="outlined-basic" type="text" label="Education" variant="outlined" size="small" style={{ width: '80%' }} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%', marginLeft: '-25px' }} >
                                                    <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='large'
                                                        native
                                                        value={category}
                                                        onChange={handleChangedCategory}
                                                        label="Category"
                                                        inputProps={{
                                                            name: 'category',
                                                            id: 'outlined-category-native-simple',
                                                        }}
                                                        style={{ width: '80%', fontSize: 14, marginTop: '-7px' }}
                                                    >
                                                        <option aria-label="None" value="" />
                                                        <option value={1}>Gynecologist</option>
                                                        <option value={2}>Orthopedist</option>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container style={{ marginLeft: 30 }}>
                                        <Typography variant="h6" noWrap={true} style={{
                                            fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                        }}>
                                            Availability
                                        </Typography>
                                        <Grid container style={{ marginTop: 20 }}>
                                            <Grid item xs={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    All Days
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={state.checkedB}
                                                            onChange={handleChangeAllDays}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#78B088', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#78B088', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Monday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Tuesday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Wednesday
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statemon.checkedB}
                                                            onChange={handleChangeMonday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statetue.checkedB}
                                                            onChange={handleChangeTuesday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statewed.checkedB}
                                                            onChange={handleChangeWednesday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Thrusday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Friday
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    Saturday
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statethu.checkedB}
                                                            onChange={handleChangeThursday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statefri.checkedB}
                                                            onChange={handleChangeFriday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={statesat.checkedB}
                                                            onChange={handleChangeSaturday}
                                                            name="checkedB"
                                                            color='primary'
                                                            style={{ color: '#2C7FB2', float: 'right' }}
                                                        />
                                                    }
                                                    style={{ color: '#2C7FB2', float: 'right', paddingRight: 20 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <center>
                                                    <Typography variant="h6" noWrap={true} style={{
                                                        fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        textAlign: 'center',
                                                        justifyContent: 'center',
                                                        fontWeight: 600
                                                    }}>
                                                        Sunday
                                                    </Typography>
                                                </center>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <center>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={statesun.checkedB}
                                                                onChange={handleChangeSunday}
                                                                name="checkedB"
                                                                color='primary'
                                                                style={{
                                                                    color: '#2C7FB2',
                                                                }}
                                                            />
                                                        }
                                                        style={{ color: '#2C7FB2', float: 'center', marginLeft: 10 }}
                                                    />
                                                </center>
                                            </Grid>
                                        </Grid>

                                        <Typography variant="h6" noWrap={true} style={{
                                            fontSize: 18, color: '#00318B', fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                        }}>
                                            Timings
                                        </Typography>

                                        <Grid container style={{ marginTop: 10 }}>
                                            <Grid item xs={2}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600
                                                }}>
                                                    From
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='medium'
                                                        native
                                                        value={fromtime}
                                                        onChange={handleChangedFrom}
                                                        inputProps={{
                                                            name: 'fromtime',
                                                            id: 'outlined-from-time-native-simple',
                                                        }}
                                                        style={{ width: '50%', fontSize: 12 }}
                                                    >
                                                        <option aria-label="None" value='' />
                                                        <option value={1}>08:00</option>
                                                        <option value={2}>09:00</option>
                                                        <option value={3}>10:00</option>

                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 14, color: '#707070', fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 600
                                                }}>
                                                    To
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <FormControl variant="outlined" size="small" className={classes.formControl} style={{ width: '55%' }} >
                                                    <Select
                                                        className={classes.textFieldForm}
                                                        size='medium'
                                                        native
                                                        value={totime}
                                                        onChange={handleChangedTo}
                                                        inputProps={{
                                                            name: 'totime',
                                                            id: 'outlined-to-time-native-simple',
                                                        }}
                                                        style={{ width: '50%', fontSize: 12 }}
                                                    >
                                                        <option aria-label="None" value='' />
                                                        <option value={1}>08:00</option>
                                                        <option value={2}>09:00</option>
                                                        <option value={3}>10:00</option>

                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container xs={12} style={{ marginTop: 20 }}>
                                <Grid item sm={6} >
                                    <Button className={classes.btnregister} onClick={handleCloseEditmodal} style={{ float: 'right', marginRight: 20 }}>Cancel</Button>
                                </Grid>
                                <Grid item sm={6} >
                                    <Button className={classes.btnregister} onClick={handleCloseEditmodal} style={{ float: 'left', marginLeft: 20 }}>Submit</Button>
                                </Grid>
                            </Grid>

                        </DialogContentText>
                    </DialogContent>

                </Dialog>



                {/* for Delete User */}

                <Dialog
                    open={opendeletemodal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDeletemodal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{fontFamily: 'Poppins', fontWeight: 600, color:'#00318B'}}>{"Are you sure ?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{fontFamily: 'Poppins', fontWeight: 400, color:'#707070'}}>
                            Do you want to Delete Home Visitor ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{marginTop: 20}}>
                        <Button  className={classes.btnregister} onClick={handleCloseDeletemodal} style={{width: 100}} >
                            No
                        </Button>
                        <Button  className={classes.btnregister} onClick={handleCloseDeletemodal} style={{width: 100}}>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </Grid> {/* main grid */}

        </div >
    );
}
