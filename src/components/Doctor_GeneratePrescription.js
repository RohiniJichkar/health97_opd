import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, Switch, ButtonGroup, FormControl, TextField, Typography, Button, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { color } from '@mui/system';
import Pdf from '../Prescription_VinayH7B8_38 (1).pdf';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { red } from '@material-ui/core/colors';


const drawerWidth = 240;

const columns = [
    { id: 'name', label: 'Name', minWidth: 60 },
    // {
    //     id: 'medicineid',
    //     label: 'MedicineId',
    //     minWidth: 50,
    //     align: 'left',
    // },

];

function createData(name) {
    return { name };
}

const rows = [
    createData('Pracetemol', 'Paracetemol123'),
    createData('Crossin', 'Crossin345'),
    createData('Dolo 650', 'Dolo890'),
    createData('Pracetemol', 'Paracetemol456'),
    createData('Crossin', 'Crossin123'),
    createData('Dolo 650', 'Dolo567'),
    createData('Pracetemol', 'Paracetemol123'),
    createData('Crossin', 'Crossin345'),
    createData('Dolo 650', 'Dolo890'),
    createData('Pracetemol', 'Paracetemol456'),
    createData('Crossin', 'Crossin123'),
    createData('Dolo 650', 'Dolo567'),
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
    headingAddMedicine: {
        color: '#00318B !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: '16px'
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
        fontWeight: 600,
        textAlign: 'center',
        borderRadius: 28,
        width: 90,
        fontSize: '10px'
    },
    btnCancle: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        textAlign: 'center',
        borderRadius: 28,
        width: 90,
        fontSize: '10px'
    },
    btnPreview: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 150,
        fontSize: '12px'
    },
    btngenerate: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 150,
        fontSize: '12px'
    },
}));


