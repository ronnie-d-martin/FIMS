import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import '@fontsource/roboto/500.css';
import { Box, Drawer, CssBaseline, Avatar, IconButton, ListItemButton, MenuItem, Menu, AppBar, Toolbar, List,  Typography, Divider, ListItem,  ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { getFaculty }from '../../actions/actionsFaculty';
import decode from 'jwt-decode';
import Logo from "../../logo/INFOSYsecond.png"
import Swal from "sweetalert2";
import * as actionType from '../../constants/actionTypes';

import HandymanIcon from '@mui/icons-material/Handyman';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';


const drawerWidth = 300;

export default function Header(props) {

  const [userE, setuserE] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
 
  const [postData, setPostData] = useState([]);
  const {user, isLoading} = useSelector((state) => state.facultyData.user);
  useEffect(() => {
    dispatch(getFaculty(userE?.result._id));

  }, [dispatch])




  useEffect (() => {
    if(user)
    {
      setPostData([{...user}]);
    }
    return () => setPostData([{...user}]);
},[user]);
  

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
          dispatch({ type: actionType.LOGOUT }),

          navigate('/'),
      
          setuserE(null),
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


    
    

   
  };

  useEffect(() => {
    const token = userE?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) handleOnSignOut();
    }

    setuserE(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  /*Navigations*/

  const toProfile = () => {
    navigate('/home');
  }

  const toPersonalInfo = () => {
    navigate('/manage', {state: {id:1, name:'personal'}})
  }

  const toEducation = () => {
    navigate('/manage', {state: {id:2, name:'education'}})
  }

  const toCivil = () => {
    navigate('/manage', {state: {id:3, name:'civil'}})
  }

  const toWork = () => {
    navigate('/manage', {state: {id:4, name:'work'}})
  }

  const toTraining = () => {
    navigate('/manage', {state: {id:5, name:'training'}})
  }

  const toAccount = () => {
    navigate('/account');
  }
  const toAbout = () => {
    navigate('/about');
  }
  /*Navigations*/



  /* Collapsable Drawer */
  const handleDrawer = () => {
    setOpen(!open);
  };

  /* Profile Menu */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);

  };
  const handletoAcc= () => {
    setAnchorEl(null);
    navigate('/account')
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
      {postData.map((data, key) => ( 
      <AppBar key={key}
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
                aria-label="account of current userE"
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
                <Avatar alt={data.name} src={data.picture} />
                </StyledBadge>
                <Typography 
                variant="body1" 
                noWrap 
                component="div" 
                sx={{ paddingLeft: 2}} 
                > 
                {data.firstName + ' ' + data.lastName}
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
                <MenuItem onClick={handletoAcc}>My Account</MenuItem>
                <MenuItem onClick={handleOnSignOut}>Sign Out</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
        ) )}
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

            <ListItem button key='profile' sx={{ padding: '10' }} onClick={toProfile}>
              <ListItemIcon>
                <PersonIcon sx={iconStyle} />
              </ListItemIcon>
              <ListItemText primary='PROFILE' />
            </ListItem>

            <Divider />


            <ListItem button key='manageProf' onClick={handleDrawer}>
              <ListItemIcon>
                <HandymanIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary='MANAGE' />
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit sx={{ bgcolor: '#18233B'}}>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={toPersonalInfo}>
                  <ListItemIcon>
                    <PersonIcon sx={iconStyle}/>
                  </ListItemIcon>
                  <ListItemText primary="Personal Information" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} onClick={toEducation}>
                  <ListItemIcon>
                    <SchoolIcon sx={iconStyle}/>
                  </ListItemIcon>
                  <ListItemText primary="Educational Background"/>
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} onClick={toCivil}>
                  <ListItemIcon>
                    <AssuredWorkloadIcon sx={iconStyle}/>
                  </ListItemIcon>
                  <ListItemText primary="Civil Service Eligibility" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} onClick={toWork}>
                  <ListItemIcon>
                    <WorkHistoryIcon sx={iconStyle}/>
                  </ListItemIcon>
                  <ListItemText primary="Work Experience" />
                </ListItemButton>

                <ListItemButton sx={{ pl: 4 }} onClick={toTraining}>
                  <ListItemIcon>
                    <LocalLibraryIcon sx={iconStyle}/>
                  </ListItemIcon>
                  <ListItemText primary="Learning and Development Interventions/Training Programs Attended" />
                </ListItemButton>
              </List>
            </Collapse>


            <Divider />
            <ListItem button key='account' onClick={toAccount}>
              <ListItemIcon>
                <ManageAccountsIcon sx={iconStyle}/>
              </ListItemIcon>
              <ListItemText primary='MY ACCOUNT' />
            </ListItem>
            <Divider />
            <ListItem button key='about' onClick={toAbout}>
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
