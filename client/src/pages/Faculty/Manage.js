import React from 'react';
import Header from '../../components/Faculty/Header'
import ManageTable from '../../components/Faculty/ManageTable'
import Options from "../../components/Faculty/Options"
import { Stack, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';

export default function Manage () {
    return (
        <div className='profile-main'>
            <Stack direction='column'>
                <Header title="MANAGE" component={<ManageTable/>}/>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
                    <BottomNavigation >
                        <Options />
                    </BottomNavigation>
                </Paper>
            </Stack>  
             
        </div>
    );
}