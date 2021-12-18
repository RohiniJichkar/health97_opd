import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, TextField, Typography, Button, Slide, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';


const drawerWidth = 240;

const columns = [
    { id: 'name', label: 'Service Name', minWidth: 100 },
    {
        id: 'price',
        label: 'Price',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'discount',
        label: 'Discount',
        minWidth: 50,
        align: 'center',
    },
];

function createData(name, price, discount) {
    return { name, price, discount };
}

const rows = [
    createData('Sonography', '1000', '10%'),
    createData('Colposcopy', '2000', '20%'),
    createData('Follicular Monitoring', '5000', '10%'),
    createData('Blood Test', '200', '2%'),
    createData('ECG', '2000', '10%'),
    createData('X-RAY', '1000', '20%'),
    createData('Sonography', '1000', '10%'),
    createData('Colposcopy', '2000', '20%'),
    createData('Follicular Monitoring', '5000', '10%'),
    createData('Blood Test', '200', '2%'),
    createData('ECG', '2000', '10%'),
    createData('X-RAY', '1000', '20%'),
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
        fontFamily: 'Poppins',
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
        fontSize: 14,
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
        float: 'left'
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
        color: '#707070',
        border: '1px solid lightgray',
        borderRadius: 20,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 13,
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
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
    },
    btnCancle: {
        backgroundColor: '#2C7FB2 !important',
        color: '#fff !important',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
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
        fontSize: '12px'
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DoctorAddServices() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
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
        history.push("/DoctorClinicServices");
    };

    const [opendeletemodal, setOpenDeletemodal] = React.useState(false);

    const handleClickOpenDeletemodal = () => {
        setOpenDeletemodal(true);
    };

    const handleCloseDeletemodal = () => {
        setOpenDeletemodal(false);
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
                        Add Services
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 10 }}>
                    <Grid item xs={12} sm={4} >
                        <Paper className={classes.paper} elevation={6} style={{ paddingBottom: 0 }}>
                            <Typography variant="h7" noWrap={true} style={{

                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                padding: theme.spacing(2),
                                color: '#00318B',
                                fontSize: 16
                            }}
                            >
                                Add Details
                            </Typography>


                            <div style={{ paddingTop: 10 }}>

                                <center>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Service Name" variant="outlined" />
                                </center>
                                <center>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Category" variant="outlined" />
                                </center>
                                <center>
                                    <TextField className={classes.textField} id="outlined-basic" type="number" size="small" label="Cost" variant="outlined" />
                                </center>
                                <center>
                                    <TextField className={classes.textField} id="outlined-basic" type="number" size="small" label="Discount" variant="outlined" />
                                </center>
                                <center>
                                    <TextField className={classes.textField} multiline={true}
                                        rows={2}
                                        rowsMax={2} id="outlined-basic" size="small" label="Description" variant="outlined"
                                    />
                                </center>
                                <div style={{ marginLeft: 10 }}>
                                    <input type="file" id="serviceimage" style={{ color: '#000' }} />
                                </div>
                            </div>

                            <Grid container style={{padding: 12}}>
                                <Grid xs={12} sm={6}>
                                    <Button className={classes.btnregister} style={{ float: 'right', marginRight: 20 }}>
                                        Cancle
                                    </Button>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <Button className={classes.btnregister} >Add Service</Button>
                                </Grid>
                            </Grid>
                          
                        </Paper>

                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <Paper elevation={6} className={classes.paper} style={{ marginLeft: 25, marginRight: 20 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <center> <SearchIcon className={classes.searchIcon} />
                                        <InputBase
                                            placeholder="Search by Name/City"
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
                                    <Button className={classes.btnview} size="small" style={{ float: 'right', fontSize: 11, textAlign: 'center' }}>View Service</Button>
                                </Grid>


                            </Grid>
                            {/* <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper}> */}
                            <TableContainer style={{ paddingTop: 10 }} >
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
                                            <TableCell style={{

                                                backgroundColor: '#78B088',
                                                color: '#fff',
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                paddingLeft: 75,

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
                                                                    fontFamily: 'Poppins',
                                                                    fontStyle: 'normal',
                                                                    fontWeight: 600,
                                                                    overflow: 'hidden',
                                                                    whiteSpace: 'nowrap',
                                                                    textOverflow: 'ellipsis',
                                                                    justifyContent: 'center',
                                                                    fontSize: 13
                                                                }}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}

                                                                </TableCell>
                                                            );
                                                        })}
                                                        <TableCell >
                                                            <center>
                                                                <Button onClick={handleClickOpenDeletemodal} color="primary" size="small"><DeleteIcon /></Button>
                                                            </center>
                                                        </TableCell>
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
                </Grid>


                {/* for Delete User */}

                <Dialog
                    open={opendeletemodal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseDeletemodal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{ fontFamily: 'Poppins', fontWeight: 600, color: '#00318B' }}>{"Are you sure ?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description" style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#707070' }}>
                            Do you want to Delete Service?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{ marginTop: 20 }}>
                        <Button className={classes.btnregister} onClick={handleCloseDeletemodal} style={{ width: 100 }} >
                            No
                        </Button>
                        <Button className={classes.btnregister} onClick={handleCloseDeletemodal} style={{ width: 100 }}>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>


            </Grid> {/* main grid */}

        </div >
    );
}
