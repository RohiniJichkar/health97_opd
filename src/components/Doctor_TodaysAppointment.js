import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, FormControl, Radio, InputLabel, TextField, Typography, Button, Avatar, Table, TableContainer, TableBody, TableCell, TableHead, InputBase, TableRow, TablePagination, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const drawerWidth = 240;

const columns = [
    { id: 'name', label: 'NAME', minWidth: 100 },
    { id: 'uid', label: 'UID', minWidth: 60 },
    {
        id: 'mobile',
        label: 'MOBILE NO',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'email',
        label: 'EMAIL ID',
        minWidth: 100,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'appchannel',
        label: 'APPOINTMENT CHANNEL',
        minWidth: 50,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'date',
        label: 'DATE & TIME',
        minWidth: 50,
        align: 'left',
        format: (value) => value.toFixed(2),
    },

];

function createData(name, uid, mobile, email, appchannel, date) {
    return { name, uid, mobile, email, appchannel, date };
}

const rows = [
    createData('Pallavi Kale', 'Pallavi123', '8977889898', 'pallavi@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Rudrayani Tidake', 'Rudrayani123', '67848484848', 'rudra@gmail.com', 'By App', '2021-09-23 00:19:21'),
    createData('Kajal Bhagavat', 'kajal123', '7833674758', 'kajal@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Shweta Wankhade', 'shweta908', '7484949490', 'shweta@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Rutuja Pingle', 'rutuja892', '94848590332', 'rutuja@gmail.com', 'By App', '2021-09-23 00:19:21'),
    createData('Sharayu Shende', 'sharayu90', '8977889898', 'sharayu@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Gunjun Kale', 'Gunjan356', '64748897867', 'gunjan@gmail.com', 'By App', '2021-09-23 00:19:21'),
    createData('Pallavi Kale', 'Pallavi123', '8977889898', 'pallavi@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Rudrayani Tidake', 'Rudrayani123', '67848484848', 'rudra@gmail.com', 'By App', '2021-09-23 00:19:21'),
    createData('Kajal Bhagavat', 'kajal123', '7833674758', 'kajal@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Shweta Wankhade', 'shweta908', '7484949490', 'shweta@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Rutuja Pingle', 'rutuja892', '94848590332', 'rutuja@gmail.com', 'By App', '2021-09-23 00:19:21'),
    createData('Sharayu Shende', 'sharayu90', '8977889898', 'sharayu@gmail.com', 'Walk In', '2021-09-23 00:19:21'),
    createData('Gunjun Kale', 'Gunjan356', '64748897867', 'gunjan@gmail.com', 'By App', '2021-09-23 00:19:21'),
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
            width: '30ch',
            height: '30px'
        },
        border: '1px solid lightgray',

        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
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
        marginLeft: 50
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
        width: 400,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
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
    textField: {
        // [`& fieldset`]: {
        //     borderRadius: 25,
        // },
        padding: 8,
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        textAlign: 'center',
        width: '100%'
    },
    btn: {
        color: '#78B088',
        backgroundColor: '#ffffff',
        fontFamily: '"Poppins", san-serif;',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        textAlign: 'center',
        marginRight: 20
    }

}));


export default function DoctorTodaysAppointment() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const [selectedValue, setSelectedValue] = useState('');

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
                        Morning Slots
                    </Typography>

                    <Grid item xs={12} style={{ paddingTop: 10 }}>

                        <Button variant="contained" className={classes.btn} >
                            08:00
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            08:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            09:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            09:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            10:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            10:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            11:00
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            11:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            12:00
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            12:30
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            01:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            01:30
                        </Button>
                    </Grid>
                </Grid>

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
                            paddingTop: 20
                        }}>
                        Evening Slots
                    </Typography>

                    <Grid item xs={12} style={{ paddingTop: 10 }}>

                        <Button variant="contained" className={classes.btn}  >
                            04:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            05:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            05:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            06:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            06:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            07:00
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            07:30
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            08:00
                        </Button>
                        <Button variant="contained" className={classes.btn}  >
                            08:30
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            09:00
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            09:30
                        </Button>
                        <Button variant="contained" className={classes.btn} >
                            10:00
                        </Button>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{ paddingTop: 25 }}>
                    <SearchIcon className={classes.searchIcon} />
                    <InputBase
                        placeholder="Search by Name/Email"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,

                        }}
                        variant='outlined'
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ borderRadius: 15 }}
                    > </InputBase>

                    <Typography variant="h8" noWrap={true} style={{ paddingLeft: 40, paddingRight: 20 }}>
                        From
                    </Typography>

                    <input id="fromdate" type="date" style={{ border: '1px solid #F0F0F0', height: 35 }} />

                    <Typography variant="h8" noWrap={true} style={{ paddingLeft: 40, paddingRight: 20 }}>
                        To
                    </Typography>
                    <input id="fromdate" type="date" style={{ border: '1px solid #F0F0F0', height: 35 }} />

                    <Button className={classes.btnview}>View</Button>

                </Grid>

                <Grid item xs={12} style={{ marginTop: 10 }}>

                    <Paper elevation={6} className={classes.paper}>

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
                                                    <TableCell style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Button color="primary"><EditIcon /> </Button>
                                                        <Button color="primary"><DeleteIcon /></Button>
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
                        {/* </Paper> */}

                    </Paper>


                </Grid>
            </Grid> {/* main grid */}

        </div >
    );
}
