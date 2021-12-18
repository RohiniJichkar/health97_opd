import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Container, AppBar, Toolbar, CssBaseline, Typography, Drawer, Divider, MenuItem, Menu, ListItem, ListItemIcon, ListItemText, List, IconButton, Grid, Paper, Link } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Footer from './Footer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import TodayIcon from '@material-ui/icons/Today';
import ListIcon from '@material-ui/icons/List';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PeopleIcon from '@material-ui/icons/People';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Redirect } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TvIcon from '@material-ui/icons/Tv';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color: '#2C7FB2'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    fontFamily: '"Poppins", san-serif;',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#2C7FB2',
    fontFamily: '"Poppins", san-serif;',
    fontStyle: 'normal',
    fontWeight: 400,
    color: '#fff'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
    backgroundColor: '#2C7FB2',
    color: '#fff'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    fontFamily: '"Poppins", san-serif;',
    fontStyle: 'normal',
    fontWeight: 400,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  clinicname: {
    // flexGrow: 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0),
    },
    flex: 1,
    textAlign: 'center',
    color: '#00318B',
    fontFamily: '"Poppins", san-serif;',
    fontStyle: 'normal',
    fontWeight: 800,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  drname: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    padding: theme.spacing(1),
    flex: 0.2,
    alignSelf: 'right',
    textAlign: 'right',
    color: '#00318B',
    fontFamily: '"Poppins", san-serif;',
    fontStyle: 'normal',
    fontWeight: 400,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'

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

  services: {
    color: '#78B088',
    fontFamily: '"San Francisco", Helvetica, Arial, san-serif;',
  },
  report: {
    justifyContent: 'center',
    color: '#78B088',
    fontFamily: '"San Francisco", Helvetica, Arial, san-serif;',
    fontWeight: 'bold'
  },
  grid: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }
}));


export default function DoctorNavbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const [authProfile, setAuthProfile] = React.useState(true);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const openprofile = Boolean(anchorElProfile);
  const history = useHistory();

  const handleChange = (event) => {
    setAuthProfile(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElProfile(null);
    history.push("/DoctorProfile");
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const menuItems = [
    {
      text: 'Home',
      icon: HomeIcon,
      onClick: () => history.push("/DoctorHome"),
    },
    {
      text: 'Dashboard',
      icon: DashboardIcon,
      onClick: () => history.push("/DoctorDashboard"),
    },
    {
      text: "Appointments On TV",
      icon: TvIcon,
      onClick: () => history.push("/Doctor_TV_TodaysAppointments"),
    },
    {
      text: 'Book Appointment',
      icon: AssignmentTurnedInIcon,
      onClick: () => history.push("/DoctorBookAppointment"),
    },
    {
      text: 'Clinic Patients',
      icon: PeopleOutlineIcon,
      onClick: () => history.push("/DoctorClinicPatients"),
    },
    {
      text: "Upload Reports",
      icon: AssignmentIcon,
      onClick: () => history.push("/DoctorReports"),
    },
    {
      text: 'Home Visitor Requests',
      icon: ChatIcon,
      onClick: () => history.push('/DoctorHomeVisitRequest'),
    },
    {
      text: 'Clinic Staff',
      icon: SupervisorAccountIcon,
      onClick: () => history.push('/DoctorClinicStaff'),
    },
    {
      text: "Home Visitors",
      icon: DirectionsWalkIcon,
      onClick: () => history.push("/DoctorHomeVisitors"),
    },
    {
      text: "Medicines",
      icon: LocalHospitalIcon,
      onClick: () => history.push("/DoctorAddMedicine"),
    },
    {
      text: "Clinic Services",
      icon: SettingsIcon,
      onClick: () => history.push("/DoctorClinicServices"),
    },
    
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ backgroundColor: 'white' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open1}
            onClose={handleClose}
          >
          
          </Menu>
          <div>
            <img src="h97 logo horizontal-01.png" alt="logo" className={classes.logo} height='40px' style={{ flex: 1 }} />
          </div>
          <div className={classes.clinicname}>
            <Typography variant="h5" noWrap={true}>
              AKSHAY NURSING HOME
            </Typography>
          </div>
          <div className={classes.drname}>
            <Typography variant="h8" noWrap={true}  >
              Dr. Pradeep Musale
            </Typography>
          </div>
          {auth && (
            <div className={classes.profile}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"

              >
                <AccountCircle style={{ height: 35, width: 35 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElProfile}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openprofile}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{ color: '#fff' }}>
          <IconButton onClick={handleDrawerClose} style={{ color: '#fff' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map(({ text, icon: Icon, onClick }, index) => (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon style={{ color: '#fff' }}>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      
      </Drawer>

      <Footer />
    </div>
  );
}
