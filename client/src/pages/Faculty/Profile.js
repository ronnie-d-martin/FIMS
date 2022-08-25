import React from 'react';
import Header from '../../components/Faculty/Header'
import ProfileTable from '../../components/Faculty/ProfileTable'
import Options from "../../components/Faculty/Options"
import { Stack, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';

export default function Profile () {
    
    return (
        <div className='profile-main'>
            <Stack direction='column'>
                <Header component={<ProfileTable/>}/>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
                    <BottomNavigation >
                        <Options />
                    </BottomNavigation>
                </Paper>
            </Stack>  
             
        </div>
    );
}