import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, TableCell, TableBody, TableRow, Table, TablePagination, TableHead, TableContainer, Typography, Button, Divider, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import DoctorNavbar from './Doctor_Navbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import Pdf from '../Prescription_VinayH7B8_38 (1).pdf';

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
}));


// function renderRow(props) {
//     const { index, style } = props;

//     return (
//         // <List>
//         <ListItem button style={style} key={index} >
//             <ListItem >
//                 <ListItemText
//                     style={{ borderBottom: '1px solid #F0F0F0' }}
//                     primary={`Title : Regular Checkup`}
//                     secondary={
//                         <React.Fragment>
//                             <Typography
//                                 component={'span'}
//                                 variant={"body2"}
//                                 color="textPrimary"
//                             >
//                                 {`Date : 2021-09-11`}
//                             </Typography>
//                         </React.Fragment>
//                     }
//                 />
//             </ListItem>
//             <Divider />
//         </ListItem>
//         // </List>
//     );
// }

// renderRow.propTypes = {
//     index: PropTypes.number.isRequired,
//     style: PropTypes.object.isRequired,
// };

const columns = [
    { id: 'title', label: 'Appointment Title', minWidth: 100 },
    {
        id: 'date',
        label: 'Appointment Date',
        minWidth: 60,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'treatedby',
        label: 'Treated By',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'prescriptions',
    //     label: 'Prescriptions',
    //     minWidth: 50,
    //     align: 'right',
    //     format: (value) => value.toFixed(2),
    // },


];

function createData(title, date, treatedby) {
    return { title, date, treatedby };
}

const rows = [
    createData('Fever', '07/11/2021', 'Dr. Pradeep Musale'),
    createData('Regular Checkup', '11/12/2021', 'Dr. Pradeep Musale'),
    createData('Sonography', '09/10/2021', 'Dr. Kirti Virnak'),
    createData('Flu', '07/12/2021', 'Dr. Akshaya Joshi'),
    createData('Headache', '07/12/2021', 'Dr. Komal Mhetre'),

];

export default function DoctorPatientMedicalHistory() {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [counterbtn, setCounterBtn] = React.useState(0);

    const handleIncrement = (event) => {
        setCounterBtn(counterbtn + 1);
    };

    const handleDecrement = (event) => {
        setCounterBtn(counterbtn - 1);
    };

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
        history.push("/DoctorPatientDetails_SendIn");
    };

    const viewprescription = () => {
        window.open(Pdf);
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
                        Patient Medical History
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} style={{ marginTop: 10 }}>
                    <Paper elevation={6} className={classes.paper} style={{ padding: 30 }}>
                        <Grid item sm={12} >
                            <center>
                                <div style={{ paddingBottom: 10 }}>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#00318B', fontFamily: 'Poppins' }}>
                                        Profile
                                    </Typography>
                                    <img src="Pallavi Kale.jpg" style={{ borderRadius: 50, height: 70 }}></img>
                                </div>

                                <Typography variant="h6" noWrap={true} style={{
                                    fontSize: 15,
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    color: 'gray',
                                    fontWeight: 400
                                }}>
                                    Pallavi Kale
                                </Typography>
                                <Grid container style={{ marginTop: 15 }}>
                                    <Grid item xs={6} style={{ borderRight: '1px solid #F0F0F0' }}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                Patient ID
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                Age
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6} style={{ borderRight: '1px solid #F0F0F0' }}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontFamily: 'Poppins', fontWeight: 600 }}>
                                                456773892
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 15, color: '#707070', fontFamily: 'Poppins', fontWeight: 600 }}>
                                                30
                                            </Typography>
                                        </center>
                                    </Grid>
                                </Grid>


                                <Grid container style={{ marginTop: 25 }}>
                                    <Grid item xs={6} >
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                Address :
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            Wakad, Pune
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ marginTop: 20 }}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                Mobile No :
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6} style={{ marginTop: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            9095009797
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} style={{ marginTop: 20 }}>
                                        <center>
                                            <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                                Email :
                                            </Typography>
                                        </center>
                                    </Grid>
                                    <Grid item xs={6} style={{ marginTop: 20 }}>
                                        <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                            pallavi@rajyugsolution.com
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </center>
                        </Grid>
                    </Paper>
                </Grid>


                <Grid item sm={12} sm={8} style={{ marginTop: 10, }} >
                    <Paper elevation={6} className={classes.paper} style={{ marginLeft: 25, marginRight: 20 }}>
                        <Grid container xs spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" noWrap={true} style={{ fontSize: 16, color: '#00318B', fontFamily: 'Poppins' }}>
                                    Details
                                </Typography>
                            </Grid>


                            <Grid item xs={2}>
                                <center>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                        From :
                                    </Typography>
                                </center>
                            </Grid>
                            <Grid item xs={3}>
                                <input id="fromdate" type="date" style={{ border: '1px solid #F0F0F0', height: 35, fontFamily: 'Poppins', color: '#707070' }} />
                            </Grid>
                            <Grid item xs={2}>
                                <center>
                                    <Typography variant="h6" noWrap={true} style={{ fontSize: 14, color: '#707070', fontFamily: 'Poppins' }}>
                                        To :
                                    </Typography>
                                </center>
                            </Grid>
                            <Grid item xs={3}>
                                <input id="todate" type="date" style={{ border: '1px solid #F0F0F0', height: 35, color: '#707070' }} />
                            </Grid>
                            <Grid item xs={2}>
                                <Button className={classes.btnview}>View</Button>
                            </Grid>

                            <Grid item sm={12}>
                                <TableContainer >
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
                                                    textAlign: 'center',
                                                    backgroundColor: '#78B088',
                                                    color: '#fff',
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: 600,
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    textAlign: 'center'
                                                }}>Prescriptions</TableCell>

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
                                                                        color: '#00318B',
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
                                                            <TableCell style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <a href='/' onClick={viewprescription}>View Prescription</a>
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
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid> {/* main grid */}

        </div >
    );
}
