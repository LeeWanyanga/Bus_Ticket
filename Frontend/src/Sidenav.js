import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import { IoMdHome } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 36,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  paddingLeft: 12,
}));



export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [menudata, setMenudata] = useState("Home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center' }}> Easy Going 101</h3>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItem enablePadding button  onClick={() => setMenudata("Home")}>
            <StyledListItemIcon>
              <IoMdHome />
            </StyledListItemIcon>
            <StyledListItemText primary="Home" />
          </ListItem>
         
          <ListItem enablePadding button  onClick={() => setMenudata("Ticket")}>
            <StyledListItemIcon>
            <IoTicketSharp />
            </StyledListItemIcon>
            <StyledListItemText primary="Book Your Tickets" />
          </ListItem>

          <ListItem enablePadding button  onClick={() => setMenudata("Destination")}>
            <StyledListItemIcon>
            <IoLocationSharp />
            </StyledListItemIcon>
            <StyledListItemText primary="Destinations" />
          </ListItem>

          <Divider/>

          <ListItem enablePadding button  onClick={() => setMenudata("Contact")}>
            <StyledListItemIcon>
            <IoCall />
            </StyledListItemIcon>
            <StyledListItemText primary="Contact Us" />
          </ListItem>

          <ListItem enablePadding button onClick={() => setMenudata("Profile")}>
            <StyledListItemIcon>
            <IoPersonCircleSharp />
            </StyledListItemIcon>
            <StyledListItemText primary="Your Profile" />
          </ListItem>

        </List>
        
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {menudata === "Home" && <Home />}
        {menudata === "Ticket" && <Ticket />}
        {menudata === "Destination" && <Destination />}
        {menudata === "Contact" && <Contact />}
        {menudata === "Profile" && <Profile />}
      </Box>
    </Box>
  );
}





