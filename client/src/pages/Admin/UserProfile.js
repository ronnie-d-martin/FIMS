import React,{useState} from 'react';
import AdminHeader from '../../components/Admin/AdminHeader'
import UserProfileTable from '../../components/Admin/UserProfileTable'
import Options from "../../components/Admin/Options"
import { Stack, Paper } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation';
import { useNavigate, useParams  } from 'react-router-dom';
export default function AdminDashboard (id) {
    const [currentId, setCurrentId] = useState(id);
    
    return (
        <Stack direction='column'>
            <AdminHeader title="Accounts" component={<UserProfileTable currentId={currentId} setCurrentId={setCurrentId}/>}/>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
                <BottomNavigation >
                    <Options />
                </BottomNavigation>
        </Paper>
        </Stack>
    );
}