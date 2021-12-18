import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, Slide, Typography, FormControl, Select, TextField, Button, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

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

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DoctorAssignHomeVisitor() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [maxWidth, setMaxWidth] = React.useState('md');

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

    const [opendatemodal, setOpenDatemodal] = React.useState(false);

    const handleClickOpenDatemodal = () => {
        setOpenDatemodal(true);
    };

    const handleCloseDatemodal = () => {
        setOpenDatemodal(false);
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
                        Assign Home Visitor
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 10 }}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <center>
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
                                    </center>
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
                                            Date <EditIcon style={{fontSize : 15}}/>
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            <DateRangeIcon style={{ marginLeft: '-30px' }} onClick={handleClickOpenDatemodal} /> 2021-12-17
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} style={{ border: '1px solid #F0F0F0', borderLeft: '0px', paddingBottom: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 10, fontSize: 14, color: '#707070', fontWeight: 600, fontFamily: 'Poppins' }}>
                                            Time <EditIcon style={{fontSize : 15}}/>
                                        </Typography>
                                        <Typography variant="h6" noWrap={true} style={{ paddingTop: 5, fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            <DateRangeIcon style={{ marginLeft: '-30px' }} onClick={handleClickOpenDatemodal}/> 21:00
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
                                        <Button className={classes.btnregister} style={{ float: 'right', marginRight: 20 }}>Cancel</Button>
                                    </Grid>
                                    <Grid item sm={6} >
                                        <Button className={classes.btnregister} style={{ float: 'left', marginLeft: 20 }}>Assign</Button>
                                    </Grid>
                                </Grid>

                            </center>
                        </Paper>

                    </Grid>
                </Grid>


                {/* for Change Date Time */}

                <Dialog
                    open={opendatemodal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDatemodal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, color: '#00318B' }}>{"Edit Date/Time"}
                        <IconButton edge="start" color="inherit" onClick={handleCloseDatemodal} aria-label="close" style={{ float: 'right', color: '#2C7FB2', backgroundColor: '#F0F0F0' }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#707070' }}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#2C7FB2', fontWeight: 600, fontFamily: 'Poppins', marginLeft: 50 }}>
                                        Date
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.inputFields} id="outlined-basic" type='date' variant="outlined" size="small" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 13, color: '#2C7FB2', fontWeight: 600, fontFamily: 'Poppins', marginLeft: 50, marginTop: 15 }}>
                                        Time
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" size="small" className={classes.formControlForm} style={{ width: '100%', marginTop: 20 }} >
                                        <Select
                                            className={classes.textFieldForm}
                                            size='large'
                                            native

                                            inputProps={{
                                                name: 'start time',
                                                id: 'outlined-start-time-native-simple',
                                            }}
                                            style={{ width: '90%', fontSize: 12 }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={1}>08:00</option>
                                            <option value={2}>09:00</option>
                                            <option value={3}>10:00</option>
                                            <option value={4}>11:00</option>
                                            <option value={5}>12:00</option>

                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <Grid container style={{paddingBottom: 20}}>
                        <Grid xs={12} sm={6}>
                            <Button className={classes.btnregister} onClick={handleCloseDatemodal} style={{ float: 'right', marginRight: 20 }}>
                                Cancle
                            </Button>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Button className={classes.btnregister} onClick={handleCloseDatemodal} autoFocus style={{ float: 'left', marginLeft: 20 }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Dialog>


            </Grid> {/* main grid */}

        </div >
    );
}
