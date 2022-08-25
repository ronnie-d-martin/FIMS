import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams  } from 'react-router-dom';
import { Button, Paper, Stack, Typography } from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InboxIcon from '@mui/icons-material/Inbox';
import { indigo } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import {getFacultyData} from '../../actions/actionsAdmin';

export default function Dashboard () {

    const navigate = useNavigate();
    
    
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.adminData);

    useEffect(() => {
        dispatch(getFacultyData());
      }, [dispatch])

    const verified = users.filter(({status}) => status !== 'unverified');
    const unverified = users.filter(({status}) => status !== 'verified');
    console.log(verified);

    const handleViewAccounts = () => {
        navigate('/handleaccounts')
      }
    
      const handleViewRequests = () => {
        navigate('/handlerequest')
      }


    return (
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={3} sx={{ height:500 }}>
           
            <Paper onClick={handleViewAccounts} elevation={5} sx={{ height:'auto', width:300, padding:6,   backgroundColor: indigo[50],
        '&:hover': {backgroundColor: indigo[900]}, cursor: 'pointer' }}>
                <Stack direction='row' justifyContent='center' alignItems='flex-start'  spacing={1}>
                <SupervisorAccountIcon />
                <Typography variant='h6' sx={{ fontWeight:500, textTransform:'uppercase' }}>Accounts</Typography>
                </Stack>
                <Typography variant='h1' sx={{ fontWeight:700 }}>{verified.length > 0 ? verified.length : 0}</Typography>
               
            </Paper>

            <Paper onClick={handleViewRequests} elevation={3} sx={{ height:'auto', width:300, padding:6,   backgroundColor: indigo[50],
        '&:hover': {backgroundColor: indigo[900]}, cursor: 'pointer' }}>
                <Stack direction='row' justifyContent='center' alignItems='flex-start'  spacing={1}>
                    <InboxIcon />
                    <Typography variant='h6' sx={{ fontWeight:500, textTransform:'uppercase' }}>Requests</Typography>
                </Stack>
                <Typography variant='h1' sx={{ fontWeight:700 }}>{unverified.length > 0 ? unverified.length : 0}</Typography>
            </Paper>
        </Stack>
    );
}