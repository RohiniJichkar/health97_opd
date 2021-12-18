import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import SearchIcon from '@material-ui/icons/Search';
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
        margin: theme.spacing(1),
        minWidth: 180,
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
    },
    btnSearch: {
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
        height: 120,
        width: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#00318B',
        paddingTop: 50,
        borderRadius: 20
    },
}));


export default function DoctorReports() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSubmit = async () => {
        history.push('/DoctorUploadReports');
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
                            fontFamily: '"Poppins", san-serif;',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            color: '#2C7FB2',

                        }}>
                        <Button style={{ marginLeft: '-20px', backgroundColor: 'white', color: '#2C7FB2', borderRadius: 105, fontSize: '12px' }}> <ArrowBackIcon onClick={handleGoBack} />  </Button>
                        Reports
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} >
                    <Paper elevation={6} className={classes.paper} style={{ borderRadius: 10, paddingTop: 20, paddingBottom: 20 }}>
                        <Grid container xs={12}>
                            <Grid item xs={6}>
                                <center> <SearchIcon className={classes.searchIcon} />
                                    <InputBase
                                        placeholder="Search by Name/Email"
                                        classes={{
                                            // root: classes.inputRoot,
                                            input: classes.inputInput,

                                        }}
                                        variant='outlined'
                                        inputProps={{ 'aria-label': 'search' }}
                                        style={{ borderRadius: 15 }}
                                    > </InputBase> </center>
                            </Grid>
                            <Grid item xs={6} style={{ alignSelf: 'center', }}>
                                <Button className={classes.btnSearch} size="small" style={{ float: 'right', fontSize: 12, textAlign: 'center' }}>Search</Button>
                            </Grid>
                        </Grid>

                        {/* <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper}> */}
                        <TableContainer style={{ paddingTop: 20, position: 'relative' }} >
                            <Table className={classes.tbl} stickyHeader aria-label="sticky table">
                                <TableHead >
                                    <TableRow >
                                        {columns.map((column) => (
                                            <TableCell
                                                size="small"
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
                                                    fontSize: 12,
                                                }}

                                            >
                                                {column.label}

                                            </TableCell>

                                        ))}

                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {/* {rows
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
                                                                fontWeight: 200,
                                                                overflow: 'hidden',
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                                justifyContent: 'center'
                                                            }}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}

                                                            </TableCell>
                                                        );
                                                    })}

                                                </TableRow>
                                            );
                                        })} */}
                                    <TableRow hover role="checkbox">

                                        <TableCell size="small" style={{
                                            color: '#2C7FB2',
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 200,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            justifyContent: 'center',
                                            fontSize: 14,
                                        }}
                                        >No Records

                                        </TableCell>
                                        <TableCell style={{
                                            color: '#2C7FB2',
                                            fontFamily: '"Poppins", san-serif;',
                                            fontStyle: 'normal',
                                            fontWeight: 200,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            textOverflow: 'ellipsis',
                                            justifyContent: 'center'
                                        }}
                                        >
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <Divider />
                        <Grid container xs={12} style={{ paddingTop: 190 }}>
                            <Grid item xs={6}>
                                <center> <Button className={classes.btnUpload} onClick={handleSubmit} size="small" style={{ fontSize: 12 }}>Upload</Button> </center>
                            </Grid>
                            <Grid item xs={6}>
                                <center>   <Button size="small" className={classes.btnview} style={{ fontSize: 12 }}>View Report</Button> </center>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Paper elevation={6} style={{ borderRadius: 10, padding: 20, marginLeft: 25, marginRight: 20 }}>
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
                            View Reports
                        </Typography>


                        <Grid container spacing={2} style={{ paddingTop: 20 }}>
                            <Grid item sm={2} >
                                <Paper elevation={3} className={classes.groupreports} style={{ border: '1px solid #2C7FB2' }} >
                                    Sonography
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Colposcopy
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Blood Test
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    ECG
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography4
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography4
                                </Paper>
                            </Grid>
                        </Grid>

                        <Divider style={{ marginTop: 20, border: '1px solid #F0F0F0' }} />

                        <Grid container spacing={2} style={{ paddingTop: 30 }}>
                            <Grid item sm={2} >
                                <Paper elevation={3} className={classes.groupreports} >
                                    Sonography1
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography2
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography3
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography4
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography4
                                </Paper>
                            </Grid>
                            <Grid item sm={2}>
                                <Paper elevation={3} className={classes.groupreports}>
                                    Sonography4
                                </Paper>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
            </Grid> {/* main grid */}

        </div >
    );
}
