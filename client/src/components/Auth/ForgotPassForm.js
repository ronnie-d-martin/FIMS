import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Stack, Typography, TextField, Alert} from '@mui/material';
import '@fontsource/roboto/300.css';

export default function ForgotPassForm () {

     /*Navigate*/
     const navigate = useNavigate()

     const handleBack = () => {
         navigate('/');
     }

     const forgotPassFormStyle = { paddingTop:2, width: 330 }

    return (
        <div className='forgotPassForm-main'>
            <Stack direction={'column'} spacing={2} sx={forgotPassFormStyle} justifyContent="center">
                <Typography variant="h3" sx={{ fontWeight:500, color: '#14213D' }}>FORGOT YOUR PASSWORD?</Typography>
                <Typography variant='body2' sx={{ color: "#14213D", align:'center' }}>Please enter your email address.</Typography>
                <Alert severity="success">Please check your email. Thank you!</Alert>
                <TextField required fullWidth id="filled-required" variant='filled' type="email" label="Email Address" sx={{ bgcolor: 'white', borderRadius: 2 }}/>
        
                <div align="center">
                    <Button variant="contained" sx={{ bgcolor: "#F8049C", margin:1, borderRadius:10, width:'auto'}}>Request Password</Button>
                    <Typography variant='body2' onClick={handleBack} sx={{ color: 'blue', cursor:'pointer' }}>Back to Sign In</Typography>  
                </div>
            </Stack>
        </div>
    );
}