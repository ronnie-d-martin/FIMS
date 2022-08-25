import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import '@fontsource/roboto/500.css';
import { Box, Drawer, CssBaseline, Avatar, IconButton, MenuItem, Menu, AppBar, Toolbar, List,  Typography, Divider, ListItem,  ListItemIcon, ListItemText, } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Swal from "sweetalert2";
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import Logo from "../../logo/INFOSYsecond.png"
import { pink } from '@mui/material/colors';
import FeedIcon from '@mui/icons-material/Feed';
import HandymanIcon from '@mui/icons-material/Handyman';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import {getFacultyData} from '../../actions/actionsAdmin';
const drawerWidth = 300;


export default function AdminHeader(props) {
  const navigate = useNavigate();
  const [userE, setuserE] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  /*Navigations*/
  const handleOnSignOut = () => {
    setAnchorEl(null);
    const swalWithBootstrapButtons = Swal.mixin({

    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log-out!',
      cancelButtonText: 'No, cancel!',
      
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Log-out!',
          'Your account has been logged-out.',
          'success',
   

          navigate('/'),
      
         
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Log-out aborted!',
          'error'
        )
      }
    })



}

const handleDashboard = () => {
  navigate('/dashboard')
}

const handleUserProfile = () => {
  navigate('/userprofile')
}

const handleViewAccounts = () => {
  navigate('/handleaccounts')
}

const handleViewRequests = () => {
  navigate('/handlerequest')
}

const toAboutManage = () => {
  navigate('/aboutmanage')
}

  
  /*Navigations*/

  /* Profile Menu */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  /* Styles */
  const iconStyle = { color: 'white'}

  /* Account Avatar */
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'white' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: '#14213D' }}>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ color:'#14213D' }}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  >
                <Avatar alt="Admin" sx={{ bgcolor: pink[500] }}> <AdminPanelSettingsTwoToneIcon/></Avatar>
                </StyledBadge>
                <Typography 
                variant="body1" 
                noWrap 
                component="div" 
                sx={{ paddingLeft: 2}} 
                > 
                ADMIN
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleOnSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#14213D'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ justifyContent:'center' }}>
          <img src={Logo} width={270} height={270} alt="Logo" />
        </Toolbar>

        <Divider />

        <List sx={{ color:'white' }}>

            <ListItem button key='profile' sx={{ padding: '10' }} onClick={handleDashboard}>
              <ListItemIcon>
                <PersonIcon sx={iconStyle} />
              </ListItemIcon>
              <ListItemText primary='DASHBOARD' />
            </ListItem>

            <Divider />


            <ListItem button key='accounts' onClick={handleViewAccounts}>
              <ListItemIcon>
                <HandymanIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary='ACCOUNTS' />
            </ListItem>

            <Divider />
            <ListItem button key='requests' onClick={handleViewRequests}>
              <ListItemIcon>
                <ManageAccountsIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary='REQUESTS' />
            </ListItem>
            <Divider />
            <ListItem button key='about' onClick={toAboutManage}>
              <ListItemIcon>
                <ManageAccountsIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary='ABOUT' />
            </ListItem>
        </List>
        <Divider />
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, padding: 10 }}
      >
        {props.component}

      </Box>
    </Box>
  );
}
