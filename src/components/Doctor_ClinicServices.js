import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, InputLabel, TextField, Typography, Button, Slide, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';


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
        align: 'right',
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
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'center',
        borderRadius: 28,
        width: 130,
        marginBottom: 10,
        marginTop: 20
    },
    textField: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'center',
        width: '70%',
        marginTop: 15
    },
    facilitiesTitle: {
        fontSize: 16,
        color: '#00318B !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        padding: 2
    },
    facilitiesInput: {
        fontSize: 16,
        color: '#00318B !important',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        padding: 2
    },
    description: {
        fontFamily: '"Poppins", san-serif;',
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
        marginTop: 10,
        fontSize: '12px'
    },

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DoctorClinicServices() {
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

    const handleAddServices = () => {
        history.push("/DoctorAddServices");
    };

    const [openeditmodal, setOpenEditmodal] = React.useState(false);


    const handleClickOpenEditmodal = () => {
        setOpenEditmodal(true);
    };

    const handleCloseEditmodal = () => {
        setOpenEditmodal(false);
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
                        Clinic Services
                        <Button className={classes.btnregister} onClick={handleAddServices} style={{ float: 'right', marginRight: 20, width: '150px', fontFamily: 'Poppins', fontSize: 12.5, fontWeight: 400 }}>Add Services</Button>
                    </Typography>
                </Grid>

                <Grid item xs={12} container style={{ marginTop: 10 }}>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} className={classes.paper}>
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
                            <TableContainer style={{ paddingTop: 20 }} >
                                <Table className={classes.tbl} size="small" stickyHeader aria-label="sticky table" style={{ borderRadius: 5 }}>
                                    <TableHead>
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

                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper} elevation={6} style={{ padding: 20, marginLeft: 25, marginRight: 20 }}>
                            <Grid item xs={12}>
                                <Typography variant="h6" noWrap={true}
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#00318B',

                                    }}>
                                    Facility
                                    <Button onClick={handleClickOpenEditmodal} style={{ float: 'right', backgroundColor: '#fff', color:'#2C7FB2', marginLeft: 20, fontFamily: 'Poppins', fontSize: 13, fontWeight: 400 }}>
                                        Edit
                                    </Button>
                                </Typography>

                            </Grid>

                            <Grid container spacing={2} style={{ paddingTop: 20 }}>
                                <Grid item sm={6} >
                                    <Grid container>
                                        <Grid item xs={12} sm={5}>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesTitle}>Name</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesTitle}>Discount</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesTitle}>Price</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesTitle}>Total Price</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesInput}>Sonography</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesInput}>2 %</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesInput}>1000 Rs</Typography>
                                            <Typography variant="h6" noWrap={true} className={classes.facilitiesInput}>980 Rs</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sm={6} style={{ marginTop: '-10px' }}>
                                    <Paper elevation={3} className={classes.groupreports}>
                                        Sonography
                                        <IconButton edge="start" size='small' color="inherit" aria-label="close" style={{ float: 'right', marginTop: '70px', color: '#2C7FB2', backgroundColor: '#F0F0F0', marginRight: 10 }}>
                                            <EditIcon size='small' style={{}} />
                                        </IconButton>
                                    </Paper>

                                </Grid>

                            </Grid>

                            <Divider style={{ marginTop: 10, border: '1px solid #F0F0F0' }} />

                            <Grid container spacing={2} style={{ paddingTop: 10, paddingRight: 20 }}>
                                <Grid item sm={12} >
                                    <Typography style={{
                                        fontFamily: '"Poppins", san-serif;',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis',
                                        color: '#00318B',

                                    }}>
                                        Description
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <p className={classes.description}>Description</p>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>


                {/* Edit Details  */}


                <Dialog
                    open={openeditmodal}
                    onClose={handleCloseEditmodal}
                    maxWidth={maxWidth}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 20, color: '#2C7FB2' }}>{"Edit Services"}
                        <IconButton edge="start" color="inherit" onClick={handleCloseEditmodal} aria-label="close" style={{ float: 'right', color: '#2C7FB2', backgroundColor: '#F0F0F0' }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Grid container>
                                <Grid item xs={12}>
                                    <center>
                                        <TextField className={classes.textField} id="outlined-basic" size="small" label="Service Name" variant="outlined" style={{ marginTop: 0 }} />
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
                                            rowsMax={10} id="outlined-basic" size="small" label="Description" variant="outlined"
                                        />
                                    </center>
                                </Grid>
                                <Grid container>
                                    <Grid xs={12} sm={6}>
                                        <Button className={classes.btnregister} onClick={handleCloseEditmodal} style={{ float: 'right', marginRight: 20 }}>
                                            Cancle
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} sm={6}>
                                        <Button className={classes.btnregister} onClick={handleCloseEditmodal} autoFocus style={{ float: 'left', marginLeft: 20 }}>
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </DialogContentText>
                    </DialogContent>

                </Dialog>


            </Grid> {/* main grid */}

        </div >
    );
}