export default function DoctorGeneratePrescription() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [counterbtn, setCounterBtn] = React.useState(0);
    const [counterbtn2, setCounterBtn2] = React.useState(0);
    const [btnColor, setBtnColor] = React.useState('white');
    const [dosestring1, setdosestring1] = React.useState('');
    const [dosestring2, setdosestring2] = React.useState('');
    const [dosestring3, setdosestring3] = React.useState('');
    const [dosestring4, setdosestring4] = React.useState('');

    const handleChangebtnColor1 = (colorcode) => {
        setdosestring1(colorcode);
        // if (colorcode == 'Morning'){
        //     setBtnColor('#2C7FB2');
        // }
    }

    // let btn_class = btnColor.red ? "redButton" : "blackButton";

    const handleIncrement = (event) => {
        setCounterBtn(counterbtn + 1);
    };

    const handleDecrement = (event) => {
        setCounterBtn(counterbtn - 1);
    };

    const handleIncrement2 = (event) => {
        setCounterBtn2(counterbtn2 + 1);
    };

    const handleDecrement2 = (event) => {
        setCounterBtn2(counterbtn2 - 1);
    };

    const onPreviewClick = () => {
        window.open(Pdf);
    }


    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleGoBack = () => {
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
                        }}>
                        <Button style={{ marginLeft: '-20px', backgroundColor: 'white', color: '#2C7FB2', borderRadius: 105, fontSize: '12px' }}> <ArrowBackIcon onClick={handleGoBack} />  </Button>
                        Generate Prescription
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} style={{ marginTop: 1 }}>
                    <Paper elevation={6} className={classes.paper} style={{ padding: 20, paddingBottom: 50 }}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <SearchIcon className={classes.searchIcon} />
                                <InputBase
                                    placeholder="Search by Name"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,

                                    }}
                                    variant='outlined'
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ borderRadius: 15 }}
                                > </InputBase>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button className={classes.btnview} size="small" style={{ fontSize: 12 }}>View</Button>
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
                                        <TableCell style={{
                                            textAlign: 'center',
                                            backgroundColor: '#78B088',
                                            color: '#fff',
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 600,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                        }}>Actions</TableCell>
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
                                                    <TableCell>
                                                        <Button color="primary" size="small" style={{ marginLeft: '50px' }}><AddCircleOutlineIcon style={{ fontSize: 18 }} /> </Button>
                                                        <Button color="primary" size="small" ><RemoveCircleOutlineIcon style={{ fontSize: 18 }} /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Paper>
                </Grid>

                <Grid item xs={12} sm={1}>
                </Grid>


                <Grid item sm={12} sm={6} style={{ marginTop: 1 }} >
                    <Paper elevation={6} className={classes.paper} style={{ padding: 20 }}>
                        <Typography className={classes.headingAddMedicine} variant="h6" noWrap={true}  >
                            Add Medicines
                        </Typography>

                        <Typography variant="h6" noWrap={true} style={{
                            fontStyle: 'normal',
                            fontWeight: 600,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#00318B',
                            fontSize: '16px',
                            marginTop: 10
                        }}>
                            Paracetemol
                        </Typography>

                        <Grid container style={{ marginTop: 10 }} >
                            <Grid item xs={12} sm={2} >
                                <Typography variant="h6" noWrap={true} style={{
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#707070',
                                    fontSize: 12
                                }}>
                                    Days
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={2}>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#707070',
                                    fontSize: 12
                                }}>
                                    Times
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={5}>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    color: '#707070',
                                    fontSize: 12
                                }}>
                                    Dosages
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <Typography variant="h6" noWrap={true} style={{
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    float: 'right',
                                    color: '#707070',
                                    fontSize: 12,
                                }}>
                                    Before Meal
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={2} >

                                <Paper elevation={2} className={classes.paper} style={{ width: 60, height: 35, color: '#707070' }}>
                                    <div style={{ marginTop: 1 }}> {counterbtn} </div>
                                    <div style={{}}>
                                        <button onClick={handleIncrement} size='small' style={{ marginLeft: 20, backgroundColor: 'white', fontSize: 4, width: 30, height: 20, border: '1px solid white', color: '#707070' }}><ArrowDropUpIcon style={{ marginTop: '-60px', }} /></button>
                                    </div>
                                    <div style={{}}>
                                        <button onClick={handleDecrement} size='small' style={{ marginLeft: 20, backgroundColor: 'white', fontSize: 4, width: 30, height: 20, border: '1px solid white', color: '#707070' }}><ArrowDropDownIcon style={{ marginTop: '-90px', }} /></button>
                                    </div>
                                </Paper>

                                {/* <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button onClick={handleIncrement}>+</Button>
                                        <Button disabled>{counterbtn}</Button>
                                        <Button onClick={handleDecrement}>-</Button>
                                    </ButtonGroup> */}

                            </Grid>

                            <Grid item xs={12} sm={2}>

                                <Paper elevation={2} className={classes.paper} style={{ width: 60, height: 35, color: '#707070' }}>
                                    <div style={{ marginTop: 1 }}> {counterbtn2} </div>
                                    <div>
                                        <button onClick={handleIncrement2} size='small' style={{ marginLeft: 20, backgroundColor: 'white', fontSize: 4, width: 30, height: 20, border: '1px solid white', color: '#707070' }}><ArrowDropUpIcon style={{ marginTop: '-60px', }} /></button>
                                    </div>
                                    <div>
                                        <button onClick={handleDecrement2} size='small' style={{ marginLeft: 20, backgroundColor: 'white', fontSize: 4, width: 30, height: 20, border: '1px solid white', color: '#707070' }}><ArrowDropDownIcon style={{ marginTop: '-90px', }} /></button>
                                    </div>
                                </Paper>
                            </Grid>


                            <Grid item xs={5} >
                                {/* <ButtonGroup variant="contained" color="primary" aria-label="contained button group" style={{ marginTop: 5 }} > */}
                                {dosestring1 !== 'Morning' ? <Button onClick={() => setdosestring1('Morning')} variant="contained" color="primary" size='small' style={{ color: 'black', backgroundColor: 'white', fontSize: '12px', marginTop: 5 }}>Morning</Button> :
                                    <Button onClick={() => setdosestring1('')} variant="contained" color="primary" size='small' style={{ color: 'White', backgroundColor: '#2C7FB2', fontSize: '12px', marginTop: 5 }}>Morning</Button>
                                }
                                {dosestring2 !== 'Afternoon' ? <Button onClick={() => setdosestring2('Afternoon')} variant="contained" color="primary" size='small' style={{ color: 'black', backgroundColor: 'white', fontSize: '12px', marginTop: 5 }}>Afternoon</Button> :
                                    <Button onClick={() => setdosestring2('')} variant="contained" color="primary" size='small' style={{ color: 'White', backgroundColor: '#2C7FB2', fontSize: '12px', marginTop: 5 }}>Afternoon</Button>
                                }
                                {dosestring3 !== 'Evening' ? <Button onClick={() => setdosestring3('Evening')} variant="contained" color="primary" size='small' style={{ color: 'black', backgroundColor: 'white', fontSize: '12px', marginTop: 5 }}>Evening</Button> :
                                    <Button onClick={() => setdosestring3('')} variant="contained" color="primary" size='small' style={{ color: 'White', backgroundColor: '#2C7FB2', fontSize: '12px', marginTop: 5 }}>Evening</Button>
                                }
                                {dosestring4 !== 'Night' ? <Button onClick={() => setdosestring4('Night')} variant="contained" color="primary" size='small' style={{ color: 'black', backgroundColor: 'white', fontSize: '12px', marginTop: 5 }}>Night</Button> :
                                    <Button onClick={() => setdosestring4('')} variant="contained" color="primary" size='small' style={{ color: 'White', backgroundColor: '#2C7FB2', fontSize: '12px', marginTop: 5 }}>Night</Button>
                                }
                              
                                {/* </ButtonGroup> */}

                            </Grid>

                            <Grid item xs={12} sm={3} style={{ paddingLeft: 100 }}>
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Grid>

                            <Grid container xs={12} style={{ color: '#707070', marginTop: '10px' }}>
                                <Grid item xs={12} >
                                    <center>
                                        <Button variant="contained" className={classes.btnCancle} style={{ marginRight: 40 }}  >
                                            Cancle
                                        </Button>
                                        <Button variant="contained" className={classes.btnAdd}  >
                                            Add
                                        </Button>
                                    </center>
                                </Grid>
                            </Grid>

                            <Grid container >
                                <Card style={{ width: 700, marginTop: 15, color: '#00318B' }}>
                                    <CardContent >
                                        <Grid container xs={12}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 16, fontFamily: '"Poppins", san-serif;',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                }}>
                                                    Paracetemol
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 13, fontFamily: '"Poppins", san-serif;',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                    float: 'right'
                                                }}>
                                                    Before Meal
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container xs={12} style={{ overflow: 'auto' }}>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                            }}>
                                                Days:
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, float: 'left' }} >
                                                    12
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{ fontSize: 12, fontWeight: 600 }}>
                                                Time:
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12 }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <Button color="primary" size="small" style={{ float: 'right' }}><DeleteIcon style={{ color: '#707070' }} /></Button>
                                            </Grid>
                                        </Grid>
                                        <Grid container xs={12} style={{ overflow: 'auto' }}>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Morning:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }} >
                                                    1
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Afternoon:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Evening:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Night:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, float: 'center' }} >
                                                    1
                                                </Typography>
                                            </Grid>

                                        </Grid>

                                        <Divider style={{ marginTop: 10, border: '1px solid gray' }} />

                                        <Grid container xs={12}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 16, fontFamily: '"Poppins", san-serif;',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                }}>
                                                    Crossin
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant="h6" noWrap={true} style={{
                                                    fontSize: 13, fontFamily: '"Poppins", san-serif;',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                    float: 'right'
                                                }}>
                                                    Before Meal
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid container xs={12} style={{ overflow: 'auto' }}>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                            }}>
                                                Days:
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, float: 'left' }} >
                                                    12
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{ fontSize: 12, fontWeight: 600 }}>
                                                Time:
                                            </Grid>
                                            <Grid item xs={12} sm={1}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12 }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <Button color="primary" size="small" style={{ float: 'right' }}><DeleteIcon style={{ color: '#707070' }} /></Button>
                                            </Grid>
                                        </Grid>
                                        <Grid container xs={12} style={{ overflow: 'auto' }}>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Morning:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }} >
                                                    1
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Afternoon:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Evening:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, textAlign: 'center' }}>
                                                    2
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={1} style={{
                                                fontSize: 12,
                                                fontFamily: '"Poppins", san-serif;',
                                                fontStyle: 'normal',
                                                fontWeight: 600,

                                            }}>
                                                Night:
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography variant="h6" noWrap={true} style={{ fontSize: 12, float: 'center' }} >
                                                    1
                                                </Typography>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid container xs={12} style={{ color: '#707070', marginTop: '10px' }}>
                                <Grid item xs={12} >
                                    <center>
                                        <Button variant="contained" onClick={onPreviewClick} className={classes.btnPreview} style={{ marginRight: 40 }}  >
                                            Generate & Preview
                                        </Button>
                                        <Button variant="contained" className={classes.btngenerate}  >
                                            Generate & Print
                                        </Button>
                                    </center>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid> {/* main grid */}

        </div >
    );
}
